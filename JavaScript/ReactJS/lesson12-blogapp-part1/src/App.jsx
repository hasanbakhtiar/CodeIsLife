import React from "react";
import { createStore } from "redux";
import { v4 as uuid } from 'uuid';
// Blog App

// Action Start
const addBlog=({title,desc})=>({
  type:"ADD_BLOG",
  blog:{
    id:uuid(),
    title:title,
    desc: desc
  },
  a:{
    data:1
  }
})
// Action End




// Reducer Start
const blogState = [];
const blogReducer = (state = blogState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state, action.blog, action.a]

    
    default:
      return state;
  }
};
// Reducer End




// Store Start
const store = createStore(blogReducer);
// Store End



// Dispach Start
store.subscribe(()=>{
  console.log(store.getState())
});
store.dispatch(addBlog({title:"hello",desc:"new desc"}))
store.dispatch(addBlog({title:"data",desc:"new data"}))

// Dispach End




const App = () => {
  return <div>App</div>;
};

export default App;
