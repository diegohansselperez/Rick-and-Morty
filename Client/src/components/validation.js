const validation = (userData) => {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const errors = {};

  if (userData.email.length === 0) {
    errors.password = "";
  } else if (!regexEmail.test(userData.email)) {
    errors.email = "El nombre de usuario tiene que ser un email";
  } else if (!userData.email) {
    errors.email = "El nombre de usuario no puede estar vacio";
  } else if (userData.email.length > 35) {
    errors.email = "El nombre de usuario no puede tener más de 35 caracteres";
  }

  const regexPassword = /\d+/;
  if (userData.password.length === 0) {
    errors.password = "";
  } else if (userData.password.length < 6) {
    errors.password =
      "La contraseña tiene que contener entre 6 y 10 caracteres";
  } else if (userData.password.length > 10) {
    errors.password =
      "La contraseña tiene que contener entre 6 y 10 caracteres";
  } else if (!regexPassword.test(userData.password)) {
    errors.password = "La contraseña tiene que contener al menos un numero";
  }

  return errors;
};

export default validation;
