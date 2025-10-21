const express = require("express");
const { verifyToken } = require("../middleware/tokenVerification");
const {
  getCartsData,
  addToCart,
  removeCartProduct,
} = require("../controller/cartController");
const route = express.Router();

route.get("/get-carts-data", getCartsData);
//http://localhost:5001/cart/get-carts-data

route.post("/add-to-cart", addToCart);
//http://localhost:5001/cart/add-to-cart

//Assignment
route.delete("/remove-from-cart/:id", removeCartProduct);
//http://localhost:5001/cart/remove-from-cart/{id}

module.exports = route;
