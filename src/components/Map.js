import React from 'react';
import styles from './SchoolInfo.css';
// import { withGoogleMap, Loader, GoogleMap, Marker } from 'react-google-maps';

class GoogleMaps extends React.Component {
  constructor(props){
      super(props);
      console.log(props);
  }
  shouldComponentUpdate() {
    return false;
  }
  componentDidMount() {
    var map = new google.maps.Map(this.refs.map, {
      zoom: 14,
      center: {
        lat: this.props.lat,
        lng: this.props.lng
      },
      scrollwheel: false
    });

// Google Maps API Set-up and use
var icon = {
    url: this.props.icon, // url
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
};
var iconSchool = this.props.icon;
var bounds = new google.maps.LatLngBounds();
var markers = this.props.content;

var infoWindow = new google.maps.InfoWindow(), marker, i;
//     console.log(differentPlaces.lat)
// Loop for Markers using Google Maps
for(var i=0; i < markers.length; i++) {
    var position = new google.maps.LatLng(markers[i].lat, markers[i].lng);
  bounds.extend(position)
   marker = new google.maps.Marker({
      position: position,
      map: map,
      title: markers[i].info,
      icon: icon
    });
    // Allow each marker to have an info window
   google.maps.event.addListener(marker, 'click', (function(marker, i) {
       return function() {
           infoWindow.setContent('<div><h2>' + markers[i].name + '</h2><p class="p_icon">' + markers[i].description + '</p></div>');
           infoWindow.open(map, marker);
       }
   })(marker, i));

   // Automatically center the map fitting all markers on the screen
   map.fitBounds(bounds);
}
  }
  render() {
    return (
      <div className={styles.mapGames} ref="map">
      </div>
    );
  }
  }

export default GoogleMaps;
