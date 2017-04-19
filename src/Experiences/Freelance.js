import React from "react";
import {Card, CardHeader, CardTitle} from "material-ui/Card";

export default class Freelance extends React.Component {

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
          title="Freelance Administrative Contractor"
          subtitle="1997-1999"
          avatar={require("./images/GK.png")}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardTitle title="Various Temporary Assignments" subtitle="Clients included The Standard, Metro & Gideon Forensic Investigation." expandable={true} />
      </Card>
    );
  }
}