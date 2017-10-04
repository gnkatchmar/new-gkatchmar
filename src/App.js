// import React, {Component} from "react";
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import {FloatingActionButton} from "material-ui";
// import UpIcon from "material-ui-icons/ArrowUpward";
// import ScrollToTop from "react-scroll-up";
// import NavTabs from "./NavTabs";

// class App extends Component {
//   render() {
//     return (
//       <MuiThemeProvider>
//         <div>
//           <NavTabs />
//           <ScrollToTop showUnder={160}>
//             <FloatingActionButton>
//               <UpIcon/>
//             </FloatingActionButton>
//           </ScrollToTop>
//         </div>
//       </MuiThemeProvider>
//   );
// }}

// export default App;

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import UpIcon from "material-ui-icons/ArrowUpward";
import ScrollToTop from "react-scroll-up";
import NavTabs from "./NavTabs";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

function App(props) {
  const classes = props.classes;
  return (
    <div>
      <NavTabs />
      <ScrollToTop showUnder={160}>
      <Button fab color="primary" className={classes.button}>
        <UpIcon/>
      </Button>
      </ScrollToTop>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);