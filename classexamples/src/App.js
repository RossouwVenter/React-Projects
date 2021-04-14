import './App.css';
import React,{compoment} from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>   
            {/*just diplaying a button  */}
        <span>
        <button
          onClick={() => this.onDismiss()}
          type="button"
        >
          Do not click
        </button>
        </span>
        
      </div>
    );
  }
}


  

export default App;