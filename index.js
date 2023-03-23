const Koa = require("koa");
const Router = require("koa-router");
const logger = require("koa-logger");
const bodyParser = require("koa-bodyparser");
const mysql = require("mysql");
const { Client } = require("@elastic/elasticsearch");

const PORT = process.env.PORT || 8000;

const app = new Koa();
const router = new Router();

var connection = mysql.createPool({
  host: "69.234.224.204",
  port: "4406",
  user: "root",
  password: "root@123",
  database: "mysql",
});

router.get("/", async (ctx) => {
  connection.getConnection((err) => {
    console.log(33, err);
  });

  const client = new Client({ node: "http://69.234.224.204:200" });
  await client
    .index({
      index: "comment_area",
      body: {
        reader: "Lenis",
        comment: "this place is great to learn sql",
      },
    })
    .then((err) => {
      console.log(err, 888);
    });

  await client.indices.refresh({
    index: "comment_area",
  });
  console.log(777);

  const { body } = await client.search({
    index: "comment_area",
    body: {
      query: {
        match: {
          comment: "sql",
        },
      },
    },
  });
  console.log(body, 888);

  const name = ctx.query.name || "stranger";
  ctx.body = {
    message: `Hello, ${name}!`,
  };
});

app
  .use(logger())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(PORT, "0.0.0.0", () =>
    console.log(`listening on http://localhost:${PORT}...`)
  );
