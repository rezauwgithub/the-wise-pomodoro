import { connect } from 'react-redux'
import Timer from './Timer'

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

const TimerContainer = connect(mapStateToProps)(Timer)

export default TimerContainer
