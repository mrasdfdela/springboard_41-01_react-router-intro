import React from "react";
import { NavLink } from "react-router-dom";
import "./VendingOptions.css";

function VendingOptions() {
  return (
    <nav className="VendingOptions">
      <NavLink to="/chips">Chips</NavLink>
      <NavLink to="/broccoli">Broccoli</NavLink>
      <NavLink to="/soda">Soda</NavLink>
    </nav>
  )
}

export default VendingOptions;