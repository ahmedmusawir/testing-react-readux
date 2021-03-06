import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

export class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    };
  }

  textareaHandler = e => {
    this.setState({
      comment: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.props.saveComment);
    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  };

  render() {
    const { comment } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea
            value={comment}
            className="form-control"
            name="comment-text"
            id=""
            cols="30"
            rows="10"
            onChange={this.textareaHandler}
          />
          <div className="mt-3">
            <button type="submit" className="btn btn-secondary btn-block">
              Submit
            </button>
          </div>
        </form>
        <div className="alert alert-dark">
          <h5>{comment}</h5>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  actions,
)(CommentBox);
