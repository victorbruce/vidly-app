import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class Pagination extends Component {
  render() {
    const { itemsCount, pageSize, onPageChange, currentPage } = this.props;

    // calculate the number of paginantion buttons to render
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    // convert the number into an array using lodash
    const pages = _.range(1, pagesCount + 1);

    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          {pages.map(page => (
            <li
              key={page}
              className={
                currentPage === page ? 'page-item active' : 'page-item'
              }
            >
              <a
                className="page-link"
                href="#"
                onClick={() => onPageChange(page)}
              >
                {page}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
