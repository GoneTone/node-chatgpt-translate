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

import { AuthBase } from './'

export interface UnofficialProxyAPIAuthOptions {
  apiReverseProxyUrl?: string
}

export class UnofficialProxyAPIAuth extends AuthBase {
  protected _email: string
  protected _password: string
  protected _options?: UnofficialProxyAPIAuthOptions

  /**
   * Uses an unofficial proxy server to access ChatGPT's backend API in a way that circumvents Cloudflare (uses the real ChatGPT and is pretty lightweight, but relies on a third-party server and is rate-limited)
   *
   * @param email OpenAI Email
   * @param password OpenAI Password
   * @param options
   */
  constructor (email: string, password: string, options?: UnofficialProxyAPIAuthOptions) {
    super()
    this._email = email
    this._password = password
    this._options = options
  }

  /**
   * Get Access Token
   */
  public async getAccessToken (): Promise<string> {
    const Authenticator = (await import('openai-token')).default

    const auth = new Authenticator(this._email, this._password)
    await auth.begin()

    return await auth.getAccessToken()
  }

  /**
   * Get API Reverse Proxy URL
   */
  public getApiReverseProxyUrl (): string | undefined {
    return this._options?.apiReverseProxyUrl
  }
}
