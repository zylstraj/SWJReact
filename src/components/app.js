import React from 'react';
import PostsNew from './posts_new';
import SelectBlog from './selectBlog';

class App extends React.Component {
  render() {
    return(
      <div>
        <h1>Change The Narrative</h1>
        <PostsNew />
        <SelectBlog />
      </div>
    )
  }
}

export default App;
