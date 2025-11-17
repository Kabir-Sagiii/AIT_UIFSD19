function registerUser() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var email = document.getElementById("email").value;
  const url = "http://localhost:5000";
  var user = { username, password, email };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(user),
  })
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
      alert("something went wrong");
    });
}
