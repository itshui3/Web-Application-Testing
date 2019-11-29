import React from 'react';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      scorekeeping : {
        strike: 0,
        ball: 0,
        hit: 0,
        foul: 0
      }
    }
  }

  handleScorekeeping = ev => {
    this.setState({ scorekeeping: {
      ...this.state.scorekeeping,
      [ev.target.name]: this.state.scorekeeping[ev.target.name] + 1 
      }
      
    })
  } // unable to refer to accurate state for previous value reference
  // was able to refer to it using square brackets 

  componentDidUpdate(prevProps, prevState) {
    // if strike is 3, if ball is 4, if hit is greater than before, and if foul is greater than before

    // hits increased between state change
    if (prevState.scorekeeping.hit < this.state.scorekeeping.hit) {
      console.log('reset')
      this.setState({ scorekeeping: {
        ...this.state.scorekeeping,
        strike: 0,
        ball: 0
      } })
    }
    // fouls increased between state change
    if (prevState.scorekeeping.foul < this.state.scorekeeping.foul) {
      // increases strikes by 1 up to 2
      if (this.state.scorekeeping.strike < 2) {
        this.setState({ scorekeeping: {
          ...this.state.scorekeeping,
          strike: this.state.scorekeeping.strike + 1
        } })
      }
    }
    // strikes reach 3
    if (this.state.scorekeeping.strike >= 3) {
      console.log('reset')
      this.setState({ scorekeeping: {
        ...this.state.scorekeeping,
        strike: 0,
        ball: 0
      } })
    }
    // balls reach 4
    if (this.state.scorekeeping.ball >= 4) {
      console.log('reset')
      this.setState({ scorekeeping: {
        ...this.state.scorekeeping,
        strike: 0,
        ball: 0
      } })
    }

  }
  // I need something to reset strikes & balls
  // 3 strikes, 4 balls

  render() {
    return (
      <div className="App">
        <Dashboard handleScorekeeping={this.handleScorekeeping} />
        <Display 
        strike={this.state.scorekeeping.strike} 
        ball={this.state.scorekeeping.ball} 
        hit={this.state.scorekeeping.hit}
        foul={this.state.scorekeeping.foul}
        // scorekeeping={{...this.state.scorekeeping}}
        />
      </div>
    );

  }

}

export default App;
