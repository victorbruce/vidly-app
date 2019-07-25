import React, { Component } from 'react';
// services

class ListGroup extends Component {
  render() {
    const {
      items,
      valueProperty,
      textProperty,
      onItemSelect,
      selectedItem
    } = this.props;

    return (
      <ul className="list-group">
        {items.map(item => (
          <li
            key={item[valueProperty]}
            onClick={() => onItemSelect(item)}
            className={
              item === selectedItem
                ? 'list-group-item active'
                : 'list-group-item'
            }
            
          >
            {item[textProperty]}
          </li>
        ))}
      </ul>
    );
  }
}

ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id'
};

export default ListGroup;
