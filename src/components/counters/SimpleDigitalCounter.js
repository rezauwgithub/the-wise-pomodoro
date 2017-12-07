import React from 'react'
import PropTypes from 'prop-types'

// Simple counter that displays the counter through digits.
function SimpleDigitalCounter(props) {
  const {minutes, seconds} = props
  const formatTime = (value) => {
    return value.toString().padStart(2, "0")
  }


  return (
    <h1>{formatTime(minutes)}::{formatTime(seconds)}</h1>
  )
}

SimpleDigitalCounter.propTypes = {
  running: PropTypes.bool,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired
}

export default SimpleDigitalCounter
