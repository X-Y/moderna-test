import React from 'react';
import T from 'prop-types';

import './tile.css';

class Tile extends React.Component {
  render() {
    const {
      imgSrc,
      text,
      href
    } = this.props;
    return (<div className='tile'>
      <a href={href}>
        <div className='tile-img-container'>
          <img
            className='tile-img'
            src={imgSrc}
            alt='' />
        </div>
        <div className='tile-text'>
          {text}
        </div>
      </a>
    </div>)
  }
}

Tile.defaultProps = {
  imgSrc: '',
  text: '',
  href: ''
}
Tile.propTypes = {
  imgSrc: T.string,
  text: T.string,
  href: T.string
}
export default Tile;