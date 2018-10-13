import React, { Component } from 'react';

class CreateComment extends Component {

  render() {
    return (
      <form>
        <div className="form-group">
          <label>
            Username:
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Add comment"/>
          </label>
        </div>
        <button
          type="submit"
          value="Submit"
          className="btn btn-primary">Submit</button>
      </form>
    );
  }

}

export default CreateComment;
