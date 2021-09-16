import React, { Component } from "react";
import { connect } from "react-redux";
import { addAuthor } from "../../actions/authors";
import AuthorForm from "./AuthorForm";

class AuthorCreate extends Component {
  onSubmit = (formValues) => {
    this.props.addAuthor(formValues);
  };

  render() {
    return (
      <div style={{ marginTop: "2rem" }}>
        <AuthorForm destroyOnUnmount={false} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { addAuthor })(AuthorCreate);
``;
