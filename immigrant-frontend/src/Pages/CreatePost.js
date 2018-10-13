import React, { Component } from "react";

class CreatePost extends Component {
  render() {
    return (
      <div>
        <form>
          <label>
            Post Title:
            <input
              type="text"
              placeholder="Add a title"
              className="form-control"
              name="post-title"
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="Add post contents"
              className="form-control"
              name="post-contents"
            />
          </label>
          <button
            type="submit"
            value="Submit"
            className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default CreatePost;
