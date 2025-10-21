var user = {
  name: "Rajiv Shukla",
  city: "Indore",
  gender: "male",
  email: "rajiv@gmail.com",
  state: "MP",
};

console.log(user);
console.log("----------------------------------------------------------------");

//remove property

//delete objectName.key-name ;

//delete objectName["key-name"]

delete user.email;

delete user["gender"];

console.log(user);
