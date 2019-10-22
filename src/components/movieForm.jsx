import React from 'react';
import Joi from 'joi-browser';
import Form from './commons/form';
import { saveMovie } from '../services/fakeMovieService';
class MovieForm extends Form {
  state = {
    movies: [],
    data: { title: '', genre: '', numberInStock: '', rate: '' },
    errors: {}
  };

  schema = {
    title: Joi.string()
      .required()
      .label('Title'),
    genre: Joi.label('Genre'),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label('Number in Stock'),
    rate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label('Rate')
  };

  componentDidMount() {}

  doSubmit = () => {
    // call server
    console.log('movie saved');
  };

  render() {
    return (
      <div>
        <h1>Movies Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('title', 'Title', 'Title')}
          <div className="form-group">
            <label>Genre</label>
            <select className="form-control" name="genre" onChange={this.handleChange}>
              <option />
              <option>Comedy</option>
              <option>Action</option>
              <option>Comic</option>
            </select>
          </div>
          {this.renderInput('numberInStock', 'Number in Stock', 'number')}
          {this.renderInput('rate', 'Rate', 'number')}
          {this.renderButton('Save')}
        </form>
      </div>
    );
  }
}

export default MovieForm;
