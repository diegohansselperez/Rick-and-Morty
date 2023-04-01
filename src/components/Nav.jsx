import React from "react";
import "../styles/Nav.modules.css";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";

export const Nav = (props) => {
  return (
    <>
      <nav className="navbar">
        <NavLink
          style={{
            padding: "5px 6px",
            borderRadius: "5px",
          }}
          to="/favorites"
        >
          <button>Favorites</button>
        </NavLink>{" "}
        <NavLink
          style={{
            padding: "5px 6px",
            borderRadius: "5px",
          }}
          to="/about"
        >
          <button>About</button>
        </NavLink>
        <NavLink
          style={{
            padding: "5px 6px",
            borderRadius: "5px",
          }}
          to="/home"
        >
          <button>Home</button>
        </NavLink>
        <SearchBar
          style={{ borderRadius: "5px", border: "none" , padding:"3px 4px"}}
          onSearch={props.onSearch}
        />
      </nav>
    </>
  );
};
