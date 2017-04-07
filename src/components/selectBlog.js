import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SelectBlog extends React.Component {
  render() {
    if(!this.props.blog) {
      return(<div>Click on a Blog</div>);
    }
    return (
      <div>
        <p>Title: {this.props.blog.title}</p>
        <h2>Description: {this.props.blog.description}</h2>
        <h3>Content: {this.props.blog.content}</h3>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    blog: state.blog
  }
}

export default connect(mapStateToProps)(SelectBlog);
