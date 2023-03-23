/*
 * @Author: your name
 * @Date: 2021-03-01 13:53:15
 * @LastEditTime: 2021-08-17 13:54:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /packages/eos/src/config/config.default.ts
 */
import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // 服务区块
  //config.zone = ['@blocksx/eos-design'];
  //config.plugin = ['@blocksx/eos-design']

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_";

  // add your egg config in here
  config.middleware = ["runtime", "filter", "notFound"];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    security: {
      csrf: {
        enable: false,
      },
    },
  };

  // the return config will combines to EggAppConfig
  return {
    onerror: {
      all(err, ctx) {
        ctx.type = "application/json;charset=utf-8;";

        ctx.body = JSON.stringify({
          code: 500,
          message: err.message,
        });

        ctx.status = 500;
      },
    },
    ...config,
    ...bizConfig,
  };
};
