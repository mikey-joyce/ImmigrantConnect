import React, { Component } from "react";

import { Redirect } from "react-router-dom";

class AddPost extends Component {
  constructor(props) {
    super(props);

    this.addPost = this.addPost.bind(this);

    this.state = {
      addPost: false
    };
  }

  addPost() {
    this.setState({
      ...this.state,
      addPost: true
    });
  }

  render() {
    if (this.state.addPost === true) {
      return <Redirect push to="/create-post" />;
    }

    return (
      <div>
        <button
          onClick={this.addPost}
          type="button"
          className="btn btn-outline-primary"
        >
          {this.props.text}
        </button>
      </div>
    );
  }
}

export default AddPost;
