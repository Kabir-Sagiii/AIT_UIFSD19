const { createServer } = require("http");
const { readFile } = require("fs");

const server = createServer((req, res) => {
  //Processing the request
  readFile("login.html", "utf-8", (error, data) => {
    if (error) {
      res.end("{ok:false,error:'Failed to Access Web page'}");
    } else {
      res.end(data);
    }
  });
});
//http://localhost:5000

server.listen(5000, () => {
  console.log("Server started on 5000 Port Number");
});
