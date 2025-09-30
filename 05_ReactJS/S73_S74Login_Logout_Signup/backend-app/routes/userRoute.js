const express = require("express");
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getSingleUser,
} = require("../controller/userController");
const route = express.Router();

route.get("/users-data", getUsers);
//http://localhost:5001/users/users-data

route.get("/single-user/:id", getSingleUser);
//http://localhost:5001/users/single-user/{id}

route.post("/create-user", createUser);
//http://localhost:5001/users/create-user

route.put("/update-user/:id", updateUser);
//http://localhost:5001/users/update-user/<id>

route.delete("/remove-user", deleteUser);
//http://localhost:5001/users/remove-user?id=idvalue

module.exports = route;
