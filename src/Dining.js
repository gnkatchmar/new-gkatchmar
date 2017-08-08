import React from "react";
import RaisedButton from "material-ui/RaisedButton";

const divStyle = {
  margin: "0px",
  padding: "0px",
  overflow: "hidden"
};

function Dining() {
    return <div style={divStyle}>
    <hr></hr>
    <RaisedButton
        href="https://gnkatchmar.github.io/brunch-finder/"
        target="_blank"
        label="Portland Weekend Brunch Finder App"
        primary={true}
      />
    <hr></hr>
    <iframe src="https://docs.google.com/spreadsheets/d/1gluqG11olGteKHxJB-jBl9xP5VO9jWHD2GY1r95v0nI/pubhtml?widget=true&amp;headers=false"></iframe>
  </div>;
}

export default Dining;