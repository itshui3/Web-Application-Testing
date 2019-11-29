import React from 'react';

//My Components
import Display from './Display';

class Dashboard extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <>
      <div>
        <h1>Dashboard: </h1>
        <button 
        onClick={this.props.handleScorekeeping}
        name='strike'
        >Strike: </button>

        <button
        onClick={this.props.handleScorekeeping}
        name='ball'
        >Ball: </button>

        <button
        onClick={this.props.handleScorekeeping}
        name='hit'
        >Hit: </button>

        <button
        onClick={this.props.handleScorekeeping}
        name='foul'
        >Foul: </button>
      </div>
      </>
    )
  }

}

export default Dashboard;

// Allows user to record activity