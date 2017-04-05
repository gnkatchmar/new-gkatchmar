import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import BigToDo from './BigToDo';
import FanClub from './FanClub';
import FoodTruck from './FoodTruck';
import Brunch from './Brunch';
import Home from './Home';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

const NavTabs = () => (
  <Tabs>
    <Tab label="Home" >
      <div>
        <h2 style={styles.headline}>Gregory N. Katchmar</h2>
        <Home />
      </div>
    </Tab>
    <Tab label="Portfolio" >
      <div>
        <h2 style={styles.headline}>Projects</h2>
        <BigToDo />
        <FanClub />
        <FoodTruck />
        <Brunch />
      </div>
    </Tab>
  </Tabs>
);

export default NavTabs;