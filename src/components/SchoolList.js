import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectSchool } from '../actions/index';
import styles from './SchoolList.css';
const NavLink = require('react-router-dom').NavLink;
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
import SelectSchool from './selectSchool';

class SchoolList extends React.Component {
  constructor() {
    super()

    this.state = {
          title: "Michigan",
          description: "University of Michigan has a unique history",
          content: "This is the paragraph about my story and the article ad",
          image: "./michigan.jpg",
          enrollment: "44,718",
          location: "Ann Arbor, MI",
          id: "michigan"
    }
  }
  createList(){
    return this.props.schools.map((school) => {
      return(
        <div key={school.title}
        className={styles.schoolName}
        onClick={() => this.props.selectSchool(school)}>

          <img src={school.image} alt={school.title} />
          <h1>{school.title}</h1>
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
