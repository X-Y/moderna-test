import React from 'react';

import Tile from '../../components/Tile/Tile';

class Home extends React.Component {
  makeTiles() {
    const tiles = new Array(6).fill().map((one, index) => ({imgSrc:index+'.jpg', text:index+'blabla'}));
    console.log(tiles);
    return tiles.map((one, index) => (
      <Tile 
        key={`tile-${index}`}
        imgSrc={one.imgSrc}
        text={one.text}
        />
    ))
  }
  render() {
    return (<div className='home'>
      <div className='home-tiles-container'>
        {this.makeTiles()}
      </div>
    </div>)
  }
}

export default Home;