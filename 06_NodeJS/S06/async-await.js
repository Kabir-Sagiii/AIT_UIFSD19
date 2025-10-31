function getUser() {
  return new Promise(function (resolve, reject) {
    reject({ ok: true, user: { name: "viru", gender: "male" } });
  });
}

async function handlePromise() {
  try {
    var data = await getUser();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

handlePromise();
