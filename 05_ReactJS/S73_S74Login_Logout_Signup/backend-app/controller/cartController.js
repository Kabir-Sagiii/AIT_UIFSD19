const Cart = require("../model/cartSchema");
async function getCartsData(req, res) {
  try {
    const data = await Cart.find();
    res.send({ ok: true, result: data });
  } catch (error) {
    res.send({
      ok: false,
      error: error,
    });
  }
}

async function addToCart(req, res) {
  try {
    const cart = new Cart(req.body);
    const response = await cart.save();
    res.json({
      ok: true,
      result: "Product Added in the Cart",
      data: response,
    });
  } catch (error) {
    console.log(error);
    res.json({ ok: false, error: error });
  }
}

async function removeCartProduct(req, res) {
  console.log("received delete request");
  try {
    var response = await Cart.deleteOne({ id: req.params.id });
    res.json({
      ok: true,
      result: "Product removed from Cart",
      data: response,
    });
  } catch (error) {
    console.log(error);
    res.json({ ok: false, error: error });
  }
}

module.exports = { getCartsData, addToCart, removeCartProduct };
