function getUserDetails() {
  function inner(newname) {
    console.log(newname);
  }
  return ["raj", 101, inner];
}

var [a, b, newUser] = getUserDetails();
console.log(b, a);
newUser("vikram");

// var array = getUserDetails();
// array[2]("Mohit");
