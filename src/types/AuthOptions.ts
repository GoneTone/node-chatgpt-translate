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

import type { OfficialAPIAuth, UnofficialProxyAPIAuth } from '../auth'

export type AuthOptions = OfficialAPIAuth | UnofficialProxyAPIAuth
