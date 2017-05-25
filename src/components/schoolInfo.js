import React from 'react';
import GoogleMaps from './Map';
import styles from './SchoolInfo.css';
import {Link} from 'react-router-dom';

class SchoolInfo extends React.Component {

constructor(props){
    super(props);
    console.log(props);
    if(this.props.location.pathname == "/michigan") {
      this.state = this.props.specific[0];
      console.log(this.props.specific[0])
    }
    if(this.props.location.pathname == "/ohiostate") {
      this.state = this.props.specific[1];
      console.log(this.props.specific[1]);
    }
    if(this.props.location.pathname == "/michiganstate") {
      this.state = this.props.specific[2];
      console.log(this.props.specific[2]);
    }
    if(this.props.location.pathname == "/northwestern") {
      this.state = this.props.specific[3];
      console.log(this.props.specific[3]);
    }
    if(this.props.location.pathname == "/wisconsin") {
      this.state = this.props.specific[4];
      console.log(this.props.specific[4]);
    }
    if(this.props.location.pathname == "/pennstate") {
      this.state = this.props.specific[5];
      console.log(this.props.specific[5]);
    }
    if(this.props.location.pathname == "/illinois") {
      this.state = this.props.specific[6];
      console.log(this.props.specific[6]);
    }
    if(this.props.location.pathname == "/minnesota") {
      this.state = this.props.specific[7];
      console.log(this.props.specific[7]);
    }
    if(this.props.location.pathname == "/nebraska") {
      this.state = this.props.specific[8];
      console.log(this.props.specific[8]);
    }
    if(this.props.location.pathname == "/iowa") {
      this.state = this.props.specific[9];
      console.log(this.props.specific[9]);
    }
    if(this.props.location.pathname == "/maryland") {
      this.state = this.props.specific[10];
      console.log(this.props.specific[10]);
    }
    if(this.props.location.pathname == "/rutgers") {
      this.state = this.props.specific[11];
      console.log(this.props.specific[11]);
    }
    if(this.props.location.pathname == "/purdue") {
      this.state = this.props.specific[12];
      console.log(this.props.specific[12]);
    }
    if(this.props.location.pathname == "/indiana") {
      this.state = this.props.specific[13];
      console.log(this.props.specific[13]);
    }
  //   const goodTimes = this.props.specific;
  //   const variableTimes = this.props.location.pathname;
  //   console.log(goodTimes);
  //   goodTimes.forEach(function(element, index, array) {
  //     console.log("/" + element.id);
  //     const fun = element.id;
  //     const yes = array[index];
  //     console.log(variableTimes);
  //     console.log(index);
  //     console.log(array[index]);
  //
  //     if("/" + fun == variableTimes) {
  //       this.state = yes;
  //     }
  //     else {
  //       console.log("here we go")
  //     }
  // })
      // if(this.props.location.pathname == element.id) {
      //   console.log(element);
      //   console.log(index);
      //   this.state = this.props.specific[index];

    // if(this.props.location.pathname == this.props.specific.id) {
    //   this.state = this.props.specific;
    // }
  }

render() {
  return (
    <div data-school={this.state.id} className={styles.div_container_schoolInfo}>
      <div className={styles.div_main_header}>
        <img src={this.state.image} alt={this.state.id} className={styles.schoolImage_header} />
        <h1><Link to="/">Home</Link></h1>
        <img src={this.state.mainImage} alt="Michigan Stadium" className={styles.div_header_image} />
      </div>
      <div className={styles.googleDiv}>
        <h1>Things To Do & Where To Go</h1>
        <GoogleMaps lat={this.state.latitude} lng={this.state.longitude} content={this.state.locations.places} icon={this.state.image}/>
      </div>
      <div className={styles.div_main_content}>
        <div className={styles.div_content_One}>
          <h2>{this.state.description}</h2>
          <p>{this.state.content}</p>
        </div>
        <div className={styles.div_content_Two}>
          <h1>School Information</h1>
          <p>Location: {this.state.location}</p>
          <p>Enrollment: {this.state.enrollment}</p>
        </div>
        <div className={styles.googleDiv}>
          <h1>Things To Do & Where To Go</h1>
          <GoogleMaps lat={this.state.latitude} lng={this.state.longitude} content={this.state.locations.places} icon={this.state.image}/>
        </div>
      </div>
      <Link to="/">
      <footer>
        <img src={this.state.image} alt={this.state.id} className={styles.imageSchool} />
      </footer>
      </Link>
    </div>
  )
  }
  }

  export default SchoolInfo;
