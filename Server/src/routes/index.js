const express = require("express");
const router = express.Router();


const routerCharacter = require("./characters");
const routerFavorites = require("./favorites");
const routerLogin = require("./login");

router.use("/character", routerCharacter);
router.use("/favorite", routerFavorites);
router.use("/login", routerLogin);

module.exports = router;
