import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Back2Top from "react-back2top";
import {FloatingActionButton} from "material-ui";
import UpIcon from "material-ui/svg-icons/navigation/arrow-upward";
import NavTabs from "./NavTabs";

const App = () => (
  <MuiThemeProvider>
    <div>
      <NavTabs />
      <Back2Top>
      <FloatingActionButton>
          <UpIcon/>
      </FloatingActionButton>
    </Back2Top>
    </div>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

export default App;