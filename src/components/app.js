import React from 'react';
import PostsNew from './posts_new';
import SelectSchool from './selectBlog';

class App extends React.Component {
  render() {
    return(
      <div>
        <img src="./BigTen.png" alt="Big Ten" />
        <h1>Information</h1>
        <SelectSchool />
        <PostsNew />
      </div>
    )
  }
}

export default App;
