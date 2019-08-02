import React from 'react';
import Joi from 'joi-browser';
import Form from './commons/form';

class RegisterForm extends Form {
  state = {
    data: { username: '', password: '', name: '' },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label('Username'),
    password: Joi.string()
      .min(5)
      .required()
      .label('Password'),
    name: Joi.string()
      .required()
      .label('Name')
  };

  doSubmit = () => {
    console.log('registered');
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Register</h1>
        {this.renderInput('username', 'Username', 'email')}
        {this.renderInput('password', 'Password', 'password')}
        {this.renderInput('name', 'Name', 'text')}
        {this.renderButton('Register')}
      </form>
    );
  }
}

export default RegisterForm;
