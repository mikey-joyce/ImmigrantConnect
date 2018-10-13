import React, { Component } from 'react';

class SignIn extends Component {

  render() {
    return (
      <div>
      <form>
        <label>
          Username:
          <input type="text" name="username" />
          </label>
          <label>
            Password:
            <input type="text" name="password" />
            </label>
            <input type="submit" value="Submit" />

      </form>
      </div>
    );
  }

}

export default SignIn;
