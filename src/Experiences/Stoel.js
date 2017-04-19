import React from "react";
import {Card, CardHeader, CardTitle} from "material-ui/Card";

export default class Stoel extends React.Component {

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
          title="Stoel Rives LLP"
          subtitle="1999-2012"
          avatar={require("./images/stoel.png")}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardTitle title="IPC Software Specialist" subtitle="Used Microsoft Word, Microsoft Excel, VBA for Word & Excel, Adiministrative-Level Legal MacPac, Microsoft Visio, Adobe Acrobat, Microsoft Access, Microsoft PowerPoint, InterAction, Workshare Compare, iManage, Best Authority, ASAP Utilities for Excel, Irfanview, and other software." expandable={true} />
      </Card>
    );
  }
}