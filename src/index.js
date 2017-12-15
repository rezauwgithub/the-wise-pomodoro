import React from 'react';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import pomodoroReducer from './reducer'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'spectre.css/dist/spectre.min.css'

const store = createStore(pomodoroReducer, applyMiddleware(
  thunkMiddleware
))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
