const { Router } = require("express");
const {
  createUserAccount,
  handleLogin,
} = require("../controller/authController");
const route = Router();

route.post("/sign-up", createUserAccount);
//http://localhost:5000/api/auth/sign-up

route.post("/sign-in", handleLogin);
//http://localhost:5000/api/auth/sign-in

module.exports = route;
