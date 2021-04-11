const MongoClient = require("mongodb").MongoClient;

const config = {
  useUnifiedTopology: true,
};

module.exports = function (app) {
  MongoClient.connect(app.config.mongodb.url, config)
    .then((client) => {
      console.log("connected to database");
      const dbo = client.db(app.config.mongodb.db);
      app.locals = {};
      app.locals.mongodb = dbo;
    })
    .catch((err) => {
      console.log("error connecting to database");
      console.log(err);
    });
};
