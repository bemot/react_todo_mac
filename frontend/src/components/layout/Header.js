import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="ui inverted menu" style={{ borderRadius: "0" }}>
        <a className="header item" href="/">
          Bemotoff-CRUD
        </a>
        <a className="item" href="/todos">
          TODOS
        </a>
        <a className="item" href="/authors">
          Authors
        </a>
      </div>
    );
  }
}

export default Header;
