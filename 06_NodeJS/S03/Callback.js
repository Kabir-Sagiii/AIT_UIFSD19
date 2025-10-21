function main(callback) {
  console.log("main function is executing");
  console.log(callback);
}

function fnCallback() {
  console.log("fnCallback is executed");
}

main(fnCallback);

main(function () {
  console.log("i am callback");
});

// main(100);
// main("Sagar");
