const { Router } = require("express");
const { addToCart } = require("../controller/productController.js");
const {
  middleware1,
  middleware2,
} = require("../middlwares/productMiddleware.js");
const route = Router();

// route.post(
//   "/add-to-cart",
//   (req, res, next) => {
//     //middlware
//     console.log("Middleware - 1");
//   },
//   (req, res, next) => {
//     //middlware
//     console.log("Middleware - 2");
//   },
//   addToCart
// );

route.post("/add-to-cart", middleware1, middleware2, addToCart);
//http://localhost:5000/api/product/add-to-cart

module.exports = route;
