import React from "react";
import {Card, CardHeader, CardMedia, CardTitle, CardText} from "material-ui/Card";

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
          avatar={require("./images/401FinalAvatar.jpg")}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardMedia
          expandable={true}
        >
           <img src={require("./images/401Final.jpg")} alt=""/>
        </CardMedia>
        <CardTitle title="Code Fellows 401 final project using a full MEAN stack to create a streamlined, universal “to do” app." subtitle="Software used beyond HTML/CSS/JavaScript: MongoDB/Mongoose, Express, Angular 1.5, Node, Angular-Material, Angular-UI-Router, Webpack, Mocha/Chai/Karma/Jasmine." expandable={true} />
        <CardText expandable={true}>
          <a href="https://github.com/401-Final" target="_blank">Project Link</a>
        </CardText>
      </Card>
    );
  }
}