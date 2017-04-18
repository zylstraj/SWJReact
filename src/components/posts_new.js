import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectSchool } from '../actions/index';
import styles from './posts_new.css';
const NavLink = require('react-router-dom').NavLink;

class PostsNew extends React.Component {
  createList(){
    return this.props.schools.map((school) => {
      return(
        <NavLink to={school.id} >
        <div key={school.title}
        className={styles.schoolName}
        onClick={() => this.props.selectSchool(school)}>
        
          <h1>{school.title}</h1>
          <img src={school.image} alt={school.title} />
        </div>
        </NavLink>
      )
    })
  }
  render() {
    return (
      <ul>
        {this.createList()}
      </ul>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectSchool }, dispatch)
}
function mapStateToProps(state) {
  return {
  schools: state.schools
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsNew);
