var id = 101;
const pin = 9999;
let city = "pune";

function f1() {}

function f2() {
  if (true) {
    console.log(city);
  }
}

function outer() {
  console.log(city);
  function inner() {
    console.log(pin);
  }
}
