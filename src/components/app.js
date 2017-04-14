import React from 'react';
import PostsNew from './posts_new';
import SelectSchool from './selectBlog';

class App extends React.Component {
  render() {
    return(
      <div>
        <h1>BigTen Information</h1>
        <SelectSchool />
        <PostsNew />
      </div>
    )
  }
}

export default App;
