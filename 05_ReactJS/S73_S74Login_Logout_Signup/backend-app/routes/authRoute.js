const express = require("express");
const { signIn, signUp } = require("../controller/authController");
const route = express.Router();

route.post("/sign-in", signIn);
//http://localhost:5001/auth/sign-in

route.post("/sign-up", signUp);
//http://localhost:5001/auth/sign-up

module.exports = route;
