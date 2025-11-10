const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req.method);
  if (req.method === "POST" || req.method === "PUT") {
    req.on("data", (reqData) => {
      // console.log(reqData);
      var clientData = JSON.parse(reqData);
      console.log(clientData);
      res.end("Working");
    });
  } else {
    res.end("Wrong Request");
  }
});

server.listen(3000, () => {
  console.log("Server Started");
});
