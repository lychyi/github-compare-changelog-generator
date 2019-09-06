# Github Compare Changelog Generator
Uses the resulting HTML document from the Github compare feature to generate markdown for changelogs.

## Usage
### CLI
```sh
gccg --compareUrl=https://github.com/Workday/canvas-kit/compare/v3.0.0-alpha.5...master --outFile=./tmp/CHANGELOG.md
```

### Output
```md
- chore(storybook): Fix console warnings ([#116](https://github.com/Workday/canvas-kit/pull/116)) [@anicholls](https://github.com/anicholls)
- fix(TextButton): Update TextButton focus outline for accessibility ([#115](https://github.com/Workday/canvas-kit/pull/115)) [@jstin](https://github.com/jstin)
- fix(avatar): Update background color when url is defined ([#120](https://github.com/Workday/canvas-kit/pull/120)) [@anicholls](https://github.com/anicholls)
- fix(header): Remove duplicate icon buttons ([#122](https://github.com/Workday/canvas-kit/pull/122)) [@anicholls](https://github.com/anicholls)
- fix(IconButton): Pass buttonRef to button element ([#128](https://github.com/Workday/canvas-kit/pull/128)) [@mannycarrera4](https://github.com/mannycarrera4)
- fix: Add menu component to universal module ([#127](https://github.com/Workday/canvas-kit/pull/127)) [@lychyi](https://github.com/lychyi)
- fix(Layout): Add check for null children ([#119](https://github.com/Workday/canvas-kit/pull/119)) [@anicholls](https://github.com/anicholls)
- fix: Add missing static variables and fix Popup padding static variable ([#110](https://github.com/Workday/canvas-kit/pull/110)) [@anicholls](https://github.com/anicholls)
- docs(contributing): Update git guidelines to reflect new PR strategy ([#109](https://github.com/Workday/canvas-kit/pull/109)) [@anicholls](https://github.com/anicholls)
- Reduce number of manual steps required after running create-module.sh ([#46](https://github.com/Workday/canvas-kit/pull/46)) [@roblevintennis](https://github.com/roblevintennis)
- ci(travis): Break out testing to stages ([#82](https://github.com/Workday/canvas-kit/pull/82)) [@d-bye](https://github.com/d-bye)
- refactor(LoadingSpinner): Deprecate LoadingSpinner ([#142](https://github.com/Workday/canvas-kit/pull/142)) [@sahlhoff](https://github.com/sahlhoff)
- fix(FormField): Add component prefix to exported enums and interfaces [#146](https://github.com/Workday/canvas-kit/pull/146) [@sahlhoff](https://github.com/sahlhoff)
- fix: Add code-coverage to *.ts files ([#148](https://github.com/Workday/canvas-kit/pull/148)) [@NicholasBoll](https://github.com/NicholasBoll)
- refactor(PageHeader): Update marketing and breakpoint props ([#143](https://github.com/Workday/canvas-kit/pull/143)) [@sahlhoff](https://github.com/sahlhoff)
- chore: Update commit validation to use commitlint ([#124](https://github.com/Workday/canvas-kit/pull/124)) [@Patil2099](https://github.com/Patil2099)
- fix(page-header): Add missing dependency ([#149](https://github.com/Workday/canvas-kit/pull/149)) [@anicholls](https://github.com/anicholls)
- feat: Add watch support for faster development ([#161](https://github.com/Workday/canvas-kit/pull/161)) [@NicholasBoll](https://github.com/NicholasBoll)
- refactor(form-field): Add inputProviderDecorator to Storybook config ([#164](https://github.com/Workday/canvas-kit/pull/164)) [@stephanerangaya](https://github.com/stephanerangaya)
- Fix positioning of Checkbox and Radio react components ([#160](https://github.com/Workday/canvas-kit/pull/160)) [@stephanerangaya](https://github.com/stephanerangaya)
- fix(status-indicator): Export type and emphasis enums ([#166](https://github.com/Workday/canvas-kit/pull/166)) [@anicholls](https://github.com/anicholls)
- chore: Release 3.0.0.alpha.6 ([#167](https://github.com/Workday/canvas-kit/pull/167)) [@lychyi](https://github.com/lychyi)
- refactor(SidePanel): API update and fixes ([#123](https://github.com/Workday/canvas-kit/pull/123)) [@anicholls](https://github.com/anicholls)
- feat: Standardize elemProps prop spread behavior ([#150](https://github.com/Workday/canvas-kit/pull/150)) [@anicholls](https://github.com/anicholls)
```

## Custom Formatters
TODO

## API
TODO