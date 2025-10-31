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

async function main() {
  try {
    var f1Result = await f1();
    var f2Result = await f2();
    var f3Result = await f3();

    console.log(f1Result);
    console.log(f2Result);
    console.log(f3Result);
  } catch (error) {
    console.log(error);
  }
}

main();
