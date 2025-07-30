function getUser() {
  return {
    name: "Aishwariya",
    gender: "female",
    id: 101,
  };
}

// var data = getUser();
// console.log(data.gender, data.name);

var { name, gender, id } = getUser();
console.log(gender, name);
