import React from 'react';

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
    <div>
      <h1>{this.props.specific.title}</h1>
      <p>Fun times here</p>
      <p>{this.state.title}</p>
      <div>
      <p>Best School</p>
      </div>
    </div>
  )
  }
  }

  export default SchoolInfo;
