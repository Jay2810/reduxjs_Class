import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './Counter'
import counterReducer from './counterReducer'
import { Store } from 'redux'
import {Provider} from 'react-redux'
export const store = createStore(counterReducer)

const render = () => ReactDOM.render(
  <Provider store={store} >
  <Counter/>
  </Provider>,
  document.getElementById('root')
)

render()
// store.subscribe(render)
