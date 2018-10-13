import React, { Component } from 'react';

class DropdownButton extends Component {
  state = {
    showLangMenu: false,
    showLocMenu: false
  }

  showLangMenu = e => {
    e.preventDefault();
    this.setState(() => ( {showLangMenu: !this.state.showLangMenu} ))
  }

  showLocMenu = e => {
    e.preventDefault();
    this.setState(() => ( {showLocMenu: !this.state.showLocMenu} ))
  }


  render() {
    const langMenu =<div className = "langButtons">
    <button>English</button>
    <button>Español</button>
    <button>Bokansi</button>
    </div>;

    const locMenu =<div className = "locButtons">
    <button>St. Louis</button>
    </div>;

    return (
      <div>
      <button onClick={this.showLangMenu}>Choose Language</button>
      {this.state.showLangMenu ? langMenu : null}
      <button onClick={this.showLocMenu}>Choose Location</button>
      {this.state.showLocMenu ? locMenu : null}
      </div>
    );
  }

}

export default DropdownButton;
