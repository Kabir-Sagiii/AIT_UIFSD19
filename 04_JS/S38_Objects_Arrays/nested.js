var user = {
  name: {
    firstName: "Raj",
    lastName: "Sharma",
  },
  email: "Raj@gmail.com",
  location: {
    city: {
      cityName: "hyd",
      pincode: "500018",
    },
    state: "ts",
  },
};

// console.log(user.name.lastName);

// user.name.title = "Mr.";
// user.name.lastName = "Verma";

// console.log(user.name);

console.log(user.location.city.cityName);
