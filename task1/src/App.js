import React, { Component } from 'react';
import Products from './Products.js';
import { Button } from 'react-bootstrap';
import Rating from './Rating.js';

class App extends Component {
  render() {
    const isValid = true;

  return (
    <div className="App">
    <Products /> 
    </div>
  );
  }
}
export default App;
