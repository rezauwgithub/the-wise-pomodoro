import React, { Component } from 'react';
import logo from './logo.svg';
import Pomodoro from './components/Pomodoro'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="columns">
          <header className="column col-12">
            <div className="text-center">
              <h1>The wise Pomodoro</h1>
            </div>
          </header>
        </div>
        <Pomodoro />
      </div>
    );
  }
}

export default App;
