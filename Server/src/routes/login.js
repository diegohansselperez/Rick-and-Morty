const express = require("express");
const routerLogin = express.Router();

const login = require("../controllers/login")

routerLogin.use("/", login)

module.exports = routerLogin;