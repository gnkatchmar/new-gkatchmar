import React from "react";
import { Tabs, Tab } from "material-ui-scrollable-tabs/Tabs";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from "./Home";
import Portfolio from "./Portfolio";
import About from "./About";
import Dining from "./Dining";
import Cocktail from "./Cocktail";
import Restaurants from "./Restaurants";

const NavTabs = () => (
  <Router>
  <div>
      <Tabs tabType="scrollable-buttons">
        <Tab label="Home" >
          <div>
           <h2>Gregory N. Katchmar</h2>
            <h3>Full-stack JavaScript Developer</h3>
            <h4>HTML, CSS, JavaScript, Node.js, React.js, Angular.js 1.5, MongoDB, Express.js, SQL, webpack, testing (Mocha, Chai, Karma, Jest)</h4>
            <Route exact path="/" component={Home}/>
          </div>
        </Tab>
        <Tab label="Portfolio">
          <div>
            <h2>Projects</h2>
            <Route path="/portfolio" component={Portfolio}/>
            <Portfolio />
          </div>
        </Tab>
      <Tab label="About">
          <div>
            <h2>Experiences</h2>
            <Route path="/portfolio" component={About}/>
            <About />
          </div>
        </Tab>
        <Tab label="Dining Guide" >
          <div>
            <Route path="/dining" component={Dining}/>
            <Dining />
          </div>
        </Tab>
        <Tab label="Cocktail Guides" >
          <div>
            <Route path="/cocktail" component={Cocktail}/>
            <Cocktail />
          </div>
        </Tab>
        <Tab label="Restaurant Reviews" >
          <div>
            <Route path="/restaurants" component={Restaurants}/>
            <Restaurants />
          </div>
        </Tab>
    </Tabs>           
  </div>
  </Router>
);

export default NavTabs;