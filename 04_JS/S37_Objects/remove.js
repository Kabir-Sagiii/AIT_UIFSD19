var product = {
  brandName: "Apple",
  modelName: "Iphone 16",
  price: 80000,
  rating: 4.7,
};
console.log(product);

delete product.price;
delete product["modelName"];

console.log(product);
