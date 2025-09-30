const mongoose = require("mongoose");
const { gfgb3db } = require("../config/connection");
const ProductSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  price: Number,
  category: String,
  image: String,
  rating: {
    rate: Number,
    count: Number,
  },
});

const ProductModel = gfgb3db.model("product", ProductSchema);

module.exports = ProductModel;
