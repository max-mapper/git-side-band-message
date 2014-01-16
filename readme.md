# git-side-band-message

[![NPM](https://nodei.co/npm/git-side-band-message.png)](https://nodei.co/npm/git-side-band-message/)

Encode strings into the packfile side-band format that git uses. Useful for sending messages to clients doing `git push` so that your messages show up in their stdout.

Used in https://github.com/substack/git-http-backend

Inspired by @dz0ny from https://github.com/substack/pushover/pull/10, rewritten by me

## usage

```js
var encode = require('git-side-band-message')
var msg = encode('hello there!')
gitCloneResponseStream.write(msg)
```
