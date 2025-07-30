function f1() {
  var id = 101;
  const pin = 9999;
  let city = "pune";
}

function f2() {
  if (true) {
    // console.log(city); invalid
  }
}

function outer() {
  //   console.log(city); invalid
  function inner() {
    // console.log(pin);invalid
  }
}
