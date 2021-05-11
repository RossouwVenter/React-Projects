// Import React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () =>{
    const buttonText = 'Click me'
    return <div>
        <label className ="label" htmlFor="name">Enter name:</label>
        <input id="name" type="text"/>
        <button style={{BackgroundColor: 'blue', Color: 'white'}}>{buttonText}</button>
        {/* Can be double or single quotes. */}
    </div>
};

// Take the react component and show on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);