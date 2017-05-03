import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {FloatingActionButton} from "material-ui";
import UpIcon from "material-ui/svg-icons/navigation/arrow-upward";
import ScrollToTop from "react-scroll-up";
import NavTabs from "./NavTabs";

const App = () => (
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

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

export default App;