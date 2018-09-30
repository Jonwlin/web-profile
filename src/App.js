import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Profile from './Profile';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Profile />
      </div>
    );
  }
}

export default App;
