const express = require("express");
const routerFavorites = express.Router();
const { postFav, deleteFav } = require("../controllers/favorites");

routerFavorites.post("/", postFav);
routerFavorites.delete("/:id", deleteFav);



module.exports = routerFavorites;
