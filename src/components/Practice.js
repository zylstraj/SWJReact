import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';

class Practice extends React.Component {
  constructor(props){
    super(props);
    console.log(props);

}
create2List(props) {
  console.log(this.props);
  return this.props.school.map((school) => {
    return(
      <div>
      <Link to={school.title}>
      <h1>{school.title}</h1>
      <img src={school.image} alt={school.title} />
      </Link>
      </div>
    )
  })
}
  render() {
  return (
    <div>
      <h1>Go Blue</h1>
      <p>Fun times here</p>
      <div>
      {this.create2List()}
      </div>
    </div>
  )
}
}

export default Practice;
