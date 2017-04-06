import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Portfolio from './Portfolio';
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
        <Portfolio />
      </div>
    </Tab>
  </Tabs>
);

export default NavTabs;