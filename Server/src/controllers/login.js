
const EMAIL_LOGIN = "diegohansselp24@gmail.com";
const PASSWORD_LOGIN = "@solorick24";

const STATUS_OK = 200;
const STATUS_ERROR = 404;

const login = (req, res) => {
  const { password, email } = req.query;

  try {
    if (!password || !email) {
      return res
        .status(STATUS_ERROR)
        .json({ message: "please enter a password and email address" });
    }

    if (password === PASSWORD_LOGIN && email === EMAIL_LOGIN) {
      res.status(STATUS_OK).json({ access: true });
    } else {
      res.status(STATUS_OK).json({ access: false });
    }
  } catch (error) {
    res.status(STATUS_ERROR).json(error);
  }
};

module.exports = login;
