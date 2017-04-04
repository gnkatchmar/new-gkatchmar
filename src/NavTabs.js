import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import BigToDo from './BigToDo';
import FanClub from './FanClub';
import FoodTruck from './FoodTruck';
import Brunch from './Brunch';

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
        <h2 style={styles.headline}>Home</h2>
        <p>
          Under Construction
        </p>
        <p>

        </p>
      </div>
    </Tab>
    <Tab label="Portfolio" >
      <div>
        <h2 style={styles.headline}>Portfolio</h2>
        <p>
      <BigToDo />
      <FanClub />
      <FoodTruck />
      <Brunch />
        </p>
      </div>
    </Tab>
  </Tabs>
);

export default NavTabs;