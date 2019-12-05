import React from 'react';

function Display(props) {

  return (
    <div>
      <h1>At Bat</h1>
      <h3>Balls: {props.ball}</h3>
      <h3>Strikes: {props.strike}</h3>
      <h3>Hits: {props.hit}</h3>
      <h3>Fouls: {props.foul}</h3>
    </div>
  )
}

export default Display;