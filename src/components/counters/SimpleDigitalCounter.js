import React from 'react'
import PropTypes from 'prop-types'

// Simple counter that displays the counter through digits.
function SimpleDigitalCounter(props) {
  const {minutes, seconds} = props
  const formatTime = (value) => {
    return value.toString().padStart(2, "0")
  }


  return (
    <div className="columns">
      <div className="column col-12 text-center d-inline-block" style={ { "font-size": "6em" } }>
        <span>{formatTime(minutes)}:{formatTime(seconds)}</span>
      </div>
    </div>
  )
}

SimpleDigitalCounter.propTypes = {
  running: PropTypes.bool,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired
}

export default SimpleDigitalCounter
