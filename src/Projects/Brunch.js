import React from "react";
import {Card, CardHeader, CardMedia, CardTitle, CardText} from "material-ui/Card";

export default class Brunch extends React.Component {

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
          title="Portland Weekend Brunch Finder"
          subtitle="August 2016"
          avatar={require("./images/201FinalAvatar.jpg")}  
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardMedia
          expandable={true}
        >
           <img src={require("./images/201Final.jpg")} alt=""/>
        </CardMedia>
        <CardTitle title="Code Fellows 201 final project using geolocation, Google Places and Maps APIs to create a brunch finding app." subtitle="HTML/CSS/JavaScript" expandable={true} />
        <CardText expandable={true}>
          <a href="https://github.com/gnkatchmar/Code201Final" target="_blank">Project Link</a>
        </CardText>
      </Card>
    );
  }
}