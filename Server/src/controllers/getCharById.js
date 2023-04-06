const axios = require("axios");

const getCharById = (res, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      let data = response.data;

      let objData = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        origin: data.origin.name,
        image: data.image,
        status: data.status,
      };

      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify(objData));
    })
    .catch((error) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(`Error: ${error.message}`);
    });
};

module.exports = getCharById;
