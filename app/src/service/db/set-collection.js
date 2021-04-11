module.exports = function (req, _, next) {
  req.app.locals.mongodb.collection("users", function (err, collection) {
    if (err) throw err;
    req.collection = collection;
    next();
  });
};
