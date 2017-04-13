import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SelectSchool extends React.Component {
  render() {
    if(!this.props.school) {
      return(<div>Click on a School</div>);
    }
    return (
      <div>
        <p>Title: {this.props.school.title}</p>
        <h2>Description: {this.props.school.description}</h2>
        <h3>Content: {this.props.school.content}</h3>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    school: state.school
  }
}

export default connect(mapStateToProps)(SelectSchool);
