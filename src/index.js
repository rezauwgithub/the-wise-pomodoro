import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import pomodoroReducer from './reducer'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'spectre.css/dist/spectre.min.css'

const store = createStore(pomodoroReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
