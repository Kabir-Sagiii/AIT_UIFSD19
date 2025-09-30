const express = require("express");
const Product = require("../model/productSchema");
const { verifyToken } = require("../middleware/tokenVerification");
const route = express.Router();

route.get("/all-products", verifyToken, async (req, res) => {
  try {
    const data = await Product.find();

    res.send({ ok: true, result: data });
  } catch (error) {
    console.log(error);
    res.send({ ok: false, error: error });
  }
});
//http://localhost:5001/products/all-products

route.get("/get-product/:id", verifyToken, async (req, res) => {
  try {
    var data = await Product.findOne({ _id: req.params.id });
    res.send({ ok: true, result: data });
  } catch (error) {
    res.send({ ok: false, error: error });
  }
});
//http://localhost:5001/products/get-product/<id>

module.exports = route;
