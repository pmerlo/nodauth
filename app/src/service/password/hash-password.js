const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = function (req, _, next) {
  bcrypt
    .hash(req.body.password, saltRounds)
    .then((hash) => {
      req.body.password = hash;
      next();
    })
    .catch((err) => {
      throw err;
    });
};
