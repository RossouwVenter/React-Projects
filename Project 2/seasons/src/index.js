import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    constructor(props) {
        super(props);
        
        // THIS IS THE ONLY TIME we do direct assignment to the this.state
        this.state = { lat: null,errorMessage: '' };
        // initialize State object

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // Called setSate!!!!
                this.setState({ lat: position.coords.latitude })
            },
            // Failure callback >
            err => {
                this.setState({errorMessage: err.message})
            }
        );
    }


    // We have to define render!!!
    render(){
        return (
        <div>
            Latitude: {this.state.lat} 
            <br /> 
            Error: {this.state.errorMessage}
        </div>
        );
    }
}

ReactDom.render(
    <App />,
    document.querySelector('#root')
);