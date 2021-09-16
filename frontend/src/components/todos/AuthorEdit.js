import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getAuthor, editAuthor } from "../../actions/authors";
import AuthorForm from "./AuthorForm";

class AuthorEdit extends Component {
  componentDidMount() {
    this.props.getAuthor(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editAuthor(this.props.match.params.id, formValues);
  };

  render() {
    // if (!this.props.todo) {
    //   return <div>Loading...</div>;
    // }
    return (
      <div className="ui container">
        <h2 style={{ marginTop: "2rem" }}>Edit Author</h2>
        <AuthorForm
          initialValues={_.pick(this.props.author, "author")}
          enableReinitialize={true}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  author: state.authors[ownProps.match.params.id],
});

export default connect(mapStateToProps, { getAuthor, editAuthor })(AuthorEdit);
