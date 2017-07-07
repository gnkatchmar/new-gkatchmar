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
          <h3>HTML, CSS, JavaScript, Node.js, React.js, Angular.js 1.5, MongoDB, Express.js, SQL, Webpack, RESTful web services, testing&nbsp;(Mocha,&nbsp;Chai, Karma, Protractor,&nbsp;Jest)</h3>
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
    <hr></hr>
    <h4>Contact me at:</h4>
    <a href="mailto:gregkatchmar@gmail.com">gregkatchmar@gmail.com</a>
    <hr></hr>
    <p>Last updated July 7, 2017</p>
  </div>
);

export default Home;