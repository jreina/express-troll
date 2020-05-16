const server = require("express")();
const { troll } = require("../src");

server.use(troll());

server.get("/", function (req, res) {
  res.status(200).send("<h1>Hello, world!</h1>");
});

server.listen(3000, () => {
  console.log("Listening on 3000");
});
