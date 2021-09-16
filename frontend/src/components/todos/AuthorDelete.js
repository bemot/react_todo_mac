import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../layout/Modal";
import history from "../../history";
import { getAuthor, deleteAuthor } from "../../actions/authors";

class AuthorDelete extends Component {
  componentDidMount() {
    this.props.getAuthor(this.props.match.params.id);
  }

  renderContent() {
    if (!this.props.author) {
      return "Are you sure you want to delete this task?";
    }
    return `Are you sure you want to delete the task: ${this.props.author.author}`;
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <Fragment>
        <button
          onClick={() => this.props.deleteAuthor(id)}
          className="ui negative button"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </Fragment>
    );
  }

  render() {
    return (
      <Modal
        title="Delete Author"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  author: state.authors[ownProps.match.params.id],
});

export default connect(mapStateToProps, { getAuthor, deleteAuthor })(
  AuthorDelete
);
