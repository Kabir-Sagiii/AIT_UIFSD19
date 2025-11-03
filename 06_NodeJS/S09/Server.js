//import http module
const http = require("http");
const PORT = 3000;

//Creating Http Server
const httpServer = http.createServer((request, response) => {
  response.end("First Response");
});

//running the Http Server
httpServer.listen(PORT, () => {
  console.log("Server Started on Port Number :  ", PORT);
});
