const STATUS_OK = 200;
const STATUS_ERROR = 404;

let favoritesChar = [];

const postFav = (req, res) => {
  try {
    const { id, name, image, status, species, origin, gender } = req.body;

    let characterFilter = favoritesChar.find((fav) => fav.id === id);

    if (characterFilter) throw Error("el personaje ya existe en favoritos");

    const character = {
      id,
      name,
      image,
      gender,
      status,
      species,
      origin,
    };

    favoritesChar.push(character);

    res.status(STATUS_OK).json(favoritesChar);
  } catch (error) {
    res.status(STATUS_ERROR).json({ message: error.message });
  }
};

const deleteFav = (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(STATUS_ERROR).send("Error: id not found");
    }

    const newFavorites = favoritesChar.filter((char) => char.id !== Number(id));

    res.status(STATUS_OK).json(newFavorites);
  } catch (error) {
    res.status(STATUS_ERROR).json({ message: error.message });
  }
};

module.exports = {
  postFav,
  deleteFav,
};
