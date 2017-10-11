import React, {Component} from "react";

class Cocktail extends Component {
  render() {
    return (
      <div>
        <img src={require("./images/1276_Cocktails-4.png")} alt=""/>
        <img src={require("./images/map-famous-cocktail.jpg")} alt=""/>
        <img src={require("./images/filmlit.jpg")} alt=""/>    
      </div>
    );
  }
}

export default Cocktail; 