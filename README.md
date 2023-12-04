## Setup

1. Setup the project using `npm install` (repository was setup using Node 18.0.0 just in case);
2. (optional I guess) Run `npm run dev`;

## Case 1

Run `.\node_modules\.bin\skott.cmd .\packages\index.ts --displayMode="webapp" --verbose` on Windows or `.\node_modules\.bin\skott .\packages\index.ts --displayMode="webapp" --verbose` on Mac.

**Result:** only `index.ts` is being displayed, which is not correct, as we have import statements in that file.

## Case 2

1. Switch to branch `fix/unprefixed-paths`;
2. Run the same command as in step `Case 1`;

**Result:** Result all files are being displayed correctly.

## Differences between Case 1 and Case 2

- Removed "@"-symbols from path alias configuration in tsconfig.json;
- Removed "@"-symbols from import statements in typescript files;
- Change `xmlParser` alias to `xml-parser` (otherwise skott can't find the folder);
