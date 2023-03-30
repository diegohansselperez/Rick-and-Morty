import React from "react";
import "../styles/Nav.modules.css";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";

export const Nav = (props) => {
  return (
    <nav className="navbar">
      <NavLink to="/favorites">
        <button
          style={{
            padding: "5px 6px",
            borderRadius: "5px",
            backgroundcolor: "#81bc02",
          }}
        >
          Favorites
        </button>
      </NavLink>{" "}
      <NavLink to="/about">
        <button  style={{
            padding: "5px 6px",
            borderRadius: "5px",
            backgroundcolor: "#81bc02",
          }} >About</button>
      </NavLink>
      <NavLink to="/home">
        <button  style={{
            padding: "5px 6px",
            borderRadius: "5px",
            backgroundcolor: "#81bc02",
          }} >Home</button>
      </NavLink>
      <SearchBar onSearch={props.onSearch} />
    </nav>
  );
};
