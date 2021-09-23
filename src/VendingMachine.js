import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from "./Home";
import NavBar from "./NavBar";
import BackButton from './BackButton';

import Soda from "./Soda";
import Chips from "./Chips";
import Broccoli from "./Broccoli";

function VendingMachine() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path="/"> 
        <Home />
      </Route>
      
      <Route exact path="/soda">
        <Soda />
        <BackButton />
      </Route>    
      
      <Route exact path="/chips">
        <Chips />
        <BackButton />
      </Route>    

      <Route exact path="/broccoli">
        <Broccoli />
        <BackButton />
      </Route>
    </BrowserRouter>
  )
}

export default VendingMachine;