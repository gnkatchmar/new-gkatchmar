import React, {Component} from "react";
import {Card, CardHeader, CardMedia, CardTitle, CardText} from "material-ui/Card";
import injectTapEventPlugin from "react-tap-event-plugin";

const cardData = [{
  "key": 1,
	"headerTitle": "gkatchmar.com",
	"headerSubtitle": "May 2017",
  "headerAvatar": require("./avatars/GK.png"),
  "expandable": false,
  "media": "",
	"titleTitle": "Personal website",
	"titleSubtitle": "HTML/CSS/JavaScript + React, Material-UI, React-Router, React-Scroll-Up.",
	"textHref": "https://github.com/gnkatchmar/new-gkatchmar"
},
{
  "key": 2,
	"headerTitle": "The BigToDo",
	"headerSubtitle": "January 2017",
  "headerAvatar": require("./avatars/401FinalAvatar.jpg"),
  "expandable": true,
  "media": require("./avatars/401Final.jpg"),
	"titleTitle": "Code Fellows 401 final team project using a full MEAN stack to create a streamlined, universal “to do” app.",
	"titleSubtitle": "HTML/CSS/JavaScript + MongoDB/Mongoose, Express, Angular 1.5, Node, Angular-Material, Angular-UI-Router, Webpack, Mocha/Chai/Karma/Jasmine.",
	"textHref": "https://github.com/401-Final"
}
]

// Needed for onTouchTap
injectTapEventPlugin();

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
          <CardMedia
            expandable={card.expandable}
        >
           <img src={card.media} alt=""/>
        </CardMedia>
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
