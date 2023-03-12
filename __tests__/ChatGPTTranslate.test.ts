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

import { ChatGPTTranslate, OfficialAPIAuth, UnofficialProxyAPIAuth } from '../'

describe('ChatGPTTranslate', () => {
  test('use official api auth to translate', async () => {
    const auth = new OfficialAPIAuth(process.env.OPEN_AI_KEY as string)
    const chatGPTTranslate = new ChatGPTTranslate(auth)

    const result = await chatGPTTranslate.text('Traditional Chinese', 'Hello World!')

    expect(typeof result).toBe('string')
  }, 5000)

  test('use unofficial proxy api auth to translate', async () => {
    const auth = new UnofficialProxyAPIAuth(process.env.OPEN_AI_EMAIL as string, process.env.OPEN_AI_PASSWORD as string)
    const chatGPTTranslate = new ChatGPTTranslate(auth)

    const result = await chatGPTTranslate.text('Traditional Chinese', 'Hello World!')

    expect(typeof result).toBe('string')
  }, 150000)
})
