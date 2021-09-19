import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { getAuthors } from "../../actions/authors";
import { connect } from "react-redux";

class TodoForm extends Component {
  renderField = ({ input, label, meta: { touched, error } }) => {
    //console.log(input);
    return (
      <div className={`field ${touched && error ? "error" : ""}`}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {touched && error && (
          <span className="ui pointing red basic label">{error}</span>
        )}
      </div>
    );
  };

  componentDidMount() {
    this.props.getAuthors();
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    console.log(this.props.authors);
    const btnText = `${this.props.initialValues ? "Update" : "Add"}`;
    return (
      <div className="ui segment">
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          <label>Author</label>
          <Field name="author" component="select" label="Author">
            {this.props.authors.map((option, index) => (
              <option key={index} value={option.id}>
                {option.author}
              </option>
            ))}
          </Field>
          <Field name="task" component={this.renderField} label="Task" />

          <button className="ui primary button">{btnText}</button>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.task) {
    errors.task = "Please enter at least 1 character";
  }
  if (!formValues.author) {
    errors.task = "Please enter at least 1 character";
  }

  return errors;
};

const mapStateToProps = (state) => ({
  authors: Object.values(state.authors),
});

export default connect(mapStateToProps, { getAuthors })(
  reduxForm({
    form: "todoForm",
    touchOnBlur: false,
    validate,
  })(TodoForm)
);
