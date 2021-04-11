const validate = require("jsonschema").validate;

const schema = {
  type: "object",
  required: ["username", "password"],
  properties: {
    username: { type: "string" },
    password: { type: "string" },
  },
};

module.exports = function (req, res, next) {
  const result = validate(req.body, schema);
  if (result.errors.length == 0) {
    next();
  } else {
    res.status(400);
    res.json({ message: result.errors[0].stack.split('"').join("'") });
  }
};
