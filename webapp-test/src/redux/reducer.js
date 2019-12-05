import { 
  INCREASE_STRIKES, 
  INCREASE_BALLS, 
  INCREASE_HITS, 
  INCREASE_FOULS 
} from './actions'

const initialState = {
  score: {
    home: 0,
    away: 0
  },
  atBat: {
    strikes: 0,
    balls: 0,
    fouls: 0,
    hits: 0
  },
  lineup: []

}

export const reducer = (state = initialState, { type, payload}) => {
  switch(type) {
    case INCREASE_STRIKES:
      return {
        ...state,
        atBat: {
          ...state.atBat,
          strikes: state.atBat.strikes + 1
        }
      }
    case INCREASE_BALLS:
        return {
          ...state,
          atBat: {
            ...state.atBat,
            balls: state.atBat.balls + 1
          }
        }
    case INCREASE_HITS:
        return {
          ...state,
          atBat: {
            ...state.atBat,
            hits: state.atBat.hits + 1
          }
        }
    case INCREASE_FOULS:
        return {
          ...state,
          atBat: {
            ...state.atBat,
            fouls: state.atBat.fouls + 1
          }
        }

    default:
      return state
  }
}