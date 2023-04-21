const express = require("express");

const routerCharacter = express.Router();

const { getCharById } = require("../controllers/getCharById");
const { getCharDetail } = require("../controllers/getCharDetail");

routerCharacter.get("/:id", getCharById);
routerCharacter.get("/detail/:id", getCharDetail);

module.exports = routerCharacter;
