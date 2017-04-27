import React from "react";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from "./Home";
import Portfolio from "./Portfolio";
import Dining from "./Dining";
import Cocktail from "./Cocktail";
import Restaurants from "./Restaurants";

const GRouter = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/portfolio" component={Portfolio}/>
      <Route exact path="/dining" component={Dining}/>
      <Route exact path="/cocktails" component={Cocktail}/>
      <Route exact path="/restaurants" component={Restaurants}/>
    </div>
  </Router>
)

export default GRouter;

