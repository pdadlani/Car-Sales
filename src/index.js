import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducer } from './reducers';

import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

// STEP 1 - Create a store! Pass our store object into the Redux Provider component that is wrapped around <App />
export const store = createStore(reducer);

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  rootElement
);
