import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import styles from './SchoolList.css';
import PropTypes from 'prop-types';

class SchoolList extends React.Component {
  constructor(props){
    super(props);
    console.log(props);

}
create2List(props) {
  console.log(this.props);
  return this.props.school.map((school) => {
    return(
      <div key={school.title}
      className={styles.schoolName}
      data-title={school.id}>
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
    <div className={styles.listHeader}>
      <img src="./BigTen.png" alt="Big Ten" className={styles.imgHeader}/>
      <div className={styles.listHeader}>
        {this.create2List()}
      </div>
    </div>
  )
}
}

export default SchoolList;
