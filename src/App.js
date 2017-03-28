import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BigToDo from './BigToDo';
import FanClub from './FanClub';

const App = () => (
  <MuiThemeProvider>
    <div>
      <BigToDo />
      <FanClub />
    </div>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;