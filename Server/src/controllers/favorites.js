const STATUS_OK = 200;
const STATUS_ERROR = 404;

let favoritesChar = [];

const addFav = (req, res) => {
  const { id, name, image, status, species, origin } = req.body;

  try {
    if (!id || !name || !image) {
      return res.status(STATUS_ERROR).send("Error: id not found");
    }

    const character = {
      id,
      name,
      image,
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
  const { id } = req.params;

  try {
    if (!id) {
      return res.status(STATUS_ERROR).send("Error: id not found");
    }

    const charFilters = favoritesChar.filter((char) => char.id !== Number(id));

    favoritesChar = charFilters;

    res.status(STATUS_OK).json(favoritesChar);
  } catch (error) {
    res.status(STATUS_ERROR).json({ message: error.message });
  }
};

module.exports = {
  addFav,
  deleteFav,
};
