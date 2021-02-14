# LIBRARY NAME

![release](https://github.com/Buddy-Git/typescript-library-boilerplate/workflows/Release%20WFA/badge.svg)
![beta](https://github.com/Buddy-Git/typescript-library-boilerplate/workflows/Release%20WFA%20-%20Beta/badge.svg)

## Development

- Run `nvm use` to use the node version being used for development
- Ensure `$PATH` variable contains `./node_modules/.bin` path to use local `tsc` and other dependant binary being installed by `npm i`.

To run in watch mode use

`npm run dev`.

## Unit Tests

All the unit test must be written in file whose name matches `src/**/*.spec.ts`. These files has been ignored by `tsconfig.json` file.

Following scripts can be used:

- `npm run test`: To run test using `mocha` suite.
- `npm run cov`: To run tests and generate code coverage reports.
- `npm run dev:test:mac` and `npm run dev:cov:mac` to run test or coverage and open html files.

## CI/CD

- Using GitHub Actions with [semantic-release](https://github.com/semantic-release/semantic-release).
- To bypass CI/CD, add a commit containing `[skip ci]` text.

## TODO

- [ ] Add VSCode workspace extension configuration file containing `Prettier`.

## Other Docs

- [tooling setup](docs/tooling.md)
- [workflow](https://docs.github.com/en/free-pro-team@latest/actions/managing-workflow-runs/adding-a-workflow-status-badge)