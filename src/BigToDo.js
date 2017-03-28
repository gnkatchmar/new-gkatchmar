import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
injectTapEventPlugin();

export default class BigToDo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  render() {
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title="The BigToDo"
          subtitle="January 2017"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardMedia
          expandable={true}
        >
           <img src={require('./images/401Final.jpg')} alt=''/>
        </CardMedia>
        <CardTitle title="Code Fellows 401 final project using a full MEAN stack to create a streamlined, universal “to do” app." subtitle="MongoDB/Mongoose, Express, Angular 1.5, Node, Angular-Material, Angular-UI-Router, Webpack, Mocha/Chai/Karma/Jasmine" expandable={true} />
        <CardText expandable={true}>
          <a href="https://github.com/401-Final" target="_blank">Project Link</a>
        </CardText>
        <CardActions>
          <FlatButton label="Expand" onTouchTap={this.handleExpand} />
          <FlatButton label="Reduce" onTouchTap={this.handleReduce} />
        </CardActions>
      </Card>
    );
  }
}