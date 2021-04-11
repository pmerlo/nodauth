module.exports = function (req, res, next) {
  req.collection
    .findOne({ _id: req.body.username })
    .then((result) => {
      if (result) {
        req.user = {
          username: result._id,
          password: result.password,
        };
        next();
      } else {
        res.status(400);
        res.json("user does not exist");
      }
    })
    .catch((err) => {
      res.status(400);
      res.json(err);
    });
};
