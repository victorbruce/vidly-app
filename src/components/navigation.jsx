import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
      <Link className="navbar-brand" to="/">
        Vidly
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample09"
        aria-controls="navbarsExample09"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample09">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/movies">
              Movies <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/customers">
              Customers
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/rentals">
              Rentals
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
