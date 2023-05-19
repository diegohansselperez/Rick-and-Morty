import { useState, useEffect } from "react";
import Cards from "./components/Cards";
import { Nav } from "./components/Nav.jsx";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About.jsx";
import Detail from "./components/Detail.jsx";
import Form from "./components/Form.jsx";
import Favorites from "./components/Favorites.jsx";

import axios from "axios";


function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const location = useLocation();



  const navigate = useNavigate();

  const onSearch = async (id) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/rickandmorty/character/${id}`
      );

      console.log("onSearch", data);

      if(data.name && !characters.find((person) => person.id === data.id)) {
        setCharacters((oldCharts) => [...oldCharts, data]);
      } else {
        if (characters.find((person) => person.id === data.id)) {
          return window.alert("un elemento ya esta añadido");
        } else {
          window.alert("No se encontro el ID");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const loginForm = async (userData) => {
    const LOGINURL = "http://localhost:3001/rickandmorty/login";
    const QUERY = `?password=${userData.password}&email=${userData.email}`;
    try {
      const { data } = await axios.get(LOGINURL + QUERY);
      const { access } = data;
      if (!access) {
        return alert("USUARIO NO VALIDO");
      }

      setAccess(access);
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };
  //evita que saltes del login a travez del home, es un tipo de seguridad para no saltarte el login y solo un usuario puede entrar

  useEffect(() => {
    !access && navigate("/");
  }, [navigate, access]);

  const onClose = (id) => {
    setCharacters(characters.filter((pers) => pers.id !== id));
   
  };

  //creamos una condicion, si pathname es diferente a "/" entonces que muestre el Nav, en caso contrario que siga con routes y recargue el Form como principal.
  return (
    <>
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route exact path="/" element={<Form loginForm={loginForm} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;

//    En esta sintaxis, myState es la variable de estado y setMyState es una función que se utiliza para actualizar el valor de myState. initialState es el valor inicial de myState.
// Cuando se llama a setMyState, React re-renderiza el componente y actualiza el valor de myState con el nuevo valor proporcionado como argumento.
// Es importante tener en cuenta que cada llamada a useState es independiente, por lo que puedes utilizar useState varias veces en un solo componente para agregar múltiples variables de estado.
