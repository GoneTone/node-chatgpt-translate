/*
 * Copyright (c) 2014-2023 旋風之音 GoneTone
 *
 * Website: https://blog.reh.tw/
 * GitHub: https://github.com/GoneTone
 * Facebook: https://www.facebook.com/GoneToneDY
 * Twitter: https://twitter.com/TPGoneTone
 *
 *                               _oo0oo_
 *                              o8888888o
 *                              88" . "88
 *                              (| -_- |)
 *                              0\  =  /0
 *                            ___/`---'\___
 *                          .' \\|     |# '.
 *                         / \\|||  :  |||# \
 *                        / _||||| -:- |||||- \
 *                       |   | \\\  -  #/ |   |
 *                       | \_|  ''\---/''  |_/ |
 *                       \  .-\__  '-'  ___/-. /
 *                     ___'. .'  /--.--\  `. .'___
 *                  ."" '<  `.___\_<|>_/___.' >' "".
 *                 | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *                 \  \ `_.   \_ __\ /__ _/   .-` /  /
 *             =====`-.____`.___ \_____/___.-`___.-'=====
 *                               `=---='
 *           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *               佛祖保佑                       永無 BUG
 *
 * Project GitHub: https://github.com/GoneTone/node-chatgpt-translate
 */

import type { AuthOptions } from './types/AuthOptions'

export class ChatGPTTranslate {
  private readonly _auth: AuthOptions

  constructor (auth: AuthOptions) {
    this._auth = auth
  }

  /**
   * Translation text
   *
   * @param translationToLangName Translation to language name (e.g. English, Japanese, Chinese, etc.)
   * @param text Text
   */
  public async text (translationToLangName: string, text: string): Promise<string> {
    const { ChatGPTAPI, ChatGPTUnofficialProxyAPI } = await import('chatgpt')

    const systemMessage = `You are a translation tool that can translate any language. You will only reply with the translation result and will not provide any explanation. Translation to: ${translationToLangName}`

    if (this._auth.isOfficialAPIAuth()) {
      const api = new ChatGPTAPI({
        apiKey: this._auth.apiKey(),
        systemMessage
      })

      const res = await api.sendMessage(text)

      return res.text
    }

    const api = new ChatGPTUnofficialProxyAPI({
      accessToken: await this._auth.getAccessToken(),
      apiReverseProxyUrl: this._auth.getApiReverseProxyUrl()
    })

    const res = await api.sendMessage(`${systemMessage}\n\n${text}`)

    return res.text
  }
}
