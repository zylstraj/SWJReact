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
  constructor(props){
    super(props);
    this.state = {
      school: [
        {
        title: "Michigan",
        description: "University of Michigan has a unique history",
        content: "This is the paragraph about my story and the article ad",
        image: "./michigan.jpg",
        enrollment: "44,718",
        location: "Ann Arbor, MI",
        id: "michigan"
      },
      {
        title: "Ohio State",
        description: "Shit State",
        content: "Easily the worst school in the Big 10. Universally disliked.",
        image: "./ohiostate.jpg",
        enrollment: "66,046",
        location: "Columbus, OH",
        id: "ohiostate"
      },
      {
        title: "Michigan State",
        description: "Michigan State is bad",
        content: "Grand River sucks",
        image: "./michiganstate.gif",
        enrollment: "50,344",
        location: "East Lansing, MI",
        id: "michiganstate"
      }
    ]
  }
}
create2List() {
  return this.state.school.map((school) => {
    return(
      <div>

      <h1>{school.title}</h1>
      <img src={school.image} alt={school.title} />
      </div>
    )
  })
}

  createList(){
    return this.props.schools.map((school) => {
      return(
        <NavLink to={school.title}>
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
      <div>
      <div>
        <h1>{this.state.school[0].title}</h1>
        <img src={this.state.school[0].image} alt={this.state.school[0].title} />
      </div>
      <div>
      {this.create2List()}
      </div>
      <ul>

        {this.createList()}
      </ul>
      </div>
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
