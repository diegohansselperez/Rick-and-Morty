import React from "react";
import validate from "./validation.js";
import "../styles/Form.mudules.css";
//import { useNavigate } from "react-router-dom";

const Form = ({ loginForm }) => {
  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({
    email: "",
    password: "",
  });

  //const navigate = useNavigate();

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

  const handleSubmit = (e) => {
    e.preventDefault();

    let aux = Object.keys(errors);
    if (aux.length === 0) {
      loginForm(userData)
      setUserData({
        email: "",
        password: "",
      });
    }

    //navigate("/home");
  };

  return (
    
    <div className="containerForm">
      <form onSubmit={handleSubmit}>
        {" "}
        <div className="container">
          <label>Email: </label>
          <input
            type="text"
            placeholder="Write your email here..."
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          <span className="danger">{errors.email}</span>

          <label>Password: </label>
          <input
            type="text"
            placeholder="Enter your password here..."
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          <span className="danger">{errors.password}</span>

          <button className="btnForm" type="submit">
            ENVIAR
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
