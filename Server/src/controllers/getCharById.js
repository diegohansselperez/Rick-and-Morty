const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character";

const STATUS_OK = 200;
const STATUS_ERROR = 404;


const getCharById = async (req, res) => {
  try {
    const { id } = req.params;

    const { data } = await axios.get(`${URL}/${id}`);

    if (!data.name) {
      throw new Error(`ID: ${id} is not faund`);
    }

    if (data.name) {
      const character = {
        id: data.id,
        name: data.name,
        status: data.status,
        species: data.species,
        origin: data.origin,
        image: data.image,
        gender: data.gender,
      };
      
      return res.status(STATUS_OK).json(character);
    }
  } catch (error) {
    return error.message.includes("ID")
      ? res.status(STATUS_ERROR).send(error.message)
      : res.status(500).send(error.response.data.error);
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
