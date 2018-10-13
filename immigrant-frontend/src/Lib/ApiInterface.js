import {endpoint} from './Endpoint';

//import models
import models from '../Models/index';

//libs
import axios from 'axios'
import _ from 'lodash';

class ApiInterface {

  static getCommunities() {

    let community_endpoint = "/communities?format=json";

    var community_promise = new Promise(function (resolve, reject) {
      axios.get(endpoint + community_endpoint)
        .then (function (response) {
          var parsed_communities = _.map(response.data, function (raw_community) {
            return models.Community.parse(raw_community)
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
          var parsed_community = models.Community.parse(response.data)

          console.log(parsed_community);

          resolve(parsed_community)

        }).catch (function (error) {
          reject(error)
        })
    })

    return community_promise;

  }

  static getCommunityPosts(community_id) {

  }

  static getCommunityEvents(community_id) {

  }

  static getUser(user_id) {

  }

  static getUserProfile(user_id) {

  }

}

export default ApiInterface
