const express = require("express");

const setCollection = require("./db/set-collection");

const validateBody = require("./db/validate-body");
const hashPassword = require("./password/hash-password");
const createUser = require("./db/create-user");

const findUser = require("./db/find-user");
const validatePassword = require("./password/validate-password");
const sendJwt = require("./jwt/send-jwt");

const validateJwt = require("./jwt/validate-jwt");
const findAllUsers = require("./db/find-all-users");

const router = express.Router();
router.use(setCollection);

router.post("/signup", validateBody, hashPassword, createUser);
router.post("/signin", findUser, validatePassword, sendJwt);
router.get("/refresh", validateJwt, sendJwt);
router.get("/users", findAllUsers);

module.exports = router;
