const { JSDOM } = require('jsdom');

// Get opts, but for now defaults
const GH_COMPARE_URL = `https://github.com/Workday/canvas-kit/compare`
const FROM = `v3.0.0-alpha.5`;
const TO = `master`;

generate(FROM, TO);

async function generate(from, to) {
  const url = `${GH_COMPARE_URL}/${FROM}...${TO}`;
  const { document } = (await JSDOM.fromURL(url)).window;
  // Generate a JSDOM doc from the response

  console.log(document.querySelectorAll(".TimelineItem--condensed"));
}
