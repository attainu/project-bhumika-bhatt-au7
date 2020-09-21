import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import reducers from "../reducers";

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

// store.subscribe(() => console.log(store.getState()));

export default store;
