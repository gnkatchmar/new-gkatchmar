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
},
{
  "key": 3,
	"headerTitle": "Spotify Fan Club",
	"headerSubtitle": "November 2016",
  "headerAvatar": require("./avatars/401MidTermAvatar.jpg"),
  "expandable": true,
  "media": require("./avatars/401MidTerm.jpg"),
	"titleTitle": "Code Fellows 401 midterm team project focusing on the backend and using the Spotify API with OAuth to create a social app for Spotify users (incomplete).",
	"titleSubtitle": "HTML/CSS/JavaScript + MongoDB/Mongoose, Express, Node, Mocha/Chai, Bootstrap, Handlebars, jQuery.",
	"textHref": "https://github.com/pdx-fanclub/fanclub-app"
},
{
  "key": 4,
	"headerTitle": "Food Truck Finder",
	"headerSubtitle": "October 2016",
  "headerAvatar": require("./avatars/301FinalAvatar.jpg"),
  "expandable": true,
  "media": require("./avatars/301Final.jpg"),
	"titleTitle": "Code Fellows 301 final team project using Yelp API, geolocation, and MVC design to create a mobile-first, responsive app that streamlines the food truck finding process (incomplete).",
	"titleSubtitle": "HTML/CSS/JavaScript + Express, Skeleton.css, Handlebars, jQuery.",
	"textHref": "https://github.com/foodtruck-finder/app"
},
{
  "key": 5,
	"headerTitle": "Portland Weekend Brunch Finder",
	"headerSubtitle": "August 2016",
  "headerAvatar": require("./avatars/201FinalAvatar.jpg"),
  "expandable": true,
  "media": require("./avatars/201Final.jpg"),
	"titleTitle": "Code Fellows 201 final team project using geolocation, Google Places and Maps APIs to create a brunch finding app.",
	"titleSubtitle": "HTML/CSS/JavaScript.",
	"textHref": "https://github.com/gnkatchmar/Code201Final"
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
        <div>
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
        </div>            
      )
    })

    return (
      <div className='card-list'>
        <h2>Projects</h2>
          { cardList }
      </div>
    );
  }
}