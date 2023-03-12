# ChatGPT Translate (npm Package)

English | [繁體中文](README_ZH-TW.md)

Use ChatGPT to translate any language!

## Report Issues

If you discover any bugs, please report them here: <https://github.com/GoneTone/node-chatgpt-translate/issues>

## Installation

Make sure you're using `node >= 18` so `fetch` is available (or `node >= 14` if you install a [fetch polyfill](https://github.com/developit/unfetch#usage-as-a-polyfill)).

### npm

```sh-session
npm install chatgpt-translate
```

### Yarn

```sh-session
yarn add chatgpt-translate
```

## Usage

**Note**: We strongly recommend using `OfficialAPIAuth` since it uses the officially supported API from OpenAI. We may remove support for `UnofficialProxyAPIAuth` in a future release.

### Import package

ES Module (ESM)

```js
import { ChatGPTTranslate, OfficialAPIAuth, UnofficialProxyAPIAuth } from 'chatgpt-translate'
```

CommonJS (CJS)

```js
const { ChatGPTTranslate, OfficialAPIAuth, UnofficialProxyAPIAuth } = require('chatgpt-translate')
```

### Example (Using OfficialAPIAuth) - Recommend

Uses the `gpt-3.5-turbo-0301` model with the official OpenAI chat completions API (official, robust approach, but it's not free).

```js
;(async () => {
  const auth = new OfficialAPIAuth('<OpenAI API key>')
  const chatGPTTranslate = new ChatGPTTranslate(auth)

  console.log(await chatGPTTranslate.text('Traditional Chinese', 'Hello World!'))
  console.log(await chatGPTTranslate.text('Japanese', 'Hello World!'))
})()
```

### Example (Using UnofficialProxyAPIAuth) - Not recommended, may remove the support in the future release

Uses an unofficial proxy server to access ChatGPT's backend API in a way that circumvents Cloudflare (free, uses the real ChatGPT and is pretty lightweight, but relies on a third-party server and is rate-limited).

```js
;(async () => {
  const auth = new UnofficialProxyAPIAuth('<OpenAI Email>', '<OpenAI Password>')
  const chatGPTTranslate = new ChatGPTTranslate(auth)

  console.log(await chatGPTTranslate.text('Traditional Chinese', 'Hello World!'))
  console.log(await chatGPTTranslate.text('Japanese', 'Hello World!'))
})()
```

You can override the reverse proxy by passing `apiReverseProxyUrl`:

```js
const auth = new UnofficialProxyAPIAuth('<OpenAI Email>', '<OpenAI Password>', {
  apiReverseProxyUrl: 'https://your-example-server.com/api/conversation'
})
```
