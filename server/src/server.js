const app = require("./index");
const connect = require("./config/db");

app.listen(2345, async () => {
  await connect();

  console.log("running on port 2345");
});
