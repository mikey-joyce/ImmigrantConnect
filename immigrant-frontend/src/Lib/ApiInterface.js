import {endpoint} from './Endpoint';

//import models
import models from '../Models/index';

//libs
import axios from 'axios'
import _ from 'lodash';

// Shorthand alias
let {Community, User, ImmigrantProfile, Event, Post} = models;

class ApiInterface {

  static getCommunities() {

    let community_endpoint = "/communities?format=json";

    var community_promise = new Promise(function (resolve, reject) {
      axios.get(endpoint + community_endpoint)
        .then (function (response) {
          var parsed_communities = _.map(response.data, function (raw_community) {
            return Community.parse(raw_community)
          })

          console.log(parsed_communities);

          resolve(parsed_communities)
        }).catch (function (error) {
          reject(error)
        })
    })

    return community_promise;

  }

  static getCommunity(community_id) {

    let community_endpoint = "/communities/" + community_id + "?format=json";

    var community_promise = new Promise(function (resolve, reject) {
      axios.get(endpoint + community_endpoint)
        .then (function (response) {
          var parsed_community = Community.parse(response.data)

          console.log(parsed_community);

          resolve(parsed_community)

        }).catch (function (error) {
          reject(error)
        })
    })

    return community_promise;

  }

  static getCommunityPosts(community_id) {

    let community_posts_endpoint = "/communities/" + community_id + "/posts/" + "?format=json";

    var community_posts_promise = new Promise(function (resolve, reject) {
      axios.get(endpoint + community_posts_endpoint)
        .then (function (response) {
          var raw_posts = response.data;

          var parsed_posts = _.map(raw_posts, function (raw_post) {
            return Post.parse(raw_post);
          })

          console.log(parsed_posts)

          resolve(raw_posts)

        }).catch (function (error) {
          reject(error)
        })
    })

    return community_posts_promise;

  }

  static getCommunityEvents(community_id) {

    let community_events_endpoint = "/communities/" + community_id + "/events" + "?format=json";

    var community_events_promise = new Promise(function (resolve, reject) {
      axios.get(endpoint + community_events_endpoint)
        .then (function (response) {
          var raw_events = response.data;

          var parsed_events = _.map (raw_events, function (raw_event) {
            return Event.parse(raw_event);
          })

          console.log(parsed_events)

          resolve(parsed_events)

        }).catch (function (error) {
          reject(error)
        })
    })

    return community_events_promise;

  }

  static getUsers() {
    let user_endpoint = "/users/" + "?format=json";

    var user_promise = new Promise(function (resolve, reject) {
      axios.get(endpoint + user_endpoint)
        .then (function (response) {
          let raw_users = response.data

          let parsed_users = _.map(raw_users, function (raw_user) {
            return User.parse(raw_user);
          })

          console.log(parsed_users);
          resolve(parsed_users)

        }).catch (function (error) {
          reject(error)
        })
    })

    return user_promise

  }

  static getUser(user_id) {


      let user_endpoint = "/users/" + user_id + "?format=json";

      var user_promise = new Promise(function (resolve, reject) {
        axios.get(endpoint + user_endpoint)
          .then (function (response) {
            let raw_user = response.data

            let parsed_user = User.parse(raw_user);

            console.log(parsed_user);
            resolve(parsed_user)

          }).catch (function (error) {
            reject(error)
          })
      })

      return user_promise;

  }

  static getUserProfile(user_id) {

    let user_profile_endpoint = "/users/" + user_id + "/profile/" + "?format=json";

    let user_profile_promise = new Promise(function (resolve, reject) {
      axios.get(endpoint + user_profile_endpoint)
        .then (function (response) {
          let raw_profile = response.data
          let parsed_profile = ImmigrantProfile.parse(raw_profile)

          console.log(parsed_profile);
          resolve(parsed_profile)

        }).catch (function (error) {
          reject(error)
        })
    })

    return user_profile_promise;

  }

  static updateUserProfile(user_profile) {

    let profile_endpoint = "/profiles/" + user_profile.id + "/";

    let profile_promise = new Promise(function (resolve, reject) {
      axios.put(endpoint + profile_endpoint, ImmigrantProfile.parse(user_profile).serialize())
        .then (function (response) {
          let raw_profile = response.data
          let parsed_profile = ImmigrantProfile.parse(raw_profile)

          console.log(parsed_profile);
          resolve(parsed_profile)

        }).catch (function (error) {
          reject(error)
        })
    })

    return profile_promise

  }

}

export default ApiInterface
