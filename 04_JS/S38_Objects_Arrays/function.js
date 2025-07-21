var product = {
  pname: "Trimmer",
  price: 5000,
  qty: 4,
  totalAmount: function () {
    console.log(this.price * this.qty);
  },
};

product.totalAmount();

console.log();
