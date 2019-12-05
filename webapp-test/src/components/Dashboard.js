import React from 'react'
import { connect } from 'react-redux'
import { 
  INCREASE_STRIKES, 
  INCREASE_BALLS, 
  INCREASE_HITS, 
  INCREASE_FOULS 
} from '../redux/actions'

function Dashboard(props) {

  return (
    <div>
      <button onClick={() => props.dispatch({ type: INCREASE_STRIKES })}>Strike</button>
      <button onClick={() => props.dispatch({ type: INCREASE_BALLS })}>Ball</button>
      <button onClick={() => props.dispatch({ type: INCREASE_FOULS })}>Foul</button>
      <button onClick={() => props.dispatch({ type: INCREASE_HITS })}>Hit</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps)(Dashboard)