var x = function () {
  console.log("123456789");
};

x();

function fn(myFun) {
  console.log("anonymous as a argument");
  console.log(myFun);
}

fn(function () {
  console.log("I am Anonymous");
});
