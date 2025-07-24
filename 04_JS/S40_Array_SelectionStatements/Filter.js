var arr = [10, 20, 30, 40, 50, 60];

var filteredArray = arr.filter(function (element, index) {
  var status = element > 20 && element < 50;
  return status; //[10,20,30]
});

console.log(filteredArray);
