import React, { Component } from 'react'
import { createStore } from 'redux'
import counterReducer from './counterReducer'
import connect from 'react-redux/lib/connect/connect'
import { store } from '.'
import {Provider} from 'react-redux'


class Counter extends Component {
  

  counterValue = store.getState()
  render() {
 
     return (
   <Provider store={store}>
      <p>
        Clicked: {this.counterValue} times
        {' '}
        <button onClick={() => store.dispatch({ type: 'INCREMENT' })}>
          +
        </button>
        {' '}
        <button onClick={() => store.dispatch({ type: 'DECREMENT' })}>
          -
        </button>

      </p>
    </Provider>
    )
      
  }
}
// function mapStateToProps(state){
// console.log("MAP");
//   return { counterValue: state.counterValue }
// }

// export default connect(mapStateToProps)(Counter);

export default Counter
// store.subscribe(()=>{})

