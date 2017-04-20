import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import NavTabs from "./NavTabs";

const App = () => (
  <MuiThemeProvider>
    <div>
       <NavTabs />
    </div>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

export default App;