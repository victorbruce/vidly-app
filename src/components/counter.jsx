import React, { Component } from 'react';

class Counter extends Component {
  render() {
    const { onIncrement, onDecrement, counter, onDelete } = this.props;

    return (
      <div>
        <div className="row">
          <div className="col-md-1">
            <span className={this.getBadgeClass()}>{this.formatCount()}</span>
          </div>
          <div className="col-md-8">
            <button
              onClick={() => onIncrement(counter)}
              className="btn btn-secondary btn-sm m-2"
            >
              +
            </button>
            <button
              onClick={() => onDecrement(counter)}
              className="btn btn-secondary btn-sm m-2"
              disabled={this.disableButton()}
            >
              -
            </button>
            <button
              onClick={() => onDelete(counter.id)}
              className="btn btn-danger btn-sm m-2"
            >
              x
            </button>
          </div>
        </div>
      </div>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }

  getBadgeClass() {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  disableButton() {
    const { value } = this.props.counter;
    return value === 0 ? 'disabled' : '';
  }
}

export default Counter;
