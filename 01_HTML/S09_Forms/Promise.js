const promiseObj = new Promise(function (resolve, reject) {
  //   resolve({ ok: true, result: [{}, {}] });
  reject({ ok: false, error: "something went wrong" });
});

console.log(promiseObj);

promiseObj = {};
