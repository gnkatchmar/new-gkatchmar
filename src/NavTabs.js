// import React, {Component} from "react";
// import {Tabs, Tab} from 'material-ui';
// import { withRouter } from "react-router-dom";

// import Home from "./Home";
// import Portfolio from "./Portfolio";
// import Dining from "./Dining";
// import Cocktail from "./Cocktail";
// import Restaurants from "./Restaurants";

// class NavTabs extends Component {

//  handleCallToRouter = (value) => {
//    this.props.history.push(value);
//  }

//   render () {
//      return (
//       <Tabs
//         value={this.props.history.location.pathname}
//         onChange={this.handleCallToRouter}
//         >
//         <Tab
//           label="Home"
//           value="/"
//         >
//         <div>
//            <Home />
//         </div>
//         </Tab>
//         <Tab
//           label="Portfolio"
//           value="/portfolio"
//             >
//           <div>
//             <Portfolio />
//           </div>
//         </Tab>
//         <Tab
//           label="Dining Guide"
//           value="/dining"
//           >
//         <div>
//           <Dining />
//         </div>
//         </Tab>
//         <Tab
//           label="Restaurant Ratings"
//           value="/restaurants"
//         >
//         <div>
//           <Restaurants />
//         </div>
//         </Tab>
//         <Tab
//             label="Cocktail Guides"
//             value="/cocktails"
//             >
//         <div>
//           <Cocktail />
//         </div>
//         </Tab>
//       </Tabs>           
//     )
//   }
// }

// export default withRouter(NavTabs)

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
// import { withRouter } from "react-router-dom";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Dining from "./Dining";
import Cocktail from "./Cocktail";
import Restaurants from "./Restaurants";

function TabContainer(props) {
  return <div style={{ padding: 20 }}>{props.children}</div>;
}

// TabContainer.propTypes = {
//   children: PropTypes.node.isRequired,
// };

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper,
  },
});

class NavTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
    // this.props.history.push(value)
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            scrollable
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Home" />
            <Tab label="Portfolio" />
            <Tab label="Dining Guide" />
            <Tab label="Restaurant Ratings" />
            <Tab label="Cocktail Guides" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>{Home}</TabContainer>}
        {value === 1 && <TabContainer>{Portfolio}</TabContainer>}
        {value === 2 && <TabContainer>{Dining}</TabContainer>}
        {value === 3 && <TabContainer>{Restaurants}</TabContainer>}
        {value === 4 && <TabContainer>{Cocktail}</TabContainer>}
      </div>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavTabs);
