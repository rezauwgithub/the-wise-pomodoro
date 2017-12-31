import { connect } from 'react-redux'
import Timer from './Timer'
import { fetchQuote } from '../actions'

const mapStateToProps = (state) => {
  return {
    work: state.work,
    shortRest: state.shortRest, 
    longRest: state.longRest,
    iterations: state.iterations,
    running: state.running,
    counterView: state.counter,
    notifier: state.notifier
  }
}

const mapDispatchToWork = (dispatch) => {
  return {
    fetchQuote: () => { dispatch(fetchQuote()) }
  }
}

const TimerContainer = connect(mapStateToProps, mapDispatchToWork)(Timer)

export default TimerContainer
