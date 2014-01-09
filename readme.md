# git-side-band-message

[![NPM](https://nodei.co/npm/git-side-band-message.png)](https://nodei.co/npm/git-side-band-message/)

Encode strings into the packfile side-band format that git uses. Useful for sending messages to clients doing things like `git clone` so that your messages show up in their stdout.

You can use this with https://github.com/substack/pushover/

Originally written by @dz0ny for https://github.com/substack/pushover/pull/10, modulified by me

## usage

```js
var encode = require('git-side-band-message')
var msg = encode('hello there!')
gitCloneResponseStream.write(msg)
```
