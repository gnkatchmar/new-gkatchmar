import React from 'react';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

export default class FoodTruck extends React.Component {

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
          title="Food Truck Finder"
          subtitle="October 2016"
          avatar={require('./images/301FinalAvatar.jpg')}  
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardMedia
          expandable={true}
        >
           <img src={require('./images/301Final.jpg')} alt=''/>
        </CardMedia>
        <CardTitle title="Code Fellows 301 final project using Yelp API, geolocation, and MVC design to create a mobile-first, responsive app that streamlines the food truck finding process." subtitle="Software used beyond HTML/CSS/JavaScript: Express, Skeleton.css, Handlebars, jQuery." expandable={true} />
        <CardText expandable={true}>
          <a href="https://github.com/foodtruck-finder/app" target="_blank">Project Link</a>
        </CardText>
      </Card>
    );
  }
}