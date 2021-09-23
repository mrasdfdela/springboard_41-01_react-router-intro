import React from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
// import { useHistory } from 'react-router-dom';

import Home from "./Home";


function BackButton() {
  return (
    <>
      <NavLink to="/">Back</NavLink>
    </>
  )
}

export default BackButton;