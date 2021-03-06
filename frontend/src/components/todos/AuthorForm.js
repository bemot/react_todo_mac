import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class AuthorForm extends Component {
  renderField = ({ input, label, meta: { touched, error } }) => {
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

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    console.log(this.props);
    const btnText = `${this.props.initialValues ? "Update" : "Add"}`;
    return (
      <div className="ui segment">
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          <Field name="author" component={this.renderField} label="Author" />

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

export default reduxForm({
  form: "authorForm",
  touchOnBlur: false,
  validate,
})(AuthorForm);
