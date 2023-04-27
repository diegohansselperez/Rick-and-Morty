import React from "react";
import "../styles/Nav.modules.css";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import image from "../img/my_logo_navbar.png";

export const Nav = (props) => {
  return (
    <>
      <nav className="navbar">
        <div className="containerLogo">
          {" "}
          <img
            src={image}
            alt="rick and morty logo"
            style={{ width: "80px" }}
          />
        </div>
        <div className="containerBtn">
          {" "}
          <NavLink style={{ textDecoration: "none" }} to="/favorites">
            <button className="btnNav">Favorites</button>
          </NavLink>{" "}
          <NavLink style={{ textDecoration: "none" }} to="/about">
            <button className="btnNav">About</button>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/home">
            <button className="btnNav">Home</button>
          </NavLink>
          <SearchBar
            // style={{ borderRadius: "5px", border: "none" , padding:"3px 4px"}}
            onSearch={props.onSearch}
          />
        </div>
      </nav>
    </>
  );
};
