import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardContent } from 'material-ui/Card';

const cardData = [{
  "key": 1,
	"headerTitle": "Portland Weekend Brunch Finder 2.0",
	"headerSubheader": "September 2017",
	"mediaTitle": 'Streamlined, mobile-responsive version of Code Fellows 201 Final Project. 200+ restaurants from all five "Portland Quadrants."',
	"mediaSubheader": "HTML/CSS/JavaScript.",
	"textHref": "https://github.com/gnkatchmar/brunch-finder"
},
{
  "key": 2,
	"headerTitle": "gkatchmar.com",
	"headerSubheader": "May 2017",
	"mediaTitle": "Personal website",
	"mediaSubheader": "HTML/CSS/JavaScript + React, Material-UI, React-Scroll-Up.",
	"textHref": "https://github.com/gnkatchmar/new-gkatchmar"
},
{
  "key": 3,
	"headerTitle": "The BigToDo",
	"headerSubheader": "January 2017",
	"mediaTitle": "Code Fellows 401 final team project using a full MEAN stack to create a streamlined, universal “to do” app.",
	"mediaSubheader": "HTML/CSS/JavaScript + MongoDB/Mongoose, Express, Angular 1.5, Node, Angular-Material, Angular-UI-Router, Webpack, Mocha/Chai/Karma/Jasmine.",
	"textHref": "https://github.com/401-Final"
},
{
  "key": 4,
	"headerTitle": "Spotify Fan Club",
	"headerSubheader": "November 2016",
	"mediaTitle": "Code Fellows 401 midterm team project focusing on the backend and using the Spotify API with OAuth to create a social app for Spotify users (incomplete).",
	"mediaSubheader": "HTML/CSS/JavaScript + MongoDB/Mongoose, Express, Node, Mocha/Chai, Bootstrap, Handlebars, jQuery.",
	"textHref": "https://github.com/pdx-fanclub/fanclub-app"
},
{
  "key": 5,
	"headerTitle": "Food Truck Finder",
	"headerSubheader": "October 2016",
	"mediaTitle": "Code Fellows 301 final team project using Yelp API, geolocation, and MVC design to create a mobile-first, responsive app that streamlines the food truck finding process (incomplete).",
	"mediaSubheader": "HTML/CSS/JavaScript + Express, Skeleton.css, Handlebars, jQuery.",
	"textHref": "https://github.com/foodtruck-finder/app"
},
{
  "key": 6,
	"headerTitle": "Portland Weekend Brunch Finder",
	"headerSubheader": "August 2016",
	"mediaTitle": "Code Fellows 201 final team project using geolocation, Google Places and Maps APIs to create a brunch finding app.",
	"mediaSubheader": "HTML/CSS/JavaScript.",
	"textHref": "https://github.com/gnkatchmar/Code201Final"
}
]

const styles = theme => ({

});

class Portfolio extends React.Component {

  render(){
    const classes = this.props.classes;
    let cardList = []
    Object.keys(cardData).forEach((cardIndex) => {
      let card = cardData[cardIndex]
      cardList.push (
        <div key={card.key} >
          <Card className={classes.card}>
            <CardHeader
              title={card.headerTitle}
              subheader={card.headerSubheader}
            />
            <CardContent>
                {card.mediaTitle}<br /><br />
                {card.mediaSubheader}<br /><br />
                <a href={card.textHref} target="_blank" rel="noopener noreferrer">Project Link</a>
            </CardContent>
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

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Portfolio);