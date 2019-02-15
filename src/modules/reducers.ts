import { combineReducers } from "redux";

import authDuckReducer from "./ducks/auth.duck";
import batchingDuckReducer from "./ducks/batching.duck";
import collectDuckReducer from "./ducks/collect.duck";
import counterDuckReducer from "./ducks/counter.duck";

const rootReducer = combineReducers({
  counter: counterDuckReducer,
  batching: batchingDuckReducer,
  collect: collectDuckReducer,
  auth: authDuckReducer
});

export default rootReducer;
