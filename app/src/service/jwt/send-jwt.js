const jwt = require("jsonwebtoken");

module.exports = function (req, res) {
  const payload = {
    user: req.user.username,
  };
  const settings = req.app.config.jwt;

  const token = jwt.sign(payload, settings.secret, {
    algorithm: settings.algorithm,
    expiresIn: settings.expirySeconds,
  });
  res.status(200);
  res.json({ accessToken: token });
};
