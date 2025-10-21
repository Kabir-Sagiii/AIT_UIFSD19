function a1(callback) {
  setTimeout(() => {
    console.log("a1 is executed");
    callback();
  }, 2000);
}

function a2(callback) {
  setTimeout(() => {
    console.log("a2 is executed");
    callback();
  }, 5000);
}

function a3(callback) {
  setTimeout(() => {
    console.log("a3 is executed");
  }, 3000);
}

// a1(a2(a3));

a1(() => {
  a2(() => {
    a3(() => {
      a4(() => {
        a5();
      });
    });
  });
});
