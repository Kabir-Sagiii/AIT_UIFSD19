function f1() {
  // 100 lines : action-1
  //50 lines : action - 2
  //300 lines : action - 3
}

function action1() {
  //100 lines of code
  console.log("action-1");
}

function action2() {
  //50 lines of code
  console.log("action-2");
}

function action3() {
  //300 lines of code
  console.log("action-3");
}

function main(action1, action2, action3) {
  action2();
  action1();
  action3();
}

main(action1, action2, action3);
