import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation';
import Movie from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/not-found';

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <main className="container">
        <Route path="/rentals" component={Rentals} />
        <Route path="/customers" component={Customers} />
        <Route path="/movies" component={Movie} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/" exact component={Movie} />
        <Redirect to="/not-found" />
      </main>
    </React.Fragment>
  );
}

export default App;
