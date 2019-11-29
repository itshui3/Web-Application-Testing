import React from 'react';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      strike: 0,
      ball: 0,
      hit: 0,
      foul: 0
    }
  }

  handleScorekeeping = ev => {
    this.setState({ [ev.target.name]: this.state[ev.target.name] + 1 })
  } // unable to refer to accurate state for previous value reference
  // was able to refer to it using square brackets 


  // I need something to reset strikes & balls
  // 3 strikes, 4 balls

  render() {
    return (
      <div className="App">
        <Dashboard handleScorekeeping={this.handleScorekeeping} />
        <Display 
        // strike={this.state.strike} 
        // ball={this.state.ball} 
        // hit={this.state.hit}
        // foul={this.state.foul}
        appState={{...this.state}}
        />
      </div>
    );

  }

}

export default App;
