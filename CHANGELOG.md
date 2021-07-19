# 5.2.0 - 2021-07-19

- Added: `rate` prop and method (#119)

# 5.1.0 - 2021-06-24

- Added: `onSeek` and `onPlayError` props (#117)

# 5.0.0 - 2020-11-14

## Breaking Changes

- Removed: Seek Property (#59, #101, #103)

# 4.0.0 - 2020-09-23

- Added: Support `xhr` (#96)

## Breaking Changes

- Removed: Support `xhrWithCredentials` - now requiring Howler version >= `2.2.0` (#96)

# 3.8.0 - 2020-09-01

- Added: Support `xhrWithCredentials` (#77)

# 3.7.5 - 2020-08-14

- Fixed: Use `componentDidUpdate` and remove use of depreciated `componentWillReceiveProps` method (#90)
- Updated: Add dev dependencies to remove reliance on global packages for development

# 3.7.4 - 2019-01-01

- Updated: Use Howler.js version `^2.1.1`. Revert to using semantic Howler.js versions (Rolling back #39) 

# 3.7.3 - 2018-06-30

- Fixed: Don't mute if the `mute` prop has not changed (#65)
- Updated: Use Howler.js version `2.0.13`

# 3.7.2 - 2018-04-07

- Updated: Use Howler.js version `2.0.9`

# 3.7.1 - 2018-01-23

- Updated: Use Howler.js version `2.0.8` to fix Chrome deprecation warning (#55) 

# 3.7.0 - 2018-01-03

- Added: Load sound when `props.preload` changes to true (#58)

# 3.6.7 - 2018-01-02

- Fixed: Don't seek if no props.seek specified (#57) 

# 3.6.5 - 2017-12-29

- Updated: Use Howler.js version `2.0.7` to fix Chrome deprecation warning (#52, #53) 

# 3.6.4 - 2017-10-14

- Updated: Revert prevent seeking if the sound is not loaded (#41) since upstream issue was fixed (#44)
- Updated: Use fixed Howler.js version (#39)
- Added: Support for React 16 (#46)


# 3.6.3 - 2017-07-23

- Fixed: Prevent seeking if the sound is not loaded to avoid upstream issue (#41)


# 3.6.2 - 2017-04-11

- Fixed: Replace React.PropTypes with `prop-types` package. Fixes deprecation warning when using react version greater than 15.5 (#34)


# 3.6.1 - 2017-04-06

- Fixed: Issue causing possible reinitialization when using array as `src` prop.


# 3.6.0 - 2017-03-27

- Added: `preload` prop (#27)
- Added: `load()` method
- Added:  `howlerState()` method


# 3.5.1 - 2017-02-05

- Updated: Remove Yarn from devDependencies - it's recommended to install globally so having it  as a devDep is redundant.


# 3.5.0 - 2017-02-04

- Added: `html5` option (#26)
- Updated: Use latest version of Yarn


# 3.4.1 - 2017-01-19

- Updated: Dependency versions


# 3.4.0 - 2016-12-08

- Added: `format` option (#23)


# 3.3.0 - 2016-11-27

- Added: Use [Yarn](https://yarnpkg.com/) (#17)
- Changed: Update to work with nodejs v6 (#18)
- Changed Example: Simplified example build by using [create-react-app](https://github.com/facebookincubator/create-react-app) (#20,#21)
- Changed: Fixed `autoplay` ignoring `pause()` calls while audio is loading (#22)


# 3.2.0 - 2016-10-17

- Added: Support for `volume` prop and `onVolume` callback
- Added: Support for `stop()` method and `onStop` callback

# 3.1.0 - 2016-08-28

- Fixed #13: Don't call toggleHowler when initializing or changing src
- Changed: Upgrade Howler.js dependency from 2.0.0-beta10 to 2.0.0

# 2.0.0 - 2016-02-06

- Changed: Don't export Howler global instance, consume it
directly from window object due to complication in
ES6/CommonJS module
- Changed: Use babel stage 2 instead of stage 0
- Changed: Remove unneeded devDependencies
- Changed: Consolidate example build config

# 1.0.2 - 2016-02-05

- Changed: Fixed CommonJS require style

# 1.0.1 - 2016-02-05

- Changed: Remove babel transform runtime plugin

# 1.0.0 - 2016-02-05

- Changed: Use CommonJS export style to work around babel 6 issue
