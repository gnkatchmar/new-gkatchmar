import React, {Component} from "react";
import Button from "material-ui/Button";

const divStyle = {
  margin: "0px",
  padding: "0px",
  overflow: "hidden"
};

class Dining extends Component {
  render() {
    return (
      <div style={divStyle}>
        <Button raised 
            color="primary"
            href="https://gnkatchmar.github.io/brunch-finder/"
            target="_blank"
            rel="noopener noreferrer"
            children="Portland Weekend Brunch Finder App"
          />
        <hr></hr>
        <iframe src="https://docs.google.com/spreadsheets/d/1gluqG11olGteKHxJB-jBl9xP5VO9jWHD2GY1r95v0nI/pubhtml?widget=true&amp;headers=false" title="dining"></iframe>
      </div>
    )
  }
}

export default Dining;