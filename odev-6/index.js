const Koa = require("koa");

const app = new Koa();

app.use((ctx) => {
  let url = ctx.url;

  if (url === "/") {
    ctx.body = "Index sayfasi";
  } else if (url === "/about") {
    ctx.body = "Hakkimda sayfasi";
  } else if (url === "/contact") {
    ctx.body = "Iletisim sayfasi";
  }
});

app.listen(3000);
