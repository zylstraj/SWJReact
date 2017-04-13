import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBlog } from '../actions/index';
import styles from './posts_new.css';

class PostsNew extends React.Component {
  createList(){
    return this.props.blogs.map((blog) => {
      return(
        <div key={blog.title}
        className={styles.school}
        onClick={() => this.props.selectBlog(blog)}>
          <h1>{blog.title}</h1>
          <img src={blog.image} alt={blog.title} />
        </div>
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
