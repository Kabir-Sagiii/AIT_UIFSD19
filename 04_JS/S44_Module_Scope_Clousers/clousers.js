function outer() {
  var x = 100;
  return function inner() {
    console.log(x);
  };
}

var fn = outer();

fn(); //inner
