import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Like from './commons/likeButton';
import Pagination from './commons/pagination';
import { paginate } from '../utils/paginate';
import ListGroup from './commons/listGroup';

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
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

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre });
  };

  doGetMovies = () => {
    const movies = getMovies();
    this.setState({ movies });
  };

  doGetGenres = () => {
    const genres = [{ name: 'All Genres' }, ...getGenres()];
    this.setState({ genres });
  };

  componentWillMount() {
    this.doGetMovies();
    this.doGetGenres();
  }

  render() {
    const { length: count } = this.state.movies;
    const {
      movies: allMovies,
      pageSize,
      currentPage,
      genres,
      selectedGenre
    } = this.state;

    if (count === 0)
      return <p className="mt-5">There are no movies in the database</p>;

    const filtered = selectedGenre && selectedGenre._id
      ? allMovies.filter(m => m.genre._id === selectedGenre._id)
      : allMovies;
      
    const movies = paginate(filtered, currentPage, pageSize);

    return (
      <div className="row mt-5">
        <div className="col-3">
          <ListGroup
            items={genres}
            onItemSelect={this.handleGenreSelect}
            selectedItem={this.state.selectedGenre}
          />
        </div>
        <div className="col">
          <p>Showing {filtered.length} movies in the database.</p>
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
          <div>
            <Pagination
              itemsCount={filtered.length}
              currentPage={currentPage}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
