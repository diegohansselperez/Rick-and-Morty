import React from "react";
import validate from "../components/validation";
import "../styles/Form.mudules.css";

const Form = () => {
  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validate({
        ...errors,
        [event.target.name]: event.target.value,
      })
    );
    
  };

  return (
    <>
      <div>
        <form>
          <div>
            <label>Email: </label>
            <input
              type="text"
              placeholder="Escribe un correo..."
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
            <span className="danger">{errors.email}</span>
          </div>

          <div>
            <label>Password: </label>
            <input
              type="text"
              placeholder="Escribe tu contraseña..."
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
            <span className="danger">{errors.password}</span>
          </div>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
};

export default Form;
