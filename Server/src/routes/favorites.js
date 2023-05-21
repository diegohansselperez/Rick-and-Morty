const express = require("express");
const routerFavorites = express.Router();
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");


routerFavorites.post("/", postFav);
routerFavorites.delete("/:id", deleteFav);



module.exports = routerFavorites;
