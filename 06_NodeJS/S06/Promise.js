var promiseObject = new Promise(function (resolve, reject) {
  reject({ ok: true, results: [{ name: "S1" }, { name: "S2" }] });
});

// console.log(promiseObject);

promiseObject
  .then(function (successdata) {
    console.log("then executed");
    console.log(successdata);
  })
  .catch(function (errordata) {
    console.log("catch executed");
    console.log(errordata);
  });
