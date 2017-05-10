import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Practice from './Practice';
import SchoolInfo from './schoolInfo';

class Header extends React.Component {
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
render() {
  const mySchools = (props) => {
    return (
      <Practice school = {this.state.school}
      {...props}
      />
    );
  }
  const specificSchool = (props) => {
    return (
      <SchoolInfo specific= {this.state.school}
      {...props}
      />
    );
  }
  // console.log(this.state.school)
    const extraProps = { school: [this.state.school] }
    // console.log(extraProps);
  return(
      <div>
      <img src="./BigTen.png" alt="Big Ten" />
      <h1>Schools</h1>
      <Switch>
      <Route exact path='/' render={mySchools} />
)}/>
      <Route path={this.state.school.id} render={specificSchool} />
      // <Route path='/OhioState' component={SchoolInfo} />
      // <Route path='/MichiganState' component={SchoolInfo} />
      <Route path='/fun' component={Practice} />
      </Switch>
      </div>
  )
}
}
export default Header;
