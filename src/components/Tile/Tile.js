import React from 'react';
import './tile.css';

class Tile extends React.Component {
  render() {
    const {
      imgSrc,
      text
    } = this.props;
    return (<div className='tile'>
      <div className='tile-img-container'>
        <img src={imgSrc} />
      </div>
      <div className='tile-text'>
        {text}
      </div>
    </div>)
  }
}

export default Tile;