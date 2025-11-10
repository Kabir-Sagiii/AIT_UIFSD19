const { createServer } = require("http");
const readFileContent = require("./controller.js");

const server = createServer((req, res) => {
  if (req.url === "/home") {
    readFileContent("home.html", res);
  } else if (req.url === "/login") {
    readFileContent("login.html", res);
  }
});
//http://localhost:5000

server.listen(5000, () => {
  console.log("Server started on 5000 Port Number");
});
