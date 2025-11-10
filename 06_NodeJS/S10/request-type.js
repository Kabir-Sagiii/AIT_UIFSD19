const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method);
  res.end(req.method);
});

server.listen(3000, () => {
  console.log("Server Started");
});

//  http://localhost:3000
