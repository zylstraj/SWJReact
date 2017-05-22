import React from 'react';
import styles from './SchoolList.css';
// import { withGoogleMap, Loader, GoogleMap, Marker } from 'react-google-maps';

// console.log(withGoogleMap)
// const SimpleMapExampleGoogleMap = withGoogleMap(props => (
// <GoogleMap
//   defaultZoom={13}
//   defaultCenter={{ lat: 42.2808, lng: -83.7430 }}
// />
// ));
const ARC_DE_TRIOMPHE_POSITION = {
  lat: 48.873947,
  lng: 2.295038
};
class GoogleMaps extends React.Component {
  constructor(props){
      super(props);
      console.log(props);
      // this.panToArcDeTriomphe = this.panToArcDeTriomphe.bind(this);
      // console.log(this.props.location.latitude)
  }
  shouldComponentUpdate() {
    return false;
  }
  // panToArcDeTriomphe() {
  //   console.log(this)
  //   this.map.panTo(ARC_DE_TRIOMPHE_POSITION);
  // }
  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps.lat)
  //   console.log(nextProps.lng)
  //   this.map.panTo({ lat: nextProps.lat, lng: nextProps.lng});
  // }
  componentDidMount() {
    console.log(google.maps);
    console.log(this.props.content)
    const differentPlaces = this.props.content;
    console.log(differentPlaces)

    var map = new google.maps.Map(this.refs.map, {
      zoom: 15,
      center: {
        lat: this.props.lat,
        lng: this.props.lng
      }
    });
    // var marker = differentPlaces.map(function(place, index) {
    //     new google.maps.Marker({
    //       postion: {lat: place.lat, lng: place.lng},
    //       map: map
    //     })
    //   })
      // var infowindow = array.forEach(function(place, index) {
      //   new google.maps.InfoWindow({
      //     content: place.description
      //   });
      //   marker.addListener('click', function() {
      //     infowindow.open(map, marker)
      //   })
      // })

    // var marker = differentPlaces.forEach(function(place, index) {
    //   new google.maps.Marker({
    //     postion: {lat: place.lat, lng: place.lng},
    //     map: map
    //   })
    // })
    // var infowindow = differentPlaces.forEach(function(place, index) {
    //   new google.maps.InfoWindow({
    //     content: place.description
    //   });
    //   marker.addListener('click', function() {
    //     infowindow.open(map, marker)
    //   })
    // })
    var marker = new google.maps.Marker({
      position: {lat: this.props.content[1].lat, lng: this.props.content[1].lng},
      map: map
  });
    var infowindow = new google.maps.InfoWindow({
         content: this.props.content[1].description
       });
       marker.addListener('click', function() {
         infowindow.open(map, marker)
       })
// INFO WINDOW ONLY CAN BE ONCE AND NEEDS TO RELY ON THIS - FIGURE THIS OUT. LOTS OF PRACTICE CODE HAPPENING HERE
    //    var markerTwo = new google.maps.Marker({
    //      position: {lat: this.props.content[0].lat, lng: this.props.content[0].lng},
    //      map: map
    //  });
    //    var infowindow = new google.maps.InfoWindow({
    //         content: this.props.content[0].description
    //       });
    //       marker.addListener('click', function() {
    //         infowindow.open(map, marker)
    //       })
  }
  render() {
    return (
      <div className={styles.mapGames} ref="map">
      </div>
    );
  }
  }

export default GoogleMaps;
