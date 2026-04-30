# Repository Guidelines

## Project Overview

`opencc-js` is a pure JavaScript implementation of Open Chinese Convert for browsers and Node.js. Dictionary data is generated from `opencc-data` at build time and bundled into `dist`.

## Common Commands

- `npm run build`: generate dictionary modules and Rollup bundles.
- `npm test`: build the package, run ESM and CommonJS smoke tests, and run OpenCC upstream test cases.
- `npm run test:opencc`: run only the OpenCC upstream test cases.
- `npm pack --dry-run`: inspect the files that will be published to npm.

## Development Notes

- Keep runtime source changes scoped to `src/`; generated package artifacts live under `dist/`.
- Do not hand-edit generated files in `dist`; run `npm run build` instead.
- Preserve both ESM and CommonJS package entry behavior when changing `exports` or build outputs.
- Keep changelog entries in `CHANGELOG.md`; update the `Unreleased` section regularly when making user-visible, packaging, build, or release-process changes.
- Published npm contents are controlled by the `files` list in `package.json`.

## Verification

Before release-oriented changes, run:

```sh
npm test
npm pack --dry-run
```
