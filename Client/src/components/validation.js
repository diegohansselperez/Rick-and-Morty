const validation = (userData) => {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const errors = {};

  if (!userData.email) {
    errors.email = "Debe haber un email";
  } else if (!userData.password) {
    errors.password = "Debe haber un password";
  } else if (!regexEmail.test(userData.email)) {
    errors.email = "Debe ser un email válido";
  }
  return errors;
};

export default validation;
