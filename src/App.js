import React from 'react';
import './App.css';
import Card1 from './Card1'
import Card2 from './Card2'
import Restart from './Restart';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      turn: '',
      class: 'square'
    };
  }

  render() {
    return (
      <div className="App-header">
      <h2>First to 20 points wins!</h2>
      {this.state.turn}
        <Card1 />
        <Card2 />
  
      </div>

    );
  }

  _restart = () => {
    this.setState({
      turn: 'Next player'
    })
  }
}


export default App;
