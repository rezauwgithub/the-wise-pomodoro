import React from 'react'
import DashboardContainer from './DashboardContainer'
import TimerContainer from './TimerContainer'

// Outermost container.
//
// It contains pomodoro dashboard and pomodoro timer.
class Pomodoro extends React.Component {
  render() {
    return (
      <div>
        <DashboardContainer />
        <TimerContainer />
      </div>
    )
  }
}

export default Pomodoro
