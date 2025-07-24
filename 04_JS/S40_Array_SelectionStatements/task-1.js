var arr = [
  {
    name: "S1",
    gender: "male",
  },
  {
    name: "S2",
    gender: "female",
  },
  {
    name: "S3",
    gender: "male",
  },
  {
    name: "S4",
    gender: "male",
  },
];

//IAJF and try to print users who are male without using filter()

function printMaleUsers() {
  arr.forEach(function (user) {
    if (user.gender === "male") {
      console.log(user);
    }
  });
}
printMaleUsers();
