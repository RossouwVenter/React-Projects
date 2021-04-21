import React, { Component } from 'react';
import Products from './Products.js';
import { Button } from 'react-bootstrap';
import Rating from './Rating.js';
import JumboTronComponent from './JumboTronComponent';
import UserFrom from './UserForm.js';
import GitHub2 from './GitHub2.js';


// class App extends Component {
//   render() {
//     const isValid = true;
//   return (
//     <div className="App">
//     <GitHub />
//     </div>
//   );
//   }
// }

class App extends Component {

  render() { 
    return (
      <div>
        <GitHub2 /> 
      </div>
    );
  }
}

export default App;
