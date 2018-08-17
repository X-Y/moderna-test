import React, { Component } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';

import { fetchMainApi } from './redux/actions/api';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.initialRequests();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className='main-container'>
          <Home />
        </div>
        <footer className='app-footer'>
        </footer>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initialRequests: fetchMainApi(dispatch)
  }
};

App.defaultProps = {
  initialRequests: () => {}
};
App.propTypes = {
  initialRequests: T.func
};

export default connect(null, mapDispatchToProps)(App);
