import React from "react";
import { Tabs, Tab } from "material-ui-scrollable-tabs/Tabs";
import Portfolio from "./Portfolio";
import Home from "./Home";
import Dining from "./Dining";
import Cocktail from "./Cocktail"

const NavTabs = () => (
  <div>
      <Tabs tabType="scrollable-buttons">
        <Tab label="Home" >
          <div>
            <h2>Gregory N. Katchmar</h2>
            <h3>Full-stack JavaScript Developer</h3>
            <h4>HTML, CSS, JavaScript, Node.js, React.js, Angular.js 1.5, MongoDB, Express.js, SQL, webpack, testing (Mocha, Chai, Karma, Jest)</h4>
            <Home />
          </div>
        </Tab>
        <Tab label="Portfolio" >
          <div>
            <h2>Projects</h2>
            <Portfolio />
          </div>
        </Tab>
        <Tab label="Dining Guide" >
          <div>
            <Dining />
          </div>
        </Tab>
        <Tab label="Cocktail Guides" >
          <div>
            <Cocktail />
          </div>
        </Tab>
    </Tabs>
  </div>
);

export default NavTabs;