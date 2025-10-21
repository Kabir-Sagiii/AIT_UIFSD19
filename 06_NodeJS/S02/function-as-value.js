var product = {
  pname: "Trimmer",
  qty: 5,
  price: 3456,
  inStock: true,
  display: function () {
    console.log("Product Details");
  },
};

// objectName.display()

//objectName["display"]()

product.display();

// console.log();

product["display"]();
