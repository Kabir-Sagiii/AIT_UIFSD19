var obj1 = {
  name: "d1",
  city: "c1",
  gender: "g1",
};

var obj2 = {
  ...obj1,
  pin: 99999,
};

var arr1 = [10, 20, 30];
var arr2 = [...arr1, "hello"];

console.log(arr1);

console.log("===========================");

console.log(arr2);
