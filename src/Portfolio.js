import React, {Component} from "react";
import {Card, CardHeader, CardTitle, CardText} from "material-ui/Card";
import injectTapEventPlugin from "react-tap-event-plugin";

// Needed for onTouchTap
injectTapEventPlugin();

var cardData = [{
  "key": 1,
	"headerTitle": "gkatchmar.com",
	"headerSubtitle": "May 2017",
	"headerAvatar": require("./avatars/GK.png"),
	"titleTitle": "Personal website",
	"titleSubtitle": "HTML/CSS/JavaScript + React, Material-UI, React-Router, React-Scroll-Up.",
	"textHref": "https://github.com/gnkatchmar/new-gkatchmar"
}]

export default class Portfolio extends Component {

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
  
  render(){
    let cardList = []
    Object.keys(cardData).forEach((cardIndex) => {
      let card = cardData[cardIndex]
      cardList.push (
        <Card key={card.key} expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
          <CardHeader
            title={card.headerTitle}
            subtitle={card.headerSubtitle}
            avatar={card.headerAvatar}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardTitle title={card.titleTitle} subtitle={card.titleSubtitle} expandable={true} />
          <CardText expandable={true}>
            <a href={card.textHref} target="_blank" rel="noopener noreferrer">Project Link</a>
          </CardText>
        </Card>            
      )
    })

    return (
      <div className='card-list'>
        { cardList }
      </div>
    );
  }
}
