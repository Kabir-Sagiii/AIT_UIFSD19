var user = {
  name: "sagar",
  gender: "male",
  id: 101,
  isPlaced: true,
};

for (var key in user) {
  //key = "name"
  console.log(key, ":", user[key]);
}
