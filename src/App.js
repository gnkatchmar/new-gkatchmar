import React, {Component} from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {FloatingActionButton} from "material-ui";
import UpIcon from "material-ui/svg-icons/navigation/arrow-upward";
import ScrollToTop from "react-scroll-up";

import NavTabs from "./NavTabs";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavTabs />
          <ScrollToTop showUnder={160}>
            <FloatingActionButton>
              <UpIcon/>
            </FloatingActionButton>
          </ScrollToTop>
        </div>
      </MuiThemeProvider>
  );
}}

export default App;