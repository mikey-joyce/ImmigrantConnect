import React, { Component } from "react";

class CreatePost extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "container-fluid">
        <form>

          <div className = "form-group">
            <label>
              Post Title:

            </label>

            <input
              type="text"
              placeholder="Add a title"
              className="form-control"
              name="post-title"
            />
          </div>

          <div className = "form-group">
            <label>
              Contents:
            </label>

            <textarea
              type="text"
              placeholder="Add post contents"
              className="form-control"
              name="post-contents"
            />

          </div>

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
