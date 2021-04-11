const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    const secret = req.app.config.jwt.secret;
    jwt.verify(token, secret, (err, payload) => {
      if (err) {
        res.status(403);
        res.json("invalid access token");
      } else {
        req.user = {};
        req.user.username = payload.user;
        next();
      }
    });
  } else {
    res.status(401);
    res.json("unauthorized");
  }
};
