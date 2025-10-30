function step1(callback) {
  console.log("Preparation Started....");

  setTimeout(() => {
    console.log("Preparation for cooking is Done !!!");
    //Start cooking
    callback();
  }, 4000);
}

function step2(callback) {
  console.log("Cooking Started.....");

  setTimeout(() => {
    console.log("Cooking is Done......");
    //Serving
    callback();
  }, 2000);
}

function step3() {
  console.log("Serving the Food......");
}

step1(() => {
  step2(() => {
    step3();
  });
});

// step1(step2(step3));
