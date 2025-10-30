function step1() {
  return new Promise(function (resolve, reject) {
    console.log("Preparation Started");
    setTimeout(() => {
      resolve("Preparation is Done");
    }, 4000);
  });
}

function step2() {
  return new Promise(function (resolve, reject) {
    console.log("Cooking Started");
    setTimeout(() => {
      resolve("Cooking is Done");
    }, 2000);
  });
}

function step3() {
  console.log("Serving the Food....");
}

step1()
  .then((res) => {
    console.log(res);
    step2()
      .then((res) => {
        console.log(res);
        step3();
      })
      .catch(() => {
        console.log("Some Problem Encounter While Cooking the Food");
      });
  })
  .catch(() => {
    console.log("Some Problem Encounter While Preparing the Food");
  });
