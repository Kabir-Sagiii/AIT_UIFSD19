var user = {
  name: "Rajiv Shukla",
  city: "Indore", // Bhopal
  gender: "male",
  email: "rajiv@gmail.com",
  state: "MP",
};

console.log(user);
console.log("-----------------------------------");
//Update Property Value

// objectName.key-name = updated-value

// objectName["key-name"] = updated-value

user.city = "Bhopal";
user["email"] = "rajivshukla123@gmail.com";

console.log(user);
