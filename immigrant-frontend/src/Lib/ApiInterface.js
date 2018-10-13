import {endpoint} from './Endpoint';

import axios from 'axios'

class ApiInterface {

  static getCommunities() {

    let community_endpoint = "/communities?format=json";

    var community_promise = new Promise(function (resolve, reject) {
      axios.get(endpoint + community_endpoint)
        .then (function (response) {
          console.log(response);
        }).catch (function (error) {
          console.log(error);
        })
    })

    return community_promise;

  }

}

export default ApiInterface
