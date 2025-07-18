var product = {
  id: 101,
  name: "Acer 512",
  price: 50000,
};

console.log(product);

product.price = 70000;
product["id"] = 100001;
console.log(product);
