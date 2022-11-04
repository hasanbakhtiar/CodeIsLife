import React from "react";
import { createStore } from "redux";

// state
const initalState = {
  count: 0,
};

// store
const store = createStore(
  // reducer
  (state = initalState, action) => {
    switch (action.type) {
      case "INCREMENT":
        return{
            count: state.count + 1
        }
      case "DECREMENT":
        return{
            count: state.count - 1
        }
      case "RESET":
        return{
            count: 0
        }
      default:
        return{
            count: state.count
        }
    }
  }
);

store.subscribe(()=>{
    console.log(store.getState());
})


store.dispatch({
    type:"INCREMENT"
})

store.dispatch({
    type:"INCREMENT"
})

store.dispatch({
    type:"INCREMENT"
})

store.dispatch({
    type:"INCREMENT"
})


const App = () => {
  return <div>Counter</div>;
};

export default App;
