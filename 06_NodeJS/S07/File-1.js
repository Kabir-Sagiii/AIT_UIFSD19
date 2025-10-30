// console.log(module);

var x = 10;

function f1() {
  console.log("f1 is called");
}

//module.exports = x

//module.exports = f1

// module.exports = { x, f1 };

module.exports = [x, f1];
