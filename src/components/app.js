import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Practice from './Practice';
import SchoolInfo from './schoolInfo';
import GoogleMaps from './Map';

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
      mainImage: "./michiganstadium.jpg",
      enrollment: "44,718",
      location: "Ann Arbor, MI",
      id: "michigan",
      latitude: 42.2775,
      longitude: -83.7432,
      locations: {
        places: [
        {
          name: "Good Time Charleys",
          description: "You will not find better food in the area",
          lat: 42.27457,
          lng: -83.734268
        },
        {
          place: "Big House",
          description: "This is where sports happen",
          lat: 42.2658,
          lng: -83.7487
        },
        {
          uniqueLocation: "Zingerman's Delicatessen",
          description: "This is an incredible place to check out",
          lat: 42.284588,
          lng: -83.74478
        }
      ]
    }
    },
    {
      title: "Ohio State",
      description: "Shit State",
      content: "Easily the worst school in the Big 10. Universally disliked. If you went here, I feel sorry for you and hope that you regret every single moment you spent here. Second class school in the shittiest state in the entire country. ",
      image: "./ohiostate.jpg",
      mainImage: "./ohiostadium.jpg",
      enrollment: "66,046",
      location: "Columbus, OH",
      id: "ohiostate",
      latitude: 39.999387,
      longitude: -83.02271,
      locations: {
        places: [
        {
          name: "McDonalds",
          description: "This is where all the locals eat. They get their nice, healthy breakfest, lunch, and dinner here. It's all they can afford.",
          lat: 40.002617,
          lng: -83.008051
        },
        {
          place: "Ohio Stadium",
          description: "This place is known as the horshoe, or to everyone else - - this is where a bunch of idiots gather a few times every fall",
          lat: 40.001647,
          lng: -83.019682
        },
        {
          uniqueLocation: "Ohio State Police Department",
          description: "This is an incredible place to check out on the weekends. You can meet all of your favorite Buckeye athletes and get some really good autographs",
          lat: 40.002956,
          lng: -83.032620
        }
      ]
    }
    },
    {
      title: "Michigan State",
      description: "Michigan State is bad",
      content: "Grand River sucks",
      image: "./michiganstate.gif",
      mainImage: "./msucampus.jpg",
      enrollment: "50,344",
      location: "East Lansing, MI",
      id: "michiganstate",
      latitude: 42.7288,
      longitude: -84.4849,
      locations: {
        places: [
        {
          name: "HopCat",
          description: "Local chain with great beer and food. Check it out!",
          lat: 42.735945,
          lng: -84.481880
        },
        {
          place: "Breslin Center",
          description: "Michigan State Basketball takes place here",
          lat: 42.728411,
          lng: -84.492520
        },
        {
          uniqueLocation: "Rick's American Cafe",
          description: "Grimey, dirty and a place to dance your heart out in this barrne",
          lat: 42.735809,
          lng: -84.483513
        }
      ]
    }
    },
    {
      title: "Northwestern",
      description: "Chi-town's finest",
      content: "Evanston is a great place to raise a family, attend school, and if you want to party well... Chicago has everything you would ever want",
      image: "./northwestern.gif",
      mainImage: "./bighouse.jpg",
      enrollment: "21,000",
      location: "Evanston, IL",
      id: "northwestern",
      latitude: 42.055984,
      longitude: -87.675171,
      locations: {
        places: [
        {
          name: "Food",
          description: "You will not find better food in the area",
          lat: 42.2700,
          lng: -83.7000
        },
        {
          place: "Stadium",
          description: "This is where sports happen",
          lat: 42.2851,
          lng: -83.7100
        },
        {
          uniqueLocation: "Bridge",
          description: "This is an incredible place to check out",
          lat: 42.2800,
          lng: -83.7050
        }
      ]
    }
    },
    {
      title: "Wisconsin",
      description: "University of Michigan has a unique history",
      content: "This is the paragraph about my story and the article ad",
      image: "./wisconsin.gif",
      mainImage: "./bighouse.jpg",
      enrollment: "43,338",
      location: "Madison, WI",
      id: "wisconsin",
      latitude: 43.0766,
      longitude: -89.4125,
      locations: {
        places: [
        {
          name: "Food",
          description: "You will not find better food in the area",
          lat: 42.2700,
          lng: -83.7000
        },
        {
          place: "Stadium",
          description: "This is where sports happen",
          lat: 42.2851,
          lng: -83.7100
        },
        {
          uniqueLocation: "Bridge",
          description: "This is an incredible place to check out",
          lat: 42.2800,
          lng: -83.7050
        }
      ]
    }
    },
    {
      title: "Penn State",
      description: "Shit State",
      content: "Easily the worst school in the Big 10. Universally disliked.",
      image: "./pennstate.jpg",
      mainImage: "./bighouse.jpg",
      enrollment: "99,133",
      location: "State College, PA",
      id: "pennstate",
      latitude: 40.7982,
      longitude: -77.8599,
      locations: {
        places: [
        {
          name: "Food",
          description: "You will not find better food in the area",
          lat: 42.2700,
          lng: -83.7000
        },
        {
          place: "Stadium",
          description: "This is where sports happen",
          lat: 42.2851,
          lng: -83.7100
        },
        {
          uniqueLocation: "Bridge",
          description: "This is an incredible place to check out",
          lat: 42.2800,
          lng: -83.7050
        }
      ]
    }
    },
    {
      title: "Illinois",
      description: "Michigan State is bad",
      content: "Grand River sucks",
      image: "./illinois.png",
      enrollment: "44,087",
      mainImage: "./bighouse.jpg",
      location: "Champaign, IL",
      id: "illinois",
      latitude: 40.1020,
      longitude: -88.2272,
      locations: {
        places: [
        {
          name: "Food",
          description: "You will not find better food in the area",
          lat: 42.2700,
          lng: -83.7000
        },
        {
          place: "Stadium",
          description: "This is where sports happen",
          lat: 42.2851,
          lng: -83.7100
        },
        {
          uniqueLocation: "Bridge",
          description: "This is an incredible place to check out",
          lat: 42.2800,
          lng: -83.7050
        }
      ]
    }
    },
    {
      title: "Minnesota",
      description: "Chi-town's finest",
      content: "Evanston is a great place to raise a family, attend school, and if you want to party well... Chicago has everything you would ever want",
      image: "./minnesota.jpg",
      enrollment: "51,147",
      mainImage: "./bighouse.jpg",
      location: "Minneapolis, MN",
      id: "minnesota",
      latitude: 44.9740,
      longitude: -93.2277,
      locations: {
        places: [
        {
          name: "Food",
          description: "You will not find better food in the area",
          lat: 42.2700,
          lng: -83.7000
        },
        {
          place: "Stadium",
          description: "This is where sports happen",
          lat: 42.2851,
          lng: -83.7100
        },
        {
          uniqueLocation: "Bridge",
          description: "This is an incredible place to check out",
          lat: 42.2800,
          lng: -83.7050
        }
      ]
    }
    },
    {
      title: "Nebraska",
      description: "University of Michigan has a unique history",
      content: "This is the paragraph about my story and the article ad",
      image: "./nebraska.png",
      enrollment: "25,897",
      mainImage: "./bighouse.jpg",
      location: "Lincoln, Nebraska",
      id: "nebraska",
      latitude: 40.8202,
      longitude: -96.7005,
      locations: {
        places: [
        {
          name: "Food",
          description: "You will not find better food in the area",
          lat: 42.2700,
          lng: -83.7000
        },
        {
          place: "Stadium",
          description: "This is where sports happen",
          lat: 42.2851,
          lng: -83.7100
        },
        {
          uniqueLocation: "Bridge",
          description: "This is an incredible place to check out",
          lat: 42.2800,
          lng: -83.7050
        }
      ]
    }
    },
    {
      title: "Iowa",
      description: "Shit State",
      content: "Easily the worst school in the Big 10. Universally disliked.",
      image: "./iowa.jpg",
      enrollment: "33,334",
      mainImage: "./bighouse.jpg",
      location: "Iowa City, IA",
      id: "iowa",
      latitude: 41.6627,
      longitude: -91.5549,
      locations: {
        places: [
        {
          name: "Food",
          description: "You will not find better food in the area",
          lat: 42.2700,
          lng: -83.7000
        },
        {
          place: "Stadium",
          description: "This is where sports happen",
          lat: 42.2851,
          lng: -83.7100
        },
        {
          uniqueLocation: "Bridge",
          description: "This is an incredible place to check out",
          lat: 42.2800,
          lng: -83.7050
        }
      ]
    }
    },
    {
      title: "Maryland",
      description: "Michigan State is bad",
      content: "Grand River sucks",
      image: "./maryland.jpg",
      mainImage: "./bighouse.jpg",
      enrollment: "38,140",
      location: "College Park, MD",
      id: "maryland",
      latitude: 38.9869,
      longitude: -76.9426,
      locations: {
        places: [
        {
          name: "Food",
          description: "You will not find better food in the area",
          lat: 42.2700,
          lng: -83.7000
        },
        {
          place: "Stadium",
          description: "This is where sports happen",
          lat: 42.2851,
          lng: -83.7100
        },
        {
          uniqueLocation: "Bridge",
          description: "This is an incredible place to check out",
          lat: 42.2800,
          lng: -83.7050
        }
      ]
    }
    },
    {
      title: "Rutgers",
      description: "Chi-town's finest",
      content: "Evanston is a great place to raise a family, attend school, and if you want to party well... Chicago has everything you would ever want",
      image: "./rutgers.gif",
      mainImage: "./bighouse.jpg",
      enrollment: "66,013",
      location: "New Brunswick, NJ",
      id: "rutgers",
      latitude: 40.4982,
      longitude: -74.4468,
      locations: {
        places: [
        {
          name: "Food",
          description: "You will not find better food in the area",
          lat: 42.2700,
          lng: -83.7000
        },
        {
          place: "Stadium",
          description: "This is where sports happen",
          lat: 42.2851,
          lng: -83.7100
        },
        {
          uniqueLocation: "Bridge",
          description: "This is an incredible place to check out",
          lat: 42.2800,
          lng: -83.7050
        }
      ]
    }
    },
    {
      title: "Purdue",
      description: "Michigan State is bad",
      content: "Grand River sucks",
      image: "./purdue.jpg",
      mainImage: "./bighouse.jpg",
      enrollment: "40,451",
      location: "West Lafetette, IN",
      id: "purdue",
      latitude: 40.4237,
      longitude: -86.9212,
      locations: {
        places: [
        {
          name: "Food",
          description: "You will not find better food in the area",
          lat: 42.2700,
          lng: -83.7000
        },
        {
          place: "Stadium",
          description: "This is where sports happen",
          lat: 42.2851,
          lng: -83.7100
        },
        {
          uniqueLocation: "Bridge",
          description: "This is an incredible place to check out",
          lat: 42.2800,
          lng: -83.7050
        }
      ]
    }
    },
    {
      title: "Indiana",
      description: "Chi-town's finest",
      content: "Evanston is a great place to raise a family, attend school, and if you want to party well... Chicago has everything you would ever want",
      image: "./indiana.png",
      mainImage: "./bighouse.jpg",
      enrollment: "48,514",
      location: "Bloomington, IN",
      id: "indiana",
      latitude: 39.1766,
      longitude: -86.5130,
      locations: {
        places: [
        {
          name: "Food",
          description: "You will not find better food in the area",
          lat: 42.2700,
          lng: -83.7000
        },
        {
          place: "Stadium",
          description: "This is where sports happen",
          lat: 42.2851,
          lng: -83.7100
        },
        {
          uniqueLocation: "Bridge",
          description: "This is an incredible place to check out",
          lat: 42.2800,
          lng: -83.7050
        }
      ]
    }
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
export default App;
