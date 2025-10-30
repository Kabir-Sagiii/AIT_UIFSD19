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

async function FoodProcess() {
  try {
    const res1 = await step1();
    console.log(res1);

    const res2 = await step2();
    console.log(res2);

    step3();
  } catch (error) {
    console.log(error);
  }
}

FoodProcess();
