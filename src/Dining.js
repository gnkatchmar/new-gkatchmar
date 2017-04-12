import React from 'react';
import './Dining.css';

const divStyle = {
  margin: '0px',
  padding: '0px',
  overflow: 'hidden'
};

function Dining() {
  return <div style={divStyle}>
   <iframe src="https://docs.google.com/spreadsheets/d/1gluqG11olGteKHxJB-jBl9xP5VO9jWHD2GY1r95v0nI/pubhtml?widget=true&amp;headers=false"></iframe>
  </div>;
}

export default Dining;