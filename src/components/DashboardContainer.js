import { connect } from 'react-redux'
import Dashboard from './Dashboard'
import { start, stop, changeParameter } from '../actions'

const mapStateToProps = (state) => {
  return {
    work: state.work,
    shortRest: state.shortRest, 
    longRest: state.longRest,
    iterations: state.iterations,
    running: state.running
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
