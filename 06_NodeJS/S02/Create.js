var user = {
  name: "Rajiv Shukla",
  city: "Indore",
};

console.log(user);

console.log("===========================================================");

//Insert Property Gender

//objectname.new-key-name = new-value

//objectname["new-key-name"] = new-value

user.gender = "male";
user.email = "rajiv@gmail.com";

user["state"] = "MP"; //dynamically

console.log(user);
