import React from 'react'
import Timer from './Timer'
import Dashboard from './Dashboard'
import SimpleDigitalCounter from './counters/SimpleDigitalCounter'
import CowNotifier from '../notifiers/CowNotifier'

// Outermost container.
//
// It contains pomodoro dashboard and pomodoro timer.
class Pomodoro extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      work: 25,
      shortRest: 5,
      longRest: 15,
      iterations: 4,
      running: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleStart = this.handleStart.bind(this)
    this.handleStop = this.handleStop.bind(this)
  }

  // Handles a change in a field from the dashboard.
  //
  // As all current fields must be integers, it acts in a generic way for any
  // of them, as far as it identifies its correspondent state property in a
  // `data-field` attribute.
  handleChange(event) {
    const field = event.target.attributes["data-field"].value

    this.setState({
      [field]: parseInt(event.target.value, 10)
    })
  }

  // Starts the timer.
  handleStart(event) {
    event.preventDefault()

    this.setState({
      running: true
    })
  }

  // Stops the timer.
  handleStop(event) {
    event.preventDefault()

    this.setState({
      running: false
    })
  }

  render() {
    const {running, work, shortRest, longRest, iterations} = this.state

    return (
      <div>
        <Dashboard
          handleStart = {this.handleStart}
          handleStop = {this.handleStop}
          handleChange = {this.handleChange}
          work = {this.state.work}
          shortRest = {this.state.shortRest}
          longRest = {this.state.longRest}
          iterations = {this.state.iterations}
          running = {running}
        />
        <Timer
          running={running}
          work={work}
          shortRest={shortRest}
          longRest={longRest}
          iterations={iterations}
          counter={SimpleDigitalCounter}
          notifier={CowNotifier}
        />
      </div>
    )
  }
}

export default Pomodoro
