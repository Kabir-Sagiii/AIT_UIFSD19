function middleware1(req, res, next) {
  console.log("Middleware - 1 of separate file");
  next();
}

function middleware2(req, res, next) {
  console.log("Middleware - 2 of separate file");
  next();
}

module.exports = { middleware1, middleware2 };
