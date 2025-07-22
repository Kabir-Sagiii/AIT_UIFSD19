var data = [
  { name: "P1", price: 7000 },
  { name: "P2", price: 17000 },
  { name: "P3", price: 90000 },
  { name: "P4", price: 10000 },
];

var newData = data.map((element) => {
  var discountPrice = element.price - 5000;
  element.discountPrice = discountPrice;
  return element;
});

console.log(newData);
