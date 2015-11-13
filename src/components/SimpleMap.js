'use strict';

var React = require('react');

import GoogleMap from 'google-map-react';
import MyGreatPlace from './my_great_place.js';

var SimpleMapPage = React.createClass({
  getDefaultProps: function () {
    return {
      center: {lat: 59.938043, lng: 30.337157},
      zoom: 4,
      greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
    };
  },
  render() {
    return (
       <GoogleMap
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}>
        <MyGreatPlace lat={59.955413} lng={30.337844} text={'A'} /* Kreyser Avrora */ />
        <MyGreatPlace {...this.props.greatPlaceCoords} text={'B'} /* road circle */ />
      </GoogleMap>
    );
  }
});

module.exports = SimpleMapPage;
