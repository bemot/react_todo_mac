import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="ui inverted menu" style={{ borderRadius: "0" }}>
        <a className="header item">Bemotoff-CRUD</a>
        <a className="item">TODOS</a>
        <a className="item">Authors</a>
      </div>
    );
  }
}

export default Header;
