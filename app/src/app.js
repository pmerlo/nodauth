const express = require("express");
const cors = require("cors");

const configuration = require("./configuration");
const database = require("./database");
const service = require("./service");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configuration(app);
database(app);

app.use(service);

app.listen(app.config.port, () =>
  console.log(`Listening on port ${app.config.port}`)
);

module.exports = app;
