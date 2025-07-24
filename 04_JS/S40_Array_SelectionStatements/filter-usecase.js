var data = [
  {
    brand: "Apple",
    model: "Iphone 16",
    price: 50000,
    rating: 4.5,
  },
  {
    brand: "Apple",
    model: "Iphone 14",
    price: 30000,
    rating: 4.2,
  },
  {
    brand: "Samsung",
    model: "Galaxy",
    price: 90000,
    rating: 4.7,
  },
  {
    brand: "Samsung",
    model: "samsung a32",
    price: 40000,
    rating: 4.6,
  },
  {
    brand: "Vivo",
    model: "vivo pro",
    price: 35000,
    rating: 4.1,
  },
];

var newdata = data.filter(function (element, index) {
  var isApple = element.brand === "Apple" || element.brand === "Vivo";
  return isApple;
});

console.log(newdata);
