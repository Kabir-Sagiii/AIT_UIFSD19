const { Router } = require("express");
const {
  getAllUsers,
  updateUser,
  deleteUser,
  getSingleUser,
} = require("../controller/usersController.js");
const route = Router();

route.get("/getAllUsers", getAllUsers);
// http://localhost:5000/api/users/getAllUsers

route.get("/getUser/:id/:city", getSingleUser);
// http://localhost:5000/api/users/getUser/<id>/<city>

route.put("/updateUsers", updateUser);
// http://localhost:5000/api/users/updateUsers

route.delete("/removeUser", deleteUser);
//http://localhost:5000/api/users/removeUser

module.exports = route;
