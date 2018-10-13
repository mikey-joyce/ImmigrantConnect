class User {

  constructor(id, username, password = null) {

    this.id = id;
    this.username = username;
    this.password = password;

  }

  static parse(raw_user) {

    let {id, username} = raw_user;

    return new User(id, username);

  }

  serialize_without_password() {
    let {id, username} = this;

    return {
      id,
      username
    }

  }

}

export default User
