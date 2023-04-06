const http = require("http");
//const characters = require("../src/routes/data");
const getCharById = require("./controllers/getCharById");
const getCharDetail = require("./controllers/getCharDetail.js");
//const axios = require("axios")

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    let id = req.url.split("/").at(-1);

    if (req.url.includes(`characters`)) {
      getCharById(res, id);
    }

    if (req.url.includes(`details`)) {
      getCharDetail(res, id);
    }
  })
  .listen(3001, "localhost");
