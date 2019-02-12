import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Weather from './components/Weather';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route path="/" component={Home} exact />
          <Route path="/weather" component={Weather} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
