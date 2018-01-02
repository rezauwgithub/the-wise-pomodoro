import { connect } from 'react-redux'
import Dashboard from './Dashboard'
import { start, stop, changeParameter } from '../actions'

const mapStateToProps = (state) => {
  return {
    work: state.dashboard.work,
    shortRest: state.dashboard.shortRest, 
    longRest: state.dashboard.longRest,
    iterations: state.dashboard.iterations,
    running: state.timer.running
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    start: (e) => {
      e.preventDefault()
      dispatch(start)
    },
    stop: (e) => {
      e.preventDefault()
      dispatch(stop)
    },
    changeParameter: (e) => {
      const target = e.target
      dispatch(
        changeParameter(target.name, target.value)
      )
    }
  }
}

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(Dashboard)

export default DashboardContainer
