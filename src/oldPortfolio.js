import React, {Component} from "react";
import GKatchmar from "./Projects/GKatchmar";
import BigToDo from "./Projects/BigToDo";
import FanClub from "./Projects/FanClub";
import FoodTruck from "./Projects/FoodTruck";
import Brunch from "./Projects/Brunch";

class oldPortfolio extends Component {
  render() {
    return (
      <div>
        <h2>Projects</h2>
        <GKatchmar />
        <BigToDo />
        <FanClub />
        <FoodTruck />
        <Brunch />
      </div>
    );
  }
}

export default Portfolio;