import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import SchoolList from './Practice';
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
          name: "Big House",
          description: "This is where sports happen",
          lat: 42.2658,
          lng: -83.7487
        },
        {
          name: "Zingerman's Delicatessen",
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
          name: "Ohio Stadium",
          description: "This place is known as the horshoe, or to everyone else - - this is where a bunch of idiots gather a few times every fall",
          lat: 40.001647,
          lng: -83.019682
        },
        {
          name: "Ohio State Police Department",
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
          name: "Breslin Center",
          description: "Michigan State Basketball takes place here",
          lat: 42.728411,
          lng: -84.492520
        },
        {
          name: "Rick's American Cafe",
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
          name: "Velvet Taco Chicago",
          description: "The best tacos in Chicago. There are people who will debate this, but these are some pretty dank tacos.",
          lat: 41.902213,
          lng: -87.628543
        },
        {
          name: "Wrigley Field",
          description: "Honestly, skip Northwestern spots. You are in Chicago. If it's baseball time, get on down to Wrigley Field and spend a day drinking.",
          lat: 41.948422,
          lng: -87.655376
        },
        {
          name: "Giordanos",
          description: "Plenty of Deep Dish Pizzas in Chicago, but this is the best. Plenty of locations, but if you don't eat deep dish pizza while you are here, you need to leave Chicago immediately.",
          lat: 41.939996,
          lng: -87.655684
        }
      ]
    }
    },
    {
      title: "Wisconsin",
      description: "University of Michigan has a unique history",
      content: "This is the paragraph about my story and the article ad",
      image: "./wisconsin.gif",
      mainImage: "./wisconsinstadium.jpg",
      enrollment: "43,338",
      location: "Madison, WI",
      id: "wisconsin",
      latitude: 43.0766,
      longitude: -89.4125,
      locations: {
        places: [
        {
          name: "Tipsy Cow",
          description: "Yum, Yum, Yum. You will not be disappointed.",
          lat: 43.074783,
          lng: -89.381521
        },
        {
          name: "Camp Randall Stadium",
          description: "This is the place to watch a game. Wisconsin loves their football already with the Packers and get the college equivalent of that devotion here!",
          lat: 43.069846,
          lng: -89.412651
        },
        {
          name: "Majestic Theatre",
          description: "This is an incredible place to check out. Go see a show. Madison is a magical place and this si the place to be.",
          lat: 43.074454,
          lng: -89.380948
        }
      ]
    }
    },
    {
      title: "Penn State",
      description: "Shit State",
      content: "Easily the worst school in the Big 10. Universally disliked.",
      image: "./pennstate.jpg",
      mainImage: "./pennstatestadium.jpg",
      enrollment: "99,133",
      location: "State College, PA",
      id: "pennstate",
      latitude: 40.7982,
      longitude: -77.8599,
      locations: {
        places: [
        {
          name: "Waffle House",
          description: "Get Your Breakfest Here. Waffles on waffles on waffles.",
          lat: 40.79775,
          lng: -77.856962
        },
        {
          name: "Beaver Stadium",
          description: "Penn State Football. Enough said. If you are seeing a game here, hit a night game and be a part of a crazy white out.",
          lat: 40.812228,
          lng: -77.856092
        },
        {
          name: "Penn State Golf Course",
          description: "Not a ton to do at Penn State, so pick up golfing and you'll have at least a way to help pass the time while you are here!",
          lat: 40.789880,
          lng: -77.876661
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
          name: "Seven Saints",
          description: "Stylish, wood-trimmed American tavern for creative burgers, craft beer, cocktails and wine.",
          lat: 40.116523,
          lng: -88.241974
        },
        {
          name: "State Farm Center",
          description: "Illinois Basketball. The Fighting Illini never stop.",
          lat: 40.096247,
          lng: -88.235976
        },
        {
          name: "Sakanaya Restaurant",
          description: "Sushi, Ramen and Japanese entrees. Can't miss for Champaign.",
          lat: 40.110148,
          lng: -88.233069
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
          name: "Afro Deli",
          description: "So good. So good. So good. Must check out.",
          lat: 44.973528,
          lng: -93.227512
        },
        {
          name: "Mariucci Arena",
          description: "Minnesota. This is the closest thing you'll get to experience what hockey in ",
          lat: 44.978112,
          lng: -93.227994
        },
        {
          name: "D'Amico & Sons",
          description: "Deli chain selling Italian sandwiches plus pasta, grilled fare and wines. 5 stars.",
          lat: 44.975000,
          lng: -93.228306
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
          name: "Blue Sushi Sake Grill",
          description: "You might think Sushi is a bad idea in the Midwest, but then you haven't been to Blue Sushi. Be prepared to have your mind blown.",
          lat: 40.817136,
          lng: -96.709772
        },
        {
          name: "Memorial Stadium",
          description: "Nebraska. Known for football and corn. You'll inevitably see corn in Nebraska so you might as well catch yourself a game as well.",
          lat: 40.820603,
          lng: -96.704118
        },
        {
          name: "Single Barrel",
          description: "Get comfortable. This is Lincoln's steak bar. Live music with whiskey and craft beer while you experience what meat means.",
          lat: 40.814456,
          lng: -96.706585
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
          name: "Nodo Downtown",
          description: "Creative Sandwiches. Must try!",
          lat: 41.660971,
          lng: -91.533358
        },
        {
          name: "Kinnick Stadium",
          description: "If you are in Iowa, get yourself to a game! It'll be a blast.",
          lat: 41.658556,
          lng: -91.551094
        },
        {
          name: "Teddys Bigger Burgers",
          description: "Never go small. Stay big, eat big, be big: At Teddys!",
          lat: 41.660346,
          lng: -91.530537
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
          name: "Blaze Pizza",
          description: "Hip counter-serve pizzeria dishing up crispy, thin-crust pies made with creative toppings. Place is dank. Can't miss!",
          lat: 38.981844,
          lng: -76.937558
        },
        {
          name: "XFINITY Center",
          description: "Maryland Basketball is 100% worth checking out. Get yourself to an ACC/Big Ten Conference game and you will not be disappointed.",
          lat: 38.995462,
          lng: -76.941535
        },
        {
          name: "The Board and Brew",
          description: "Unique hangout offering cafe fare, espresso and craft beer, plus trivia nights and over 500 board games.",
          lat: 38.991625,
          lng: -76.933853
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
          name: "Destination Dogs",
          description: "Easygoing bar and restaurant known for it's amazing hot dogs. Can't miss place.",
          lat: 40.494704,
          lng: -74.449191
        },
        {
          name: "Zimmerli Art Museum",
          description: "Watching sports at Rutgers is a terrible idea. Waste of time, so go check out the Zimmerli Art Museum. It has over 60,000 objects of ancient and modern art from around the world.",
          lat: 40.499999,
          lng: -74.445980
        },
        {
          name: "Stuff Yer Face",
          description: "Hungry? I hope so, because their motto is in their title. Stuff Yer Face!",
          lat: 40.498073,
          lng: -74.448942
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
          name: "Harry's Chocolate Shop",
          description: "This bar has been around since the 1920's and has the name since it was a speakeasy during prohibition. Great atmosphere, strong drinks, and their phrase is 'Go Ugly Early'.",
          lat: 40.423807,
          lng: -86.909012
        },
        {
          name: "Mackey Arena",
          description: "Purdue's Men and Women's Basketball teams play here. Not much else is happening, so go see a basketball game.",
          lat: 40.433287,
          lng: -86.916111
        },
        {
          name: "Scotty's Brewhouse",
          description: "Scotty's is a small chain that has really good food and a great beer selection. One of the few local restaurants hanging on in West Lafayette.",
          lat: 40.420806,
          lng: -86.900146
        }
      ]
    }
    },
    {
      title: "Indiana",
      description: "Chi-town's finest",
      content: "Evanston is a great place to raise a family, attend school, and if you want to party well... Chicago has everything you would ever want",
      image: "./indiana.png",
      mainImage: "./assemblyhall.jpg",
      enrollment: "48,514",
      location: "Bloomington, IN",
      id: "indiana",
      latitude: 39.1766,
      longitude: -86.5130,
      locations: {
        places: [
        {
          name: "The Runcible Spoon",
          description: "Grab Your Brunch Here. They will take your hangover and make it disappear!",
          lat: 39.167319,
          lng: -86.529028
        },
        {
          name: "Assembly Hall",
          description: "Be a part of history. Indiana Basketball and the Hoosiers are famous for a reason. Maybe the best place to catch a game unless you are a Duke fan, which - - if that's the case, you are useless to society.",
          lat: 39.180849,
          lng: -86.522122
        },
        {
          name: "Restaurant Tallent",
          description: "Are you a grown adult and not looking for the college place to eat? Check this place out! Farm to Table! A rariety in the Midwest.",
          lat: 39.168000,
          lng: -86.533363
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
      <SchoolList school = {this.state.school}
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
      
      </Switch>
      </div>
  )
}
}
export default App;
