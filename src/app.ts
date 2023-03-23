import { Boot, BaseConfig } from "@blocksx/eos-core";

/** 修改命令 */

BaseConfig.mergeConfig({
  bulk: {
    sequelize: {
      host: "hubsdb.com",
      port: 4406,
      database: "test",
      dialect: "mysql",
      username: "root",
      password: "root@123",
    },
    elasticsearch: {
      node: "http://hubsdb.com:8200",
    },
  },
});

export default class AppBoot extends Boot {
  public constructor(app: any) {
    super(app);
  }
}
