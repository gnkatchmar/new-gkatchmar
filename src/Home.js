import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({

});

const buttonData = [
  {"key": 1, "hrefs":"https://www.linkedin.com/in/gregory-katchmar-3a48275a", "labels": "LinkedIn"},
  {"key": 2, "hrefs":"https://github.com/gnkatchmar", "labels": "Github"},
  {"key": 3, "hrefs":"https://drive.google.com/open?id=0B-QmArVwrgLGSHJnbFN6VXZGb0k", "labels": "Resume (PDF)"},
];

const buttons = buttonData.map((buttonData) =>
  <Button 
    raised key={buttonData.key}
    href={buttonData.hrefs}
    target="_blank"
    color="primary"
    style={styles.button}
    children={buttonData.labels}
  />
);

class Home extends Component {
  render() {
    return (
      <div className="buttons">
          <h1>Gregory N. Katchmar</h1>
              <h2>JavaScript Developer</h2>
              <hr></hr>
              <h4>More information at:</h4>
        {buttons}
        <hr></hr>
        <h4>Contact me at:</h4>
        <a href="mailto:gregkatchmar@gmail.com">gregkatchmar@gmail.com</a>
        <hr></hr>
        <p>Last updated October 10, 2017</p>
        <hr></hr>
        <p>A React/material-ui site</p>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);