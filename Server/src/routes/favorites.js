const express = require("express");
const routerFavorites = express.Router();
const { addFav, deleteFav } = require("../controllers/favorites");

routerFavorites.post("/", addFav);
routerFavorites.delete("/:id", deleteFav);



module.exports = routerFavorites;
