import { applyMiddleware, compose, createStore as cs } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reduxThunk from "redux-thunk";

import reducers from "./reducers";

const createStore = () => {
  const W = typeof (window as any) !== "undefined" && (window as any);
  const composeEnhancers = W.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(applyMiddleware(reduxThunk));

  const persistConfig = {
    storage,
    key: "root"
  };

  const persistedReducer = persistReducer(persistConfig, reducers);

  const store = cs(persistedReducer, enhancer);
  const persistor = persistStore(store);

  return { store, persistor };
};
export default createStore;
