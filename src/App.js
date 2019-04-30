import React from 'react';
import logo from './logo.svg';
import './App.css';
import Widget from './Widget'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      shouldShowWidget: true, 
      widgetState: 0
    };
  }

  render() {
    return (
      <div className="App">
      {/* no anon function, since no custom args passed to _toggleShowWidget */}
      <button onClick={this._toggleShowWidget}>flip it</button>
      { this.state.shouldShowWidget 
        ? <Widget 
          saveState={this._saveWidgetState}
          startingValue={this.state.widgetState}
        /> 
        : 'now you dont' 
      }
      </div>
    );
  }

  
  _toggleShowWidget = () => {
    this.setState({
      shouldShowWidget: !this.state.shouldShowWidget
    });
  }

  _saveWidgetState = (widgetState) => {
    this.setState({
      widgetState
    });
  }



}


export default App;
