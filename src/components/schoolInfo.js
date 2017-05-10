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
