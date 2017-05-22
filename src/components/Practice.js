import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import styles from './SchoolList.css';
class Practice extends React.Component {
  constructor(props){
    super(props);
    console.log(props);

}
create2List(props) {
  console.log(this.props);
  return this.props.school.map((school) => {
    return(
      <div key={school.title}
      className={styles.schoolName}>
      <Link to={school.id}>
      <img src={school.image} alt={school.title} className={styles.imageSchool} />
      <h1>{school.title}</h1>
      </Link>
      </div>
    )
  })
}
  render() {
  return (
    <div>
    <img src="./BigTen.png" alt="Big Ten" />
    <h1>Choose A University</h1>
      <div>
      {this.create2List()}
      </div>
    </div>
  )
}
}

export default Practice;
