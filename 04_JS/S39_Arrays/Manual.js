var data = [
  { name: "P1", price: 7000 },
  { name: "P2", price: 17000 },
  { name: "P3", price: 90000 },
  { name: "P4", price: 10000 },
];

var newArray = [];
//access the first element from array
var element1 = data[0];
var discountedPrice = element1.price - 5000;
element1.discountedPrice = discountedPrice;
newArray.push(element1);

var element1 = data[1];
var discountedPrice = element1.price - 5000;
element1.discountedPrice = discountedPrice;
newArray.push(element1);

var element1 = data[2];
var discountedPrice = element1.price - 5000;
element1.discountedPrice = discountedPrice;
newArray.push(element1);

var element1 = data[3];
var discountedPrice = element1.price - 5000;
element1.discountedPrice = discountedPrice;
newArray.push(element1);
console.log(newArray);
