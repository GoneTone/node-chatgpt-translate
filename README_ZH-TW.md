# ChatGPT 翻譯 (npm 套件)

[English](README.md) | 繁體中文

使用 ChatGPT 來翻譯任何語言！

## 回報問題

如果發現任何 BUG，請在此回報：<https://github.com/GoneTone/node-chatgpt-translate/issues>

## 安裝

請確認您的 `Node.js 版本 >= 18` 以使 `fetch` 可用 (或者如果您有安裝 [fetch polyfill](https://github.com/developit/unfetch#usage-as-a-polyfill)，則確認您的 `Node.js 版本 >= 14`)。

### npm

```sh-session
npm install chatgpt-translate
```

### Yarn

```sh-session
yarn add chatgpt-translate
```

## 用法

**Note**：我們強烈建議使用 `OfficialAPIAuth`，因為它使用 OpenAI 官方支援的 API。在未來的版本中，我們可能會停止對 `UnofficialProxyAPIAuth` 的支援。

### 引入套件

ES Module (ESM)

```js
import { ChatGPTTranslate, OfficialAPIAuth, UnofficialProxyAPIAuth } from 'chatgpt-translate'
```

CommonJS (CJS)

```js
const { ChatGPTTranslate, OfficialAPIAuth, UnofficialProxyAPIAuth } = require('chatgpt-translate')
```

### 範例 (使用 OfficialAPIAuth) - 建議

使用 `gpt-3.5-turbo-0301` 模型與官方 OpenAI chat completions API (官方，穩定的方式，但需要付費)。

```js
;(async () => {
  const auth = new OfficialAPIAuth('<OpenAI API key>')
  const chatGPTTranslate = new ChatGPTTranslate(auth)

  console.log(await chatGPTTranslate.text('繁體中文', 'Hello World!'))
  console.log(await chatGPTTranslate.text('日文', 'Hello World!'))
})()
```

### 範例 (使用 UnofficialProxyAPIAuth) - 不建議，未來可能停止支援

使用非官方代理伺服器來存取 ChatGPT 的後端 API，以規避 Cloudflare (免費，使用真正的 ChatGPT 且非常輕量，但依賴第三方伺服器且有請求速率限制)。

```js
;(async () => {
  const auth = new UnofficialProxyAPIAuth('<OpenAI Email>', '<OpenAI 密碼>')
  const chatGPTTranslate = new ChatGPTTranslate(auth)

  console.log(await chatGPTTranslate.text('繁體中文', 'Hello World!'))
  console.log(await chatGPTTranslate.text('日文', 'Hello World!'))
})()
```

你可以透過傳遞 `apiReverseProxyUrl` 的方式覆寫反向代理：

```js
const auth = new UnofficialProxyAPIAuth('<OpenAI Email>', '<OpenAI 密碼>', {
  apiReverseProxyUrl: 'https://your-example-server.com/api/conversation'
})
```
