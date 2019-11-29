import React from 'react';

function Display(props) {
  console.log(props);
  return (
    <div>
      <h1>At Bat</h1>
      <h3>Balls: {props.appState.ball}</h3>
      <h3>Strikes: {props.appState.strike}</h3>
      <h3>Hits: {props.appState.hit}</h3>
      <h3>Fouls: {props.appState.foul}</h3>

    </div>
  )
  

}

export default Display;