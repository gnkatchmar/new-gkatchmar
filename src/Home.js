import React from "react";
import RaisedButton from "material-ui/RaisedButton";

const styles = {
  button: {
    margin: 12,
  },
};

const Home = () => (
  <div className="buttons">
    <RaisedButton
      href="https://www.linkedin.com/in/gregory-katchmar-3a48275a"
      target="_blank"
      label="LinkedIn"
      primary={true}
      style={styles.button}
    />
    <RaisedButton
      href="https://github.com/gnkatchmar"
      target="_blank"
      label="Github"
      primary={true}
      style={styles.button}
    />
  </div>
);

export default Home;