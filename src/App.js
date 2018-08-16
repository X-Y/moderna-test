import React, { Component } from 'react';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className='main-container'>
          <Home />
        </div>
        <footer className='app-footer'>
          Blabla
        </footer>
      </div>
    );
  }
}

export default App;
