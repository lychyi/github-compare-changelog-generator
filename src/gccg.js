const gh = require('parse-github-url');
const { JSDOM } = require('jsdom');

// Default formatter for parsed commits
const succinctFormatter = ({ url, author, msg }) => `- ${linkifyMsg(url, msg.split('\n')[0])} ${linkifyAuthor(url, author)}`;

const formatCommits = async (compareUrl, formatter) => {
  let output;

  // Using parse-github-url to extract info from compare URL
  // e.g. https://github.com/Workday/canvas-kit/compare/v3.0.0-alpha.5...master is...
  // ${protocol}//${host}/${owner}/${name}/${branch}/${filepath}
  const { branch } = gh(compareUrl);
  if (branch !== 'compare') throw "Must be a valid url: it is usually in the format: https://github.com/<org>/<repo>/<start>...<end>";

  output = (await getCommitDataFromUrl(compareUrl))
    .map(formatter || succinctFormatter).join('\n');
  
  return output;
}

const getCommitDataFromUrl = async (url) => {
  let document;

  try {
    document = (await JSDOM.fromURL(url)).window.document;
  } catch(e) {
    throw new Error(`Unable to get a document from ${compareUrl}: ${e}`);
  }

  let commits = [];
  const nodes = document.querySelectorAll(".TimelineItem--condensed");

  if (nodes.length === 0) {
    throw "We couldn't find any commits on the page, make sure you have commits in the range you're asking for: https://github.com/<org>/<repo>/<start>...<end>";
  }

  nodes.forEach(node => {    
    // Other things to consider (PR #, committer, how do we handle multiple authors?, commit dates, breaking change?)
    // conventional commit msg? type(scope): description
    commits.push({
      url: url,
      author: node.querySelector("a.avatar img").alt.slice(1), // returns username without '@'
      msg: node.querySelector("code a").title, // returns the entire commit message (every line)
    })
  });

  return commits;
}

// Detects the PR number in the string and adds an explicit link in markdown
// Similar to how Github does it for HTML
const linkifyMsg = (url, msg) => {
  const { protocol, host, repo } = gh(url);

  // This probably can be done with one matcher
  const prMatcher = /[\s(]#\d+[\s)]|^#\d+|#\d+$/
  return msg.replace(prMatcher, matched => {
    const prNumberMatcher = /#\d+/;

    return matched.replace(prNumberMatcher, prNumber => {
      // Should match and replace something like #123 from (#123)
      // with [#123](https://github.com/{$repo}/pull/123)
      return `[${prNumber}](${protocol}//${host}/${repo}/pull/${prNumber.slice(1)})`;
    })
  })
}


const linkifyAuthor = (url, author) => {
  const { protocol, host } = gh(url);

  return `[@${author}](${protocol}//${host}/${author})`;
}

module.exports = {
  succinctFormatter,
  formatCommits,
  getCommitDataFromUrl,
  linkifyMsg,
  linkifyAuthor
};
