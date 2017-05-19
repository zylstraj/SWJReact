import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Practice from './Practice';
import SchoolInfo from './schoolInfo';
import GoogleMaps from './Map';
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
      id: "michigan",
      latitude: 42.2775,
      longitude: -83.7432
    },
    {
      title: "Ohio State",
      description: "Shit State",
      content: "Easily the worst school in the Big 10. Universally disliked. If you went here, I feel sorry for you and hope that you regret every single moment you spent here. Second class school in the shittiest state in the entire country. ",
      image: "./ohiostate.jpg",
      enrollment: "66,046",
      location: "Columbus, OH",
      id: "ohiostate",
      latitude: 39.999387,
      longitude: -83.02271
    },
    {
      title: "Michigan State",
      description: "Michigan State is bad",
      content: "Grand River sucks",
      image: "./michiganstate.gif",
      enrollment: "50,344",
      location: "East Lansing, MI",
      id: "michiganstate",
      latitude: 42.7018,
      longitude: -84.4822
    },
    {
      title: "Northwestern",
      description: "Chi-town's finest",
      content: "Evanston is a great place to raise a family, attend school, and if you want to party well... Chicago has everything you would ever want",
      image: "./northwestern.gif",
      enrollment: "21,000",
      location: "Evanston, IL",
      id: "northwestern",
      latitude: 42.055984,
      longitude: -87.675171
    },
    {
      title: "Wisconsin",
      description: "University of Michigan has a unique history",
      content: "This is the paragraph about my story and the article ad",
      image: "./wisconsin.gif",
      enrollment: "43,338",
      location: "Madison, WI",
      id: "wisconsin",
      latitude: 43.0766,
      longitude: -89.4125
    },
    {
      title: "Penn State",
      description: "Shit State",
      content: "Easily the worst school in the Big 10. Universally disliked.",
      image: "./pennstate.jpg",
      enrollment: "99,133",
      location: "State College, PA",
      id: "pennstate",
      latitude: 40.7982,
      longitude: -77.8599
    },
    {
      title: "Illinois",
      description: "Michigan State is bad",
      content: "Grand River sucks",
      image: "./illinois.png",
      enrollment: "44,087",
      location: "Champaign, IL",
      id: "illinois",
      latitude: 40.1020,
      longitude: -88.2272
    },
    {
      title: "Minnesota",
      description: "Chi-town's finest",
      content: "Evanston is a great place to raise a family, attend school, and if you want to party well... Chicago has everything you would ever want",
      image: "./minnesota.jpg",
      enrollment: "51,147",
      location: "Minneapolis, MN",
      id: "minnesota",
      latitude: 44.9740,
      longitude: -93.2277
    },
    {
      title: "Nebraska",
      description: "University of Michigan has a unique history",
      content: "This is the paragraph about my story and the article ad",
      image: "./nebraska.png",
      enrollment: "25,897",
      location: "Lincoln, Nebraska",
      id: "nebraska",
      latitude: 40.8202,
      longitude: -96.7005
    },
    {
      title: "Iowa",
      description: "Shit State",
      content: "Easily the worst school in the Big 10. Universally disliked.",
      image: "./iowa.jpg",
      enrollment: "33,334",
      location: "Iowa City, IA",
      id: "iowa",
      latitude: 41.6627,
      longitude: -91.5549
    },
    {
      title: "Maryland",
      description: "Michigan State is bad",
      content: "Grand River sucks",
      image: "./maryland.jpg",
      enrollment: "38,140",
      location: "College Park, MD",
      id: "maryland",
      latitude: 38.9869,
      longitude: -76.9426
    },
    {
      title: "Rutgers",
      description: "Chi-town's finest",
      content: "Evanston is a great place to raise a family, attend school, and if you want to party well... Chicago has everything you would ever want",
      image: "./rutgers.gif",
      enrollment: "66,013",
      location: "New Brunswick, NJ",
      id: "rutgers",
      latitude: 40.4982,
      longitude: -74.4468
    },
    {
      title: "Purdue",
      description: "Michigan State is bad",
      content: "Grand River sucks",
      image: "./purdue.jpg",
      enrollment: "40,451",
      location: "West Lafetette, IN",
      id: "purdue",
      latitude: 40.4237,
      longitude: -86.9212
    },
    {
      title: "Indiana",
      description: "Chi-town's finest",
      content: "Evanston is a great place to raise a family, attend school, and if you want to party well... Chicago has everything you would ever want",
      image: "./indiana.png",
      enrollment: "48,514",
      location: "Bloomington, IN",
      id: "indiana",
      latitude: 39.1766,
      longitude: -86.5130
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
