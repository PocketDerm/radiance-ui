# ✨ Radiance UI

[![CircleCI](https://circleci.com/gh/curology/radiance-ui.svg?style=svg)](https://circleci.com/gh/curology/radiance-ui)

Curology's React based component library

## Storybook

Radiance UI has a built in storybook. Every time a new commit is made to
master, it is automatically deployed to
[https://radiance-ui.curology.com](https://radiance-ui.curology.com).

To run Storybook locally, use `yarn run storybook`.

## Contributing

To contribute to Radiance UI, please create a PR with the following in
the appropriate places:

- Source code for the component
- Tests
- A storybook story

## Tests

Tests can be run with `yarn run test`. Radiance uses Jest + @testing-library.

## Local Development Setup

If you want to test out your changes with another repo that uses
Radiance, we recommend using the `link` feature with [npm](https://docs.npmjs.com/cli/link)
or [yarn](https://yarnpkg.com/lang/en/docs/cli/link/).

## Documentation

Documentation around usage can be found in the respective Docs page of every component on [https://radiance-ui.curology.com](https://radiance-ui.curology.com)

## Publishing to NPM

You'll need access to publish to NPM so this part only applies to a few
people (mostly within the Curology organization). 

1. Once approved in Github and Chromatic (if applicable), merge your PR(s) into master.
2. Check out the master branch, fetch and pull.
3. Commit an update to the CHANGELOG.md file with details.
4. Run `yarn run publish-package` to build the bundled files and publish
   to NPM.
5. Push changes made to `package.json` to remote repository
6. On GitHub, tag a release with the proper version and details. You can
   do that
   [here](https://github.com/PocketDerm/radiance-ui/releases/new).

## Thanks

<a href="https://www.chromatic.com/"><img src="https://user-images.githubusercontent.com/321738/84662277-e3db4f80-af1b-11ea-88f5-91d67a5e59f6.png" width="153" height="30" alt="Chromatic" /></a>

Thanks to [Chromatic](https://www.chromatic.com/) for providing the visual testing platform that helps us review UI changes and catch visual regressions!
