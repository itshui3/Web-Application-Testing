import React from 'react'
import { connect } from 'react-redux'
import './Display.scss'

function Display(props) {

  return (
    <div>
      <h2>At Bat</h2>
      <ul className="atBatList">
        <li>Strikes: {props.strikes}</li>
        <li>Balls: {props.balls}</li>
        <li>Fouls: {props.fouls}</li>
        <li>Hits: {props.hits}</li>
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    strikes: state.atBat.strikes,
    balls: state.atBat.balls,
    fouls: state.atBat.fouls,
    hits: state.atBat.hits
  }
}

export default connect(mapStateToProps)(Display)