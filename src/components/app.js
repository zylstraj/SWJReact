import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Practice from './Practice';
import SchoolInfo from './schoolInfo';

class App extends React.Component {
  render() {
    return(
        <div>
        <img src="./BigTen.png" alt="Big Ten" />
        <h1>Information</h1>
        <Switch>
        <Route path="/" component={Practice} />
        <Route path="/Michigan" component={SchoolInfo} />
        <Route path="/fun" component={Practice} />
        </Switch>
        </div>
    )
  }
}

export default App;
