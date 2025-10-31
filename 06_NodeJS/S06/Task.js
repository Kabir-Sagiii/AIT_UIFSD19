function f1() {
  return new Promise((resolve) => {
    resolve("F1 is executed");
  });
}

function f2() {
  return new Promise((resolve) => {
    resolve("F2 is executed");
  });
}

function f3() {
  return new Promise((resolve) => {
    resolve("F3 is executed");
  });
}

f1()
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
f2()
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
f3()
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
