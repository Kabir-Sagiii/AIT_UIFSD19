//importing express package
const express = require("express");

//Initializing the express package
const app = express();

//Create and Start Http Server
app.listen(5000, () => {
  console.log("Express Server Started on 5000 Port Number");
});

app.get("/get-request", (req, res) => {
  res.send("Get Request Working");
});

//Get Endpoint
//http://localhost:5000/get-request  : Get Request

app.post("/create-user", (req, res) => {
  res.send("Post Request is Working");
});
//Post Endpoint
// http://localhost:5000/create-user : Post Request

app.put("/update-user", (req, res) => {
  res.send("Put Request is Working");
});
//Put Endpoint
// http://localhost:5000/update-user : Put Request

app.delete("/delete-user", (req, res) => {
  res.send("Delete Request is Working");
});
//Delete Endpoint
// http://localhost:5000/delete-user : Delete Request
