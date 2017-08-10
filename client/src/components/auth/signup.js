import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form>
        <fieldset className="form-group">
          <label>Email:</label>
          <Field name="email" component="input" type="text" className="form-control"/>
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <Field name="password" component="input" type="password" className="form-control" required/>
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm password</label>
          <Field name="confirmPassword" component="input" type="password" className="form-control" />
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign up</button>
      </form>
    )
  }
}

function validate(formProps){
  const errors = {};
  console.log(formProps)
  return errors;
}
export default reduxForm({
  form: 'signup',
  validate
})(connect(null,actions)(Signup));
