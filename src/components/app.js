import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Practice from './Practice';
import SchoolInfo from './schoolInfo';

class App extends React.Component {
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
        title: "OhioState",
        description: "Shit State",
        content: "Easily the worst school in the Big 10. Universally disliked.",
        image: "./ohiostate.jpg",
        enrollment: "66,046",
        location: "Columbus, OH",
        id: "ohiostate"
      },
      {
        title: "MichiganState",
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
    return(
        <div>
        <img src="./BigTen.png" alt="Big Ten" />
        <h1>Information</h1>
        <Switch>
        <Route exact path='/' component={Practice} />
        <Route path='/Michigan' component={SchoolInfo} />
        <Route path='/OhioState' component={SchoolInfo} />
        <Route path='/MichiganState' component={SchoolInfo} />
        <Route path='/fun' component={Practice} />
        </Switch>
        </div>
    )
  }
}

export default App;
