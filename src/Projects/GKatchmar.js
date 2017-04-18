import React from "react";
import {Card, CardHeader, CardMedia, CardTitle, CardText} from "material-ui/Card";
import injectTapEventPlugin from "react-tap-event-plugin";

// Needed for onTouchTap
injectTapEventPlugin();

export default class GKatchmar extends React.Component {

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
          title="gkatchmar.com"
          subtitle="In Progress"
          avatar={require("./images/GK.png")}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardMedia
          expandable={true}
        >
           {/*<img src={require("./images/401Final.jpg")} alt=""/>*/}
        </CardMedia>
        <CardTitle title="Personal website" subtitle="Software used beyond HTML/CSS/JavaScript: React, Material-UI." expandable={true} />
        <CardText expandable={true}>
          <a href="https://github.com/gnkatchmar/new-gkatchmar" target="_blank">Project Link</a>
        </CardText>
      </Card>
    );
  }
}