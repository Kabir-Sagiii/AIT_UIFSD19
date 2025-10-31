function getUser() {
  //logic ----> data
  return new Promise(function (resolve, reject) {
    reject({ ok: true, user: { name: "viru", gender: "male" } });
  });
}

// var promise = getUser();
// // console.log(promise);
// promise.then().catch()

getUser()
  .then((success) => {
    console.log("then");
    console.log(success);
  })
  .catch((error) => {
    console.log("catch");
    console.log(error);
  });
