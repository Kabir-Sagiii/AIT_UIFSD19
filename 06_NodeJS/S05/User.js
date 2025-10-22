class User {
  //properties
  username;
  age;
  gender;

  constructor() {
    this.username = "Viraj Sharma";
    this.age = 32;
    this.gender = "male";
  }

  display() {
    console.log(this.username, this.age, this.gender);
  }

  changeName(newName) {
    this.username = newName;
    this.display();
  }
}

var user_1 = new User();

// user_1 = {username:"viraj sharma",age:32,gender:"male",display:function(){--},changeName:function(newname){---}}

// console.log(user_1.username);

// user_1.display();

// console.log(user_1);

console.log(user_1.display);
