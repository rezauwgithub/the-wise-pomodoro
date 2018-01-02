import React from 'react'
import PropTypes from 'prop-types'
import Counter from './Counter'

// Pomodoro timer.
//
// When it is running, it manages interval succession and iterations, but
// delegates the countdown visual counter to the `Counter component.
class Timer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: props.work
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.running) {
      this.work(1, nextProps.iterations, nextProps.work, nextProps.shortRest, nextProps.longRest)
    } else {
      this.updateCounter(nextProps.work)
    }
  }

  // Work interval.
  work(currentIteration, iterations, work, shortRest, longRest) {
    this.runInterval(work, () => {
      this.rest(currentIteration, iterations, work, shortRest, longRest)
    })
  }

  // Rest interval.
  rest(currentIteration, iterations, work, shortRest, longRest) {
    const rest = (currentIteration % iterations === 0) ? longRest : shortRest
    this.runInterval(rest, () => {
      this.work(currentIteration + 1, iterations, work, shortRest, longRest)
    })
  }

  // Generic interval.
  //
  // Receives the minutes it should last and a callback to be executed once
  // finished if the timer is still running
  runInterval(minutes, callback) {
    this.updateCounter(minutes)
    new Promise((resolve) =>
      setTimeout(resolve, minutes * 60 * 1000)
    ).then(() => {
      if (this.props.running) {
        this.props.notifier()
        callback()
      }
    })
  }

  // Update counter state
  updateCounter(value) {
    this.setState({
      counter: value
    })
  }

  render() {
    return (
      <Counter
        minutes={this.state.counter}
        running={this.props.running}
        counterView={this.props.counterView}
      />
    )
  }
}

Timer.propTypes = {
  work: PropTypes.number.isRequired,
  shortRest: PropTypes.number.isRequired,
  longRest: PropTypes.number.isRequired,
  iterations: PropTypes.number.isRequired,
  running: PropTypes.bool.isRequired,
  counterView: PropTypes.element.isRequired,
  notifier: PropTypes.element.isRequired
}

export default Timer
