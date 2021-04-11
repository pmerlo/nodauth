module.exports = function (req, res) {
  req.collection
    .insertOne({ _id: req.body.username, password: req.body.password }, {})
    .then((result) => {
      res.status(200);
      res.json("success");
    })
    .catch((err) => {
      res.status(400);
      res.json(err);
    });
};
