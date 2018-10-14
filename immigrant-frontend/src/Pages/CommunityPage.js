import React, { Component } from "react";

//styling
import "./CommunityPage.css";

//add buttons
import AddEvent from "./AddEvent";
import AddPost from "./AddPost";

//libs
import _ from "lodash";

//api
import ApiInterface from "../Lib/ApiInterface";

// card
import EventCard from "./EventCard";
import PostCard from "./PostCard";

//routing
import { Link, Redirect } from "react-router-dom";

class CommunityPage extends Component {
  constructor(props) {
    super(props);

    //bind the functions
    this.loadCommunityPosts = this.loadCommunityPosts.bind(this);
    this.loadCommunityEvents = this.loadCommunityEvents.bind(this);

    this.renderPosts = this.renderPosts.bind(this);
    this.renderEvents = this.renderEvents.bind(this);

    this.addPost = this.addPost.bind(this);
    this.addEvent = this.addEvent.bind(this);

    if (this.props.community_selected === false) {
      this.state = {
        valid: false
      };
    } else if (this.props.community_selected) {
      this.state = {
        valid: true,
        community_id: this.props.selected_community.id,
        community_events: [],
        community_posts: []
      };

      this.loadCommunityPosts();
      this.loadCommunityEvents();
    }
  }

  loadCommunityEvents() {
    ApiInterface.getCommunityEvents(this.state.community_id)
      .then(
        function(community_events) {
          console.log(community_events);

          this.setState({
            ...this.state,
            community_events
          });
        }.bind(this)
      )
      .catch(function(err) {
        console.log(err);
        console.log("server is malfunctioning... probably");
      });
  }

  loadCommunityPosts() {
    ApiInterface.getCommunityPosts(this.state.community_id)
      .then(
        function(community_posts) {
          console.log(community_posts);

          this.setState({
            ...this.state,
            community_posts
          });
        }.bind(this)
      )
      .catch(function(err) {
        console.log(err);
        console.log("server is malfunctioning... probably");
      });
  }

  renderEvents() {
    let { community_events } = this.state;

    let rendered_events = [];

    _.map(community_events, function(event, idx) {
      rendered_events.push(<EventCard event={event} key={idx} />);
    });

    return rendered_events;
  }

  renderPosts() {
    let { community_posts } = this.state;

    let rendered_posts = [];

    _.map(community_posts, function(post, idx) {
      rendered_posts.push(<PostCard post={post} key={idx} />);
    });

    return rendered_posts;
  }

  addEvent() {
    this.setState({
      ...this.state,
      addEvent: true
    });
  }

  addPost() {
    this.setState({
      ...this.state,
      addPost: true
    });
  }

  render() {
    if (this.state.valid === false) {
      return <Redirect to="/communities" />;
    }

    let { translations } = this.props;

    return (
      <div className="CommunityPage Page container-fluid">
        <br />
        <h2 className="display-5">
          {this.props.selected_community.group_name}
        </h2>

        {this.props.user_logged_in && (
          <div className="btn-group btn-add-group" role="group">
            <AddPost
              text={translations.community_view.add_post}
              className="action-btn"
            />
            <AddEvent
              text={translations.community_view.add_event_post}
              className="action-btn"
            />
          </div>
        )}

        {this.props.user_logged_in === false && (
          <Link to="/sign-in">{translations.community_view.sign_in}</Link>
        )}

        <div className="cards">
          {this.renderEvents()}
          {this.renderPosts()}
        </div>
      </div>
    );
  }
}

export default CommunityPage;
