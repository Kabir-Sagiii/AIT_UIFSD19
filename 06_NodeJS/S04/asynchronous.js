function fetchData() {
  //50 lines : Time 3seconds
  console.log("Data Fetched");
}

function processDataToDoAction(data) {
  //100 lines
  console.log("Data is Processing");
}

function otherAction() {
  console.log("Other Action");
}

function main(myAction, otherAction) {
  setTimeout(() => {
    myAction(fetchData, processDataToDoAction);
  }, 3000);

  setTimeout(() => {
    console.log("second setTimeOut execution");
  }, 1000);

  otherAction();
}

function myAction(f1, f2) {
  for (var i = 0; i <= 100000; i++) {
    // console.log();
    if (i > 99999) {
      f1();
      f2();
    }
  }
}

function mySecondAction() {
  for (var i = 0; i < 5000; i++) {
    console.log(i);
  }
}

main(myAction, otherAction);

main(mySecondAction, otherAction);
