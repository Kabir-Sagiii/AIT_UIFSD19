const mongoose = require("mongoose");
const { gfgcartdb } = require("../config/connection");
const CartSchema = new mongoose.Schema({
  title: String,
  id: Number,
  description: String,
  category: String,
  price: Number,
  rating: {
    rate: Number,
    count: Number,
  },
  image: String,

  count: Number,
});

const ModelCart = gfgcartdb.model("cart", CartSchema);

module.exports = ModelCart;
