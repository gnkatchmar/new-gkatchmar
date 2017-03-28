import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BigToDo from './BigToDo';
import FanClub from './FanClub';
import FoodTruck from './FoodTruck';
import Brunch from './Brunch';

const App = () => (
  <MuiThemeProvider>
    <div>
      <BigToDo />
      <FanClub />
      <FoodTruck />
      <Brunch />
    </div>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;