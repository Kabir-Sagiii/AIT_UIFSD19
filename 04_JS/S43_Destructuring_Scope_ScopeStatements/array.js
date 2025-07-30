var arr = ["raj", "verma", "sid", "sneha", "ramya"];

var [x, y, , a, b] = arr;

function f1() {
  //sid
  var name = z;
  console.log(name);
}

function f2() {
  //ramya
  var name = b;
  console.log(name, a);
}

function f3() {
  //verma
  var name = y;
  console.log(name);
}
f1();
f2();
f3();
