const bcrypt = require("bcrypt");

module.exports = function (req, res, next) {
  bcrypt
    .compare(req.body.password, req.user.password)
    .then((result) => {
      if (result) {
        next();
      } else {
        res.status(401);
        res.json("wrong password");
      }
    })
    .catch((err) => {
      res.status(400);
      res.json(err);
    });
};
