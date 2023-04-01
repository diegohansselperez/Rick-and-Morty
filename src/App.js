import { useState } from "react";
//import "./App.css";
import Cards from "./components/Cards.jsx";
import { Nav } from "./components/Nav";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";
import Form from "./components/Form";
import Favorites from "./components/Favorites.jsx";

function App() {
  const [characters, setCharacters] = useState([]);

  const location = useLocation();

  const onSearch = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.name && !characters.find((person) => person.id === data.id)) {
          //oldCharts es igual a characters, solo le cambiamos el nombre.
          setCharacters((oldCharts) => [...oldCharts, data]);
        } else {
          if (characters.find((person) => person.id === data.id)) {
            return window.alert("un elemento ya esta añadido");
          } else {
            window.alert("No se encontro el ID");
          }
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((pers) => pers.id !== id));
  };

  //creamos una condicion, si pathname es diferente a "/" entonces que muestre el Nav, en caso contrario que siga con routes y recargue el Form como principal.
  return (
    <>
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route
          exact
          path="/"
          element={ <Form /> }
        />
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
