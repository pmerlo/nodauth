module.exports = function (req, res) {
  req.collection
    .find()
    .toArray()
    .then((result) => {
      res.status(200);
      res.json(result);
    })
    .catch((err) => {
      res.status(500);
      res.json(err);
    });
};
