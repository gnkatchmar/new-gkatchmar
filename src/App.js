import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import {
//   BrowserRouter as Router,
//   Route
// } from "react-router-dom"
import { Tabs, Tab } from "material-ui-scrollable-tabs/Tabs";
import Portfolio from "./Portfolio";
import Home from "./Home";
import Dining from "./Dining";
import Cocktail from "./Cocktail"

const App = () => (
    /*<Router>
    <Route exact path="/" component={Home}/>
    <Route path="/portfolio" component={Portfolio}/>
    <Route path="/dining" component={Dining}/>
    <Route path="/Cocktail" component={Cocktail}/>
  </Router>*/
  <MuiThemeProvider>
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
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

export default App;