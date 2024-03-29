import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { jobsReducer } from "./reducers/jobsReducers";
import { loaderReducer } from "./reducers/loaderReducer";
import { usersReducer } from "./reducers/usersReducers";



const rootReducer = combineReducers({
  jobsReducer: jobsReducer,
  loaderReducer : loaderReducer,
  usersReducer: usersReducer,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;