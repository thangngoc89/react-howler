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
