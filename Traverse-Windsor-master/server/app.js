import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import EventsPage from './src/pages/EventsPage';


class App extends Component {

  render() {
    return  (
      <div className="App">
        <EventsPage/>
      </div>
    );
  }
}