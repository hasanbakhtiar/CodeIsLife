import { blogReducer } from "../reducers/blogreducer";
import { createStore, combineReducers } from "redux";

// Store Start
const configureStore = () => {
  const store = createStore(
    combineReducers({
        br:blogReducer
    })
  );
  return store;
};
export default configureStore;

// Store End
