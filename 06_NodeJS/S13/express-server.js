const express = require("express");

const app = express();

app.get("/users", (req, res) => {});

app.post("/signup", (req, res) => {});

app.put("/update", (req, res) => {});

app.delete("/remove", (req, res) => {});

app.listen(5000, () => {
  console.log("Express Server Started");
});
