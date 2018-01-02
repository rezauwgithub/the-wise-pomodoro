import React, { Component } from 'react';
import DashboardContainer from './components/DashboardContainer'
import TimerContainer from './components/TimerContainer'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="columns">
          <header className="column col-12">
            <div className="text-center">
              <h1>The wise Pomodoro</h1>
              <p>
                 &#10003; Simple
                 &#10003; 100% offline
                 &#10003; Persists config
              </p>
            </div>
          </header>
        </div>
        <div className="divider">
          <TimerContainer />
          <DashboardContainer />
        </div>
      </div>
    );
  }
}

export default App;
