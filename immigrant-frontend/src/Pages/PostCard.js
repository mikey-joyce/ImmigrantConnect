import React, { Component } from "react";

class PostCard extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Post Title</h5>
            <p className="card-text">Post Description</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PostCard;
