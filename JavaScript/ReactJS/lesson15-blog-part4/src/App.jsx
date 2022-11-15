import React from "react";
import configureStore from "./store/configureStore";
import { addBlog } from "./actions/blogaction";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
const store = configureStore();

// Dispach Start
store.subscribe(()=>{
  console.log(store.getState())
});
store.dispatch(addBlog({title:"hello1",desc:"new desc1"}))
store.dispatch(addBlog({title:"hello2",desc:"new desc2"}))
store.dispatch(addBlog({title:"hello3",desc:"new desc3"}))


// store.dispatch(removeBlog({id:blog5.blog.id}))


// Dispach End




const App = () => {
  return <Provider store={store}>
    <AppRouter />
  </Provider>;
};

export default App;
