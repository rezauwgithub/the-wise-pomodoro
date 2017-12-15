import React from 'react'
import DashboardContainer from './DashboardContainer'
import TimerContainer from './TimerContainer'
import QuoteContainer from './QuoteContainer'

// Outermost container.
//
// It contains pomodoro dashboard and pomodoro timer.
class Pomodoro extends React.Component {
  render() {
    return (
      <div className="divider">
        <TimerContainer />
        <DashboardContainer />
        <QuoteContainer />
      </div>
    )
  }
}

export default Pomodoro
