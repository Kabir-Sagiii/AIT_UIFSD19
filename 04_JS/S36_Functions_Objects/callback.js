function getUsers(getUserId) {
  getUserId();
  console.log("Got Users Data");
  getUserId();
  getUserId();
}

// getUserId(); invalid

getUsers(function getData() {
  console.log("Received User Id");
});

getUsers(function () {
  console.log("i am callback");
});
