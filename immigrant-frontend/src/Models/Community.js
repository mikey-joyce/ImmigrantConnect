/**
./Models/Community.js

mapping for Community Model

**/

class Community {

  constructor(id, group_name, language_spoken, location) {

    this.id = id;
    this.group_name = group_name;
    this.language_spoken = language_spoken;
    this.location = location;

  }

  static parse(raw_community) {

    console.log(raw_community)
    let {id, group_name, language_spoken, location} = raw_community;

    return new Community(id, group_name, language_spoken, location)

  }

  serialize() {
    let {id, group_name, language_spoken, location} = this;

    return {
      id,
      group_name,
      language_spoken,
      location
    }

  }

}

export default Community
