const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  try {
    const { id, name, status, gender, origin, image, species } = req.body;

    if (!id || !name || !origin || !image)
      return res.status(401).send("Faltan Datos");

    await Favorite.findOrCreate({
      where: {
        id,
        name,
        status,
        gender,
        origin: origin.name,
        image,
        species,
      },
    });

    const allFavorites = await Favorite.findAll();

    return res.status(200).json(allFavorites);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postFav;
