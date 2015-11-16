'use strict';

var React = require('react');

import GoogleMap from 'google-map-react';
import MyGreatPlace from './my_great_place.js';

var SimpleMapPage = React.createClass({
  getDefaultProps: function () {
    return {
      center: {lat: 52.128043, lng: 6.08},
      zoom: 10,
      greatPlaceCoords: {lat: 52.028611, lng: 6.021111}
    };
  },
  render() {
    return (
       <GoogleMap
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}>
        <MyGreatPlace lat={52.252057} lng={6.160387} text={'Brink, Deventer'} />
        <MyGreatPlace {...this.props.greatPlaceCoords} text={'Posbank'} />
      </GoogleMap>
    );
  }
});

module.exports = SimpleMapPage;
