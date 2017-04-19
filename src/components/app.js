import React from 'react';
import SchoolList from './SchoolList';
import SelectSchool from './selectSchool';
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;

class App extends React.Component {
  render() {
    return(
      <Router>
        <div>
        <img src="./BigTen.png" alt="Big Ten" />
        <h1>Information</h1>
        <SelectSchool />
        <Route path="/" component={SchoolList} />
        <Route path="/michigan" component={SelectSchool} />
        </div>
      </Router>
    )
  }
}

export default App;
