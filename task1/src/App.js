import React, { Component } from 'react';
import Products from './Products.js';
import { Button } from 'react-bootstrap';
import Rating from './Rating.js';
import JumboTronComponent from './JumboTronComponent';
import UserFrom from './UserForm.js';
import GitHub from './GitHub.js';


class App extends Component {
  render() {
    const isValid = true;
  return (
    <div className="App">
    <GitHub />
    </div>
  );
  }
}
export default App;
