import React, { Component } from "react";
import AuthorList from "./AuthorList";
import AuthorCreate from "./AuthorCreate";

class DashboardAuthors extends Component {
  render() {
    return (
      <div className="ui container">
        <AuthorCreate />
        <AuthorList />
      </div>
    );
  }
}

export default DashboardAuthors;
