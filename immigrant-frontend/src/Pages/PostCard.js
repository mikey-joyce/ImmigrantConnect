import React, { Component } from "react";

//models
import models from "../Models";

let { Post } = models;

class PostCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { post } = this.props;
    console.log(post);

    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.text}</p>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default PostCard;
