import React, { Component } from 'react';
import Movie from './components/movies';

class App extends Component {
  state = {};
  render() {
    return (
      <main className="container">
        <Movie />
      </main>
    );
  }
}

export default App;
