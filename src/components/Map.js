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
class Map extends React.Component {
  constructor(props){
      super(props);
      console.log(props);
      console.log(this.props.location.latitude)
  }
  componentDidMount() {
    console.log(google.maps);
    new google.maps.Map(this.ref.map, {
      zoom: 12,
      center: {
        lat: this.props.location.latitude,
        lng: this.props.location.longitude
      }
    });
  }
  render() {
    return (
      <div ref="map" className={styles.googleDiv}>
      </div>
    )
  }
  }

export default Map;
