import React from "react";
import RaisedButton from "material-ui/RaisedButton";

const styles = {
  button: {
    margin: 12,
  },
};

const Home = () => (
  <div className="buttons">
      <h1>Gregory N. Katchmar</h1>
          <h2>JavaScript Developer</h2>
           <hr></hr>
          <h4>More information at:</h4>
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
    <RaisedButton
      href="https://drive.google.com/open?id=0B-QmArVwrgLGSHJnbFN6VXZGb0k"
      target="_blank"
      label="Resume (PDF)"
      primary={true}
      style={styles.button}
    />
    <hr></hr>
    <h4>Contact me at:</h4>
    <a href="mailto:gregkatchmar@gmail.com">gregkatchmar@gmail.com</a>
    <hr></hr>
    <p>Last updated August 16, 2017</p>
    <hr></hr>
    <p>A React/material-ui site</p>
  </div>
);

export default Home;