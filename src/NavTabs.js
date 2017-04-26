import React from "react";
import createHistory from "history/createBrowserHistory";
import { Tabs, Tab } from "material-ui-scrollable-tabs/Tabs";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Dining from "./Dining";
import Cocktail from "./Cocktail";
import Restaurants from "./Restaurants";

const history = createHistory();


history.listen((location, action) => {
  console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`)
  console.log(`The last navigation action was ${action}`)
})



function handleActive(tab) {
  history.push(tab.props["data-route"]);
}

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
          <h1>Gregory N. Katchmar</h1>
          <h2>Full-stack JavaScript Developer</h2>
          <h3>HTML, CSS, JavaScript, Node.js, React.js, Angular.js 1.5, MongoDB, Express.js, SQL, Webpack, testing&nbsp;(Mocha,&nbsp;Chai, Karma, Protractor,&nbsp;Jest)</h3>
          <hr></hr>
          <h4>More information at:</h4>
          <Home />
        </div>
        </Tab>
        <Tab
            label="Portfolio"
            data-route="/portfolio"
            onActive={handleActive}
          >
          <div>
            <h2>Projects</h2>
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
            label="Cocktail Guides"
            data-route="/cocktails"
            onActive={handleActive}
          >
        <div>
          <Cocktail />
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
    </Tabs>           
    )
  }
}