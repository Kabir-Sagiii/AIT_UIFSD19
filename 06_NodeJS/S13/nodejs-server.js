const http = require("http");

const server = http.createServer((req, res) => {
  //code to manage the request
  if (req.method === "GET" && req.url === "/users") {
    //manage get request
  } else if (req.method === "GET" && req.url === "/products") {
  } else if (req.method === "POST") {
    //manage post request
  } else if (req.method === "PUT") {
    //manage put request
  } else if (req.method === "DELETE") {
    //manage delete request
  }
});

server.listen(3000, () => {
  console.log("NodeJS Server Started");
});
