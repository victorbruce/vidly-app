import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

class Like extends Component {
  render() {
    const { liked, onClick} = this.props;

    return(
      <FontAwesomeIcon onClick={onClick} icon={liked ? 'heart' : farHeart} />
    )
  }
}

export default Like;