var data = [10, 20, 30, 40, 50, 60]; //[110,120,130]

var newArray = data.map(function (element, index) {
  var result = element + 100;
  return result;
});

console.log(newArray);
