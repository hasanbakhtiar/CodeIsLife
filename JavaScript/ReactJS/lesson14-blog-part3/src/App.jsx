import React from "react";
import configureStore from "./store/configureStore";
import { addBlog,removeBlog } from "./actions/blogaction";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
const store = configureStore();

// Dispach Start
store.subscribe(()=>{
  console.log(store.getState())
});
// const blog1 = store.dispatch(addBlog({title:"hello",desc:"new desc"}))
// const blog2 = store.dispatch(addBlog({title:"data1",desc:"new data1"}))
// const blog3 = store.dispatch(addBlog({title:"data2",desc:"new data2"}))
// const blog4 = store.dispatch(addBlog({title:"data3",desc:"new data3"}))
// const blog5 = store.dispatch(addBlog({title:"data4",desc:"new data4"}))
// const blog6 = store.dispatch(addBlog({title:"data5",desc:"new data5"}))
// const blog7 = store.dispatch(addBlog({title:"data6",desc:"new data6"}))
// const blog17 = store.dispatch(addBlog({title:"data7",desc:"new data7"}))

// store.dispatch(removeBlog({id:blog5.blog.id}))


// Dispach End




const App = () => {
  return <Provider store={store}>
    <AppRouter />
  </Provider>;
};

export default App;
