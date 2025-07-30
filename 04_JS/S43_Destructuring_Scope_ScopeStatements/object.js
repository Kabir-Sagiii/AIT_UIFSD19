var obj = {
  name: "Raj",
  gender: "male",
  id: 101,
};

var { id, name, gender } = obj;

function f1() {
  //name

  console.log(name);
}

function f2() {
  //id

  console.log(id);
}

function f3() {
  //gender

  console.log(gender);
}
f1();
f2();
f3();
