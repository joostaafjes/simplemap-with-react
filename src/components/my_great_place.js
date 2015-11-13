'use strict';

var React = require('react');
import {greatPlaceStyle} from './my_great_place_styles.js';

var MyGreatPlace = React.createClass({
  getDefaultProps: function () {
    return {
      text: ''
    };
  },
  render() {
    return (
       <div style={greatPlaceStyle}>
          {this.props.text}
       </div>
    );
  }
});

module.exports = MyGreatPlace;
