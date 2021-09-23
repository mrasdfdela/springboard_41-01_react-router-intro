import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink to="/chips">Chips</NavLink>
      <NavLink to="/broccoli">Broccoli</NavLink>
      <NavLink to="/soda">Soda</NavLink>
    </nav>
  );
}

export default NavBar;
