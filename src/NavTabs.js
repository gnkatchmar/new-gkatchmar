import React from "react";
import createHistory from "history/createBrowserHistory";
import { Tabs, Tab } from "material-ui-scrollable-tabs/Tabs";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Dining from "./Dining";
import Cocktail from "./Cocktail";
import Restaurants from "./Restaurants";

const history = createHistory();

function handleActive(tab) {
  history.replace(tab.props["data-route"]);
}

// window.onpopstate = function(event) {
//     window.location.reload();
// };

export default class NavTabs extends React.Component {
  render () {
    return (
      <Tabs tabType="scrollable-buttons">
        <Tab
          label="Home"
          data-route="/"
          onActive={handleActive}
        >
        <div>
           <Home />
        </div>
        </Tab>
        <Tab
            label="Portfolio"
            data-route="/portfolio"
            onActive={handleActive}
          >
          <div>
            <Portfolio />
          </div>
        </Tab>
        <Tab
            label="Dining Guide"
            data-route="/dining"
            onActive={handleActive}
        >
        <div>
          <Dining />
        </div>
        </Tab>
        <Tab
          label="Restaurant Ratings"
          data-route="/restaurants"
          onActive={handleActive}
        >
        <div>
          <Restaurants />
        </div>
        </Tab>
        <Tab
            label="Cocktail Guides"
            data-route="/cocktails"
            onActive={handleActive}
          >
        <div>
          <Cocktail />
        </div>
        </Tab>
      </Tabs>           
    )
  }
}