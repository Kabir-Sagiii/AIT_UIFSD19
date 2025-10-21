var user = {
  name: "Rajiv Shukla",
  city: "Indore",
  gender: "male",
  email: "rajiv@gmail.com",
  state: "MP",
};

var x = "name";

//Read or Access Property Value;

// var value = objectName.key-name

// var value = objectName["key-name"]

var emailValue = user.email;

var cityValue = user["city"];

console.log(emailValue, cityValue);

var username = user.x;

var user_name = user[x];

console.log(username, user_name);
