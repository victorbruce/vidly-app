import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './commons/likeButton';

class Movies extends Component {
  state = {
    movies: null
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handleDelete = movie => {
    const movies = [...this.state.movies];
    const filteredMovies = movies.filter(m => m._id !== movie);
    this.setState({ movies: filteredMovies });
  };

  doGetMovies = () => {
    const movies = getMovies();
    this.setState({ movies });
  };

  componentWillMount() {
    this.doGetMovies();
  }

  render() {
    const { movies } = this.state;

    if (movies.length === 0)
      return <p className="mt-5">There are no movies in the database</p>;

    return (
      <React.Fragment>
        <p className="mt-5">Showing {movies.length} movies in the database.</p>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie._id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>


      </React.Fragment>
    );
  }
}

export default Movies;
