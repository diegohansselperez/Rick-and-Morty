import { useState } from "react";
import "../styles/SearchBar.modules.css"


export default function SearchBar({onSearch}) {
const [id, setId] = useState("")

const handelChange = (event) => {
   setId(event.target.value)
}

const numRandom = Math.round(Math.random() * 826)

   return (
      <div className="inputSearch">
         <input type='search' onChange={handelChange} placeholder="Agregar un personaje" />
         <button onClick={() => onSearch(id)}>Agregar</button>
         <button onClick={() => onSearch(numRandom)}>Random</button>
      </div>
   );
}

//! No ejecutar el llamdo a una funcion en el onClick ya que no se puede ejecutar un llamado con un id
//! para eso le agregas un array function que es una Funcion que ejecuta una funcion(onSearch) y nos trae el valor
// si solo le pao la funcion onSearch se ejecutara en cuanto se cargue el archivo pero no queremos eso, por eso lo ponemos en un array function