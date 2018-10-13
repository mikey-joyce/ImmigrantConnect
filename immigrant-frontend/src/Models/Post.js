
/**
community: 2
id: 3
owner: 4
text: "We are going to start weekly basketball games for our community! It will be every Tuesday night at 6pm."
title: "Weekly Basketball Game"
**/

class Post {
  constructor(id, owner, community, title, text) {

    this.id = id;
    this.owner = owner;
    this.community = community;
    this.title = title;
    this.text = text;

  }

  static parse(raw_post) {

    let {id, owner, community, title, text} = raw_post;

    return new Post(id, owner, community, title, text);

  }

  serialize() {

    let {id, owner, community, title, text} = this;
    
    return {id, owner, community, title, text};

  }
}

export default Post
