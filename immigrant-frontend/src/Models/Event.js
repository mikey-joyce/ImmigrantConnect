/**
community: 2
date: "2018-10-16T18:00:00Z"
id: 2
name: "Basketball Night"
owner: 4
**/

class Event {
  constructor(id, owner, community, name, date) {

    this.id = id;
    this.owner = owner;
    this.community = community
    this.name = name;
    this.date = date;

  }

  static parse(raw_event) {

    let {id, owner, community, name, date} = raw_event;

    return new Event(id, owner, community, name, date);

  }

  serialize() {

    let {id, owner, community, name, date} = this;
    return {id, owner, community, name, date};

  }
}

export default Event
