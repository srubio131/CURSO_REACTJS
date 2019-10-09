import React from 'react';
import { render } from 'react-dom';
import CounterContainerRedux from './containers/Counter';

import { counterAppReducer } from './reducers'
import { createStore } from 'redux'

import { Provider } from 'react-redux'

const store = createStore(counterAppReducer)

render(
  <Provider store={store}>
    <CounterContainerRedux />
  </Provider>,
  document.getElementById('root')
)