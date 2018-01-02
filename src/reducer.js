import { combineReducers } from 'redux'

const timerInitialState = {
  running: false
}

const dashboardInitialState = {
  work: 25,
  shortRest: 5,
  longRest: 15,
  iterations: 4
}

const timer = (state = timerInitialState, action) => {
  switch (action.type) {
    case 'START':
      return { ...state, running: true }
    case 'STOP':
      return { ...state, running: false }
    default:
      return state
  }
}

const dashboard = (state = dashboardInitialState, action) => {
  switch (action.type) {
    case 'CHANGE_PARAMETER':
      const integerValue = parseInt(action.value, 10)
      const value = Number.isNaN(integerValue) ? 0 : integerValue
      return {...state, [action.parameter]: value }
    default:
      return state
  }
}

const store = combineReducers({
  timer,
  dashboard
})

export default store
