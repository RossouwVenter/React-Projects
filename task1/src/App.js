import React, { Component } from 'react';
import Products from './Products.js';
import { Button } from 'react-bootstrap';
import Rating from './Rating.js';
import JumboTronComponent from './JumboTronComponent';
import UserFrom from './UserForm.js';

class App extends Component {
  render() {
    const isValid = true;
  return (
    <div className="App">
    <UserFrom />
    </div>
  );
  }
}
export default App;
