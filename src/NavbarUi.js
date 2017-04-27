import React, {Component} from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Tabs from 'material-ui/Tabs/Tabs';
import Tab from 'material-ui/Tabs/Tab';
import createHistory from "history/createBrowserHistory";
import injectTapEventPlugin from 'react-tap-event-plugin';

const history = createHistory();

class NavbarUi extends Component {
  constructor() {
    super();
    console.log('in constructor', location.pathname);
    switch (location.pathname) {
      case '/':
        this.state = {initalTab: 0};
        break;
      case '/portfolio':
        this.state = {initalTab: 1};
        break;
      case '/dining':
        this.state = {initalTab: 2};
        break;
      case '/cocktails':
        this.state = {initalTab: 3};
        break;
      case '/restaurants':
        this.state = {initalTab: 3};
        break;
      default:
        console.log('default hit');
        this.state = {initalTab: 0};
        console.log('this.state.initalTab', this.state.initalTab);
        break;
    }
  }

  componentWillMount() {
    injectTapEventPlugin();
  }

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  hanldleChange(value) {
    console.log('handleChange', value);
    switch (value) {
      case 0:
        return history.push('/');
      case 1:
        return history.push('/portfolio');
      case 2:
        return history.push('/dining');
      case 3:
        return history.push('/cocktails');
      case 4:
        return history.push('/restaurants');
      default:
        return history.push('/');
    }
  }

  render() {
    const styles = {
      tabs: {
        width: '85%'
      }
    };

    console.log('location', location);
    console.log('this.state2', this.state.initialTab);
    // this.state.initalTab}
    return (
      <div className="container">
        <div className="row">
            <Tabs style={styles.tabs} onChange={this.hanldleChange} initialSelectedIndex={this.state.initalTab}>
              <Tab value={0} label="Home"/>
              <Tab value={1} label="Portfolio"/>
              <Tab value={2} label="Dining Guide"/>
              <Tab value={3} label="Cocktail Guides"/>
              <Tab value={4} label="Restaurant Rankings"/>
            </Tabs>
        </div>
      </div>
    );
  }
}

NavbarUi.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
};

export default NavbarUi;