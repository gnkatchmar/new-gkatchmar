import React, {Component} from "react";
import {Tabs, Tab} from 'material-ui';
import { withRouter } from "react-router-dom";

import Home from "./Home";
import Portfolio from "./Portfolio";
import Dining from "./Dining";
import Cocktail from "./Cocktail";
import Restaurants from "./Restaurants";

class NavTabs extends Component {

 handleCallToRouter = (value) => {
   this.props.history.push(value);
 }

  render () {
     return (
      <Tabs
        value={this.props.history.location.pathname}
        onChange={this.handleCallToRouter}
        >
        <Tab
          label="Home"
          value="/"
        >
        <div>
           <Home />
        </div>
        </Tab>
        <Tab
          label="Portfolio"
          value="/portfolio"
            >
          <div>
            <Portfolio />
          </div>
        </Tab>
        <Tab
          label="Dining Guide"
          value="/dining"
          >
        <div>
          <Dining />
        </div>
        </Tab>
        <Tab
          label="Restaurant Ratings"
          value="/restaurants"
        >
        <div>
          <Restaurants />
        </div>
        </Tab>
        <Tab
            label="Cocktail Guides"
            value="/cocktails"
            >
        <div>
          <Cocktail />
        </div>
        </Tab>
      </Tabs>           
    )
  }
}

export default withRouter(NavTabs)