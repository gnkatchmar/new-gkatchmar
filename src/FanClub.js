import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class FanClub extends React.Component {

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
          title="Spotify Fan Club"
          subtitle="November 2016"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardMedia
          expandable={true}
        >
           <img src={require('./images/401MidTerm.jpg')} alt=''/>
        </CardMedia>
        <CardTitle title="Code Fellows 401 midterm project focusing on the backend and using the Spotify API with OAuth to create a social app for Spotify users." subtitle="Software used beyond HTML/CSS/JavaScript: MongoDB/Mongoose, Express, Node, Mocha/Chai, Bootstrap, Handlebars, jQuery." expandable={true} />
        <CardText expandable={true}>
          <a href="https://github.com/pdx-fanclub/fanclub-app" target="_blank">Project Link</a>
        </CardText>
        <CardActions>
          <FlatButton label="Expand" onTouchTap={this.handleExpand} />
          <FlatButton label="Reduce" onTouchTap={this.handleReduce} />
        </CardActions>
      </Card>
    );
  }
}