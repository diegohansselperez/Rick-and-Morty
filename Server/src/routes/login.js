const express = require("express");
const routerLogin = express.Router();

const login = require("../controllers/login")
const postUser = require("../controllers/postUser")

routerLogin.get("/", login)

routerLogin.post("/", postUser)

module.exports = routerLogin;