import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';

class Practice extends React.Component {
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
