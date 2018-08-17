import React from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';

import { getInsurances, getFailedStatus } from '../../redux/selectors/api';
import Tile from '../../components/Tile/Tile';

import './home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.paginationAmount = 8;
    this.state = {
      pagination : 1
    }
  }
  makeTiles() {
    const tiles = this.props.insurances;
    return tiles
      .slice(0, this.state.pagination * this.paginationAmount)
      .map((one, index) => (
        <Tile
          key={`tile-${index}`}
          imgSrc={one.image.href}
          href={one.url}
          text={one.name}
          />
      )
    );
  }
  moreTiles = () => {
    this.setState({
      pagination: this.state.pagination + 1
    });
  }
  allTilesVisible = () => {
    return this.state.pagination * this.paginationAmount >= this.props.insurances.length;
  }
  render() {
    if(this.props.insurances.length === 0) {
      return (<div className='home home--waiting'>
        Please Wait...
      </div>);
    }
    if(this.props.failedStatus) {
      return (<div className='home home--error'>
        Woops! Something went wrong
      </div>);
    }
    return (<div className='home'>
      <div className='home-tiles-container'>
        {this.makeTiles()}
      </div>
      <div className='home-tiles-more-container'>
        {!this.allTilesVisible() &&
          <a className='home-tiles-more' onClick={this.moreTiles}>Visa fler</a>
        }
      </div>
    </div>)
  }
}

const mapStateToProps = state => {
  return {
    insurances: getInsurances(state),
    failedStatus: getFailedStatus(state)
  }
}


Home.defaultProps = {
  insurances: []
}
Home.propTypes = {
  insurances: T.array
}

export default connect(mapStateToProps)(Home);