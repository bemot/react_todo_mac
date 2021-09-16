import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getAuthors, deleteAuthor } from "../../actions/authors";

class AuthorList extends Component {
  componentDidMount() {
    this.props.getAuthors();
  }

  render() {
    return (
      <div className="ui relaxed divided list" style={{ marginTop: "2rem" }}>
        {this.props.authors.map((author) => (
          <div className="item" key={author.id}>
            <div className="right floated content">
              <Link
                to={`/delete/${author.id}`}
                className="small ui negative basic button"
              >
                Delete
              </Link>
            </div>
            <i className="large calendar outline middle aligned icon" />
            <div className="content">
              <Link to={`/edit/${author.id}`} className="header">
                {author.author}
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authors: Object.values(state.authors),
});

export default connect(mapStateToProps, { getAuthors, deleteAuthor })(
  AuthorList
);

//
