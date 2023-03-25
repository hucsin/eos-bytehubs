import { Boot, BaseConfig } from "@blocksx/eos-core";

/** 修改命令 */

BaseConfig.mergeConfig({
  bulk: {
    sequelize: {
      $host: "K5tEkosL85e09TaE9ERr9s",
      $port: "k2Ms02oSts",
      $database: "fUoS04GYfQ",
      $dialect: "2opZ06Y]J+",
      $username: "SUPf01xvpo",
      $password: "I0eG+yjmfPxv0b0pq9a+eybEio",
    },
    elasticsearch: {
      $node: "kR9EUa91M5tEUoE9K561LsY89T0bYTPdtpa4OB",
    },
  },
});

export default class AppBoot extends Boot {
  public constructor(app: any) {
    super(app);
  }
}
