import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import SchoolList from './SchoolList';
import SchoolInfo from './schoolInfo';
import GoogleMaps from './Map';

class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    school: [
      {
      title: "Michigan",
      description: "University of Michigan",
      content: "The University of Michigan is the gold standard of the Big Ten. Known for it's excellent academics and incredible sport teams, this is the University to attend if you want that perfect mix of Ivy School Academics and big-time college sports. Ann Arbor is the perfect college town and every moment spent here, you will cherish forever.",
      image: "./michigan.jpg",
      mainImage: "./diag.png",
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
        },
        {
          name: "Nichols Arboretum",
          description: "Being stuck inside is the worst and it wears on you. This is one of the few spots to sneak outside in Ann Arbor and kind of lose yourself. Ideal place to be in the spring or fall, but go get your butt outside here.",
          lat: 42.279883,
          lng: -83.721616
        },
        {
          name: "Afternoon Delight",
          description: "One of the best places to have brunch in Ann Arbor. Delicious and just fantastic atmosphere.",
          lat: 42.279569,
          lng: -83.746261
        },
        {
          name: "NYPD",
          description: "This is your spot for late night pizza. Obviously there are cheaper options, but if you are looking for some amazing pizza while tipsy, this is your spot.",
          lat: 42.277927,
          lng: -83.741721
        },
        {
          name: "Yost Ice Arena",
          description: "If you get a chance, see a hockey game here! There might not be a more fun sport event at the University of Michigan.",
          lat: 42.267669,
          lng: -83.740987
        }
      ]
    }
    },
    {
      title: "Ohio State",
      description: "Ohio",
      content: "Easily the worst school in the Big 10. Universally disliked. If you went here, I feel sorry for you and hope that you regret every single moment you spent here. Second class school in the shittiest state in the entire country. I could keep going, but Ohio is the worst and this entire university embodies every terrible person you've ever met.",
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
          description: "This place is known as the horshoe, or to everyone else - - this is where a bunch of idiots gather a few times every fall.",
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
      description: "Michigan State University",
      content: "This campus offers nothing to anyone. Literally in the center of the state of Michigan and surrounded by nothing, expect to visit East Lansing and leave thinking, 'Yes, this was as bad as I thought it was going to be.'",
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
        },
        {
          name: "Michigan Flyer",
          description: "This is a great place to get on a bus and get out of East Lansing. Once you've realized the mistake of visiting here, this is your quickest way out of town.",
          lat: 42.735658,
          lng: -84.479947
        },
        {
          name: "Crunchy's",
          description: "Come here for a hole in the wall bar and you will have yourself a great time.",
          lat: 42.736430,
          lng: -84.487146
        },
        {
          name: "Tennis Courts",
          description: "If you find yourself here on a Saturday morning, come down this way, join the party and have some beers! All of campus is open-intox: so be safe and have fun!",
          lat: 42.723807,
          lng: -84.485606
        }
      ]
    }
    },
    {
      title: "Northwestern",
      description: "Chi-town's finest",
      content: "Northwestern has it all. Evanston is a great little college area. It has it's distinct campus area, but it is nestled right in the northern part of Chicago, which gives you all kinds of different opportunities. I personally think this university offers the most opportunity out of any of the Big Ten univeristies.",
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
        },
        {
          name: "The Bean.",
          description: "Go check out the Bean in Millenium Park. You will love it.",
          lat: 41.882641,
          lng: -87.623229
        },
        {
          name: "North Avenue Beach",
          description: "Go on a run, walk the beach, grab a longboard. That choice is yours, but a beautiful place to get outside and simply relax in Chicago.",
          lat: 41.914744,
          lng: -87.625257
        },
        {
          name: "Second City",
          description: "Go see a show here. Second City has produced some of the best talent in comedy today. See the future before it arrives.",
          lat: 41.911598,
          lng: -87.634901
        }
      ]
    }
    },
    {
      title: "Wisconsin",
      description: "University of Wisconsin in Madison",
      content: "The University of Wisconsin–Madison (also known as University of Wisconsin, Wisconsin, UW, or regionally as UW–Madison, or simply Madison) is a public research university in Madison, Wisconsin, United States. Founded when Wisconsin achieved statehood in 1848, UW–Madison is the official state university of Wisconsin, and the flagship campus of the University of Wisconsin System.",
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
        },
        {
          name: "Brasserie V",
          description: "Elevated throwback offering locally sourced, seasonal French eats & many Belgian beers. Check it out.",
          lat: 43.064107,
          lng: -89.418126
        },
        {
          name: "Greenbush Bakery",
          description: "Get your donuts here. Open late and so-so good.",
          lat: 43.067430,
          lng: -89.407729
        },
        {
          name: "Mediterranean Cafe",
          description: "Casual, compact cafe serving hummus, falafel & other Mediterranean fare at lunch. Delicious.",
          lat: 43.074776,
          lng: -89.396417
        }
      ]
    }
    },
    {
      title: "Penn State",
      description: "Penn State University",
      content: "Jon Stewart said it best: 'Penn State... Cow, Cow, Cow... 20,000 hot girls.'",
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
      description: "University of Illinois",
      content: "This is where you go if you decided against Northwestern. You are so far removed from Chicago, that part of you is starting to seriously consider moving to St. Louis after you finish graduating and we all know how terrible of an idea that might be.",
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
      description: "University of Minnesota",
      content: "The University of Minnesota, Twin Cities (often referred to as The University of Minnesota, Minnesota, the U of M, UMN, or simply the U) is a public research university in Minneapolis and Saint Paul, Minnesota. The Minneapolis and St. Paul campuses are approximately 3 miles (4.8 km) apart, and the Saint Paul campus is actually in neighboring Falcon Heights.[7] It is the oldest and largest campus within the University of Minnesota system and has the sixth-largest main campus student body in the United States, with 51,147 students in 2013–14.",
      image: "./minnesota.jpg",
      enrollment: "51,147",
      mainImage: "./minnesotaCampus.jpg",
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
      description: "University of Nebraska-Lincoln",
      content: "The University of Nebraska–Lincoln, often referred to as Nebraska, UNL or NU, is a public research university in the city of Lincoln, in the state of Nebraska in the Midwestern United States.[6] It is the state's oldest university, and the largest in the University of Nebraska system. Its athletic program, called the Cornhuskers, is a member of the Big Ten Conference. The Nebraska football team has won 46 conference championships, and since 1970, five national championships.",
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
      description: "University of Iowa",
      content: "The University of Iowa (also known as the UI, U of I, UIowa, or simply Iowa) is a flagship public research university in Iowa City, Iowa. Founded in 1847, Iowa is the oldest university in the state. The University of Iowa is organized into eleven colleges offering more than 200 areas of study and seven professional degrees",
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
      description: "University of Maryland",
      content: "A newly welcomed member to the Big Ten.. Maryland is at the heart of everything. Close to DC and yet nestled away as it's own unique college experience, the University of Maryland is one of those places that will forever shape you.",
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
      description: "Rutgers University",
      content: "Rutgers was chartered as Queen's College on November 10, 1766. It is the eighth-oldest college in the United States and one of the nine colonial colleges chartered before the American Revolution. The college was renamed Rutgers College in 1825 in honor of Colonel Henry Rutgers (1745–1830), a New York City landowner, philanthropist and former military officer, whose $5000 bond donation to the school allowed it to reopen after years of financial difficulty. For most of its existence, Rutgers was a private liberal arts college affiliated with the Dutch Reformed Church. The college expanded its role in research and instruction in agriculture, engineering, and science when it was named as the state's sole land-grant college in 1864 under the Morrill Act of 1862. It gained university status in 1924 with the introduction of graduate education and further expansion. However, Rutgers evolved into a coeducational public research university",
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
      description: "Purdue University",
      content: "My Dad went to Purdue so I will always hold a little bit of this place special in my heart. Don't necessarily come here for the sports as it's always playing second fiddle to Indiana Basketball, but if you are a young lady looking to find a good Midwestern man, this might be the school for you.",
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
      description: "Indiana University",
      content: "Bloomington is a basketball school. You go here if you are from Indiana and you love basketball. There will be people who try to tell you differently, but this school is academic and loves their hoops. Bobby Knight will never be forgotten in Bloomington.",
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
