const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("Request Received");
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.method === "POST") {
    req.on("data", (clientData) => {
      const userData = JSON.parse(clientData);

      fs.readFile("users.json", "utf-8", (error, data) => {
        if (error) {
          console.log(error);
          res.end("Something went wrong");
        } else {
          var fileData = JSON.parse(data);
          fileData.users.push(userData);
          fs.writeFile("users.json", JSON.stringify(fileData), (error) => {
            if (error) {
              console.log(error);
              res.end("Something went wrong");
            } else {
              res.end("User Created");
            }
          });
        }
      });
    });
  }
});

server.listen(5000, () => {
  console.log("Server Started");
});
