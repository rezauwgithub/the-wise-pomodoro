import React from 'react';
import PropTypes from 'prop-types'

// Countdown counter.
//
// It manages the countdown from given minutes, delegating the actual view to a
// functional component.
class Counter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      minutes: props.minutes,
      seconds: 0
    }
  }

  componentDidMount() {
    setInterval(() => {
      if (this.props.running) {
        if (this.state.seconds === 0) {
          this.setState({
            minutes: this.state.minutes - 1,
            seconds: 59
          })
        } else {
          this.setState({
            seconds: this.state.seconds - 1
          })
        }
      }
    }, 1000)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      running: nextProps.running,
      minutes: nextProps.minutes,
      seconds: 0
    })
  }

  render() {
    return (
      <this.props.counterView
        running = {this.props.running}
        minutes = {this.state.minutes}
        seconds = {this.state.seconds}
      />
    )
  }
}

Counter.propTypes = {
  minutes: PropTypes.number.isRequired,
  running: PropTypes.bool.isRequired,
  counterView: PropTypes.element.isRequired
}

export default Counter
