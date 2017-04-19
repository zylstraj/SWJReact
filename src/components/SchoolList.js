import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectSchool } from '../actions/index';
import styles from './posts_new.css';
const NavLink = require('react-router-dom').NavLink;
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
import SelectSchool from './selectSchool';

class SchoolList extends React.Component {
  createList(){
    return this.props.schools.map((school) => {
      return(
        <div key={school.title}
        className={styles.schoolName}
        onClick={() => this.props.selectSchool(school)}>

          <h1>{school.title}</h1>
          <img src={school.image} alt={school.title} />
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SchoolList);
