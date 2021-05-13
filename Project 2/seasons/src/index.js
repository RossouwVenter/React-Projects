import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { lat: null };
        // initialize State object
    }


    // We have to define render!!!
    render(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            // Failure callback >
            (err) => console.log(err)
        );

        return <div>Latitude: </div>;
    }
}

ReactDom.render(
    <App />,
    document.querySelector('#root')
);