import { connect } from 'react-redux'
import Timer from './Timer'

const mapStateToProps = (state) => {
  return {
    work: state.dashboard.work,
    shortRest: state.dashboard.shortRest, 
    longRest: state.dashboard.longRest,
    iterations: state.dashboard.iterations,
    running: state.timer.running,
    counterView: state.dashboard.counter,
    notifier: state.dashboard.notifier
  }
}

const TimerContainer = connect(mapStateToProps)(Timer)

export default TimerContainer
