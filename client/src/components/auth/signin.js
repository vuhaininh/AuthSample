import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';

class Signin extends Component {
  handleFormSubmit({ email, password }){
    this.props.signinUser({ email,password });
  }
  renderAlert() {
    if(this.props.errorMessage){
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }
  render(){

    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <Field name="email" component="input" type="text" className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <Field name="password" component="input" type="password" className="form-control" />
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign in </button>
      </form>
    );
  }
}
function mapStateToProps(state){
  return { errorMessage: state.auth.error }
}
export default reduxForm({
  form: 'signin'
})(connect(mapStateToProps,actions)(Signin));
