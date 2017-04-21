import React from "react";
import { Tabs, Tab } from "material-ui-scrollable-tabs/Tabs";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Dining from "./Dining";
import Cocktail from "./Cocktail";
import Restaurants from "./Restaurants";

export default class NavTabs extends React.Component {
  render () {
    return (
      <Tabs tabType="scrollable-buttons">
        <Tab label="Home">
          <div>
           <h1>Gregory N. Katchmar</h1>
            <h2>Full-stack JavaScript Developer</h2>
            <h3>HTML, CSS, JavaScript, Node.js, React.js, Angular.js 1.5, MongoDB (with Mongoose and Robomongo), Express.js, SQL, Webpack, testing&nbsp;(Mocha,&nbsp;Chai, Karma, Protractor,&nbsp;Jest)</h3>
            <hr></hr>
            <h4>More information at:</h4>
            <Home />
          </div>
        </Tab>
        <Tab label="Portfolio">
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
        <Tab label="Restaurant Ratings" >
          <div>
            <Restaurants />
          </div>
        </Tab>
    </Tabs>           
 )
  }
}