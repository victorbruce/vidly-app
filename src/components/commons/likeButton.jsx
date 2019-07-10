import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

class Like extends Component {
  render() {
    const isLiked = () => {
      return this.props.liked ? 'heart': farHeart;
    }
    return <FontAwesomeIcon style={{cursor: 'pointer'}} onClick={this.props.onClick} icon={isLiked()} />;
  }
}

export default Like;
