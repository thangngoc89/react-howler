# 3.2.0 - **Pending**

- Added: Support for volume prop and onVolume callback

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

- Changed: Remove babel tranform runtime plugin

# 1.0.0 - 2016-02-05

- Changed: Use CommonJS export style to work around babel 6 issue
