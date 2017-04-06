import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBlog } from '../actions/index';

class PostsNew extends React.Component {
  createList(){
    return this.props.blogs.map((blog) => {
      return(
        <li key={blog.title}
        onClick={() => this.props.selectBlog(blog)}>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBlog }, dispatch)
}
function mapStateToProps(state) {
  return {
  blogs: state.blogs
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsNew);
