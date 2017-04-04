import React from 'react';
import { connect } from 'react-redux';

class PostsNew extends React.Component {
  createList(){
    return this.props.blogs.map((blog) => {
      return(
        <li key={blog.title}>
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
          <p>{blog.description}</p>
        </li>
      )
    })
  }
  render() {
    return (
      <ul>
        {this.createList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
  blogs: state.blogs
  }
}

export default connect(mapStateToProps)(PostsNew);
