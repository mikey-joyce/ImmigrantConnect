import React, { Component } from "react";

//api
import ApiInterface from "../Lib/ApiInterface";

//models
import models from "../Models";

//routing
import { Redirect } from "react-router-dom";

//shorthand
let { Post } = models;

class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.submitPost = this.submitPost.bind(this);

    if (this.props.community_selected && this.props.user_logged_in) {
      this.state = {
        valid: true,
        new_post: new Post(
          0,
          this.props.logged_in_user.id,
          this.props.selected_community.id,
          "",
          ""
        )
      };
    } else {
      this.state = {
        valid: false
      };
    }
  }

  submitPost() {
    let { new_post } = this.state;

    ApiInterface.createPost(new_post).then(
      function(post) {
        this.setState({
          ...this.state,
          submitted: true
        });
      }.bind(this)
    );
  }

  handleChange(e) {
    let { name, value } = e.target;
    let { new_post } = this.state;

    new_post[name] = value;

    this.setState({
      ...this.state,
      new_post
    });
  }

  render() {
    if (this.state.valid === false) {
      return <Redirect to="/communities" />;
    }

    if (this.state.submitted == true) {
      return <Redirect to="/view-community" />;
    }

    let { translations } = this.props;

    if (this.state.valid) {
      return (
        <div className="container-fluid CreatePost form">
          <div>
            <div className="form-group">
              <label>{translations.create_post.post_title}:</label>

              <input
                type="text"
                placeholder="Add a title"
                onChange={this.handleChange}
                className="form-control"
                value={this.state.new_post.title}
                name="title"
              />
            </div>

            <div className="form-group">
              <label>{translations.create_post.post_contents}:</label>

              <textarea
                type="text"
                onChange={this.handleChange}
                placeholder="Add post contents"
                className="form-control"
                value={this.state.new_post.text}
                name="text"
              />
            </div>

            <button
              type="submit"
              value="Submit"
              onClick={this.submitPost}
              className="btn btn-primary"
            >
              {translations.forms.submit}
            </button>
          </div>
        </div>
      );
    }
  }
}

export default CreatePost;
