const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character";

const STATUS_OK = 200;
const STATUS_ERROR = 404;
const EMAIL_LOGIN = "diegohansselp24@gmail.com";
const PASSWORD_LOGIN = "@solorick24"

const getCharById = (req, res) => {
  const { id } = req.params;

  try {
    axios.get(`${URL}/${id}`).then(({ data }) => {
      if (data) {
        const character = {
          id: data.id,
          name: data.name,
          status: data.status,
          species: data.species,
          origin: data.origin?.name,
          image: data.image,
          gender: data.gender,
        };
        return res.status(STATUS_OK).json(character);
      } else {
        return res
          .status(STATUS_ERROR)
          .send("Error: No se encontro el personaje");
      }
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { getCharById };

// const getCharById = (res, id) => {
//   axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => {
//       let data = response.data;

//       let objData = {
//         id: data.id,
//         name: data.name,
//         gender: data.gender,
//         origin: data.origin.name,
//         image: data.image,
//         status: data.status,
//       };

//       res.writeHead(500, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(objData));
//     })
//     .catch((error) => {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       res.end(`Error: ${error.message}`);
//     });
// };
