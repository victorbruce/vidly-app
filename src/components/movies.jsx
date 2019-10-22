import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';

import Pagination from './commons/pagination';
import { paginate } from '../utils/paginate';
import ListGroup from './commons/listGroup';
import MoviesTable from './moviesTable';
class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: 'title', order: 'asc' }
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
    const filteredMovies = movies.filter(m => m._id !== movie._id);
    this.setState({ movies: filteredMovies });
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  doGetMovies = () => {
    const movies = getMovies();
    this.setState({ movies });
  };

  doGetGenres = () => {
    const genres = [{ _id: '', name: 'All Genres' }, ...getGenres()];
    this.setState({ genres });
  };

  componentWillMount() {
    this.doGetMovies();
    this.doGetGenres();
  }

  getPageData = () => {
    const {
      movies: allMovies,
      pageSize,
      currentPage,
      selectedGenre,
      sortColumn
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, genres, sortColumn } = this.state;

    if (count === 0)
      return <p className="mt-5">There are no movies in the database</p>;

    const { totalCount, data: movies } = this.getPageData();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genres}
            onItemSelect={this.handleGenreSelect}
            selectedItem={this.state.selectedGenre}
          />
        </div>
        <div className="col">
          <Link className="btn btn-primary mb-3" to="/movies/new">New Movie</Link>
          <p>Showing {totalCount} movies in the database.</p>
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            onSort={this.handleSort}
          />
          <div>
            <Pagination
              itemsCount={totalCount}
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
