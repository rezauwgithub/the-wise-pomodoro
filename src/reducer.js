import SimpleDigitalCounter from './components/counters/SimpleDigitalCounter'
import CowNotifier from './notifiers/CowNotifier'

const initialState = {
  work: 25,
  shortRest: 5,
  longRest: 15,
  iterations: 4,
  running: false,
  counter: SimpleDigitalCounter,
  notifier: CowNotifier
}

const store = (state = initialState, action) => {
  switch (action.type) {
    case 'START':
      return { ...state, running: true }
    case 'STOP':
      return { ...state, running: false }
    case 'CHANGE_PARAMETER':
      return {...state, [action.parameter]: parseInt(action.value, 10) }
    default:
      return state
  }
}

export default store
