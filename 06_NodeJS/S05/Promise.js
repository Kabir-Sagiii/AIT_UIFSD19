var promiseObject = new Promise(function (resolve, reject) {
  //   reject({ ok: false, error: "something went wrong" });
  resolve({ ok: true, results: [{}, {}] });
});

console.log(promiseObject);
