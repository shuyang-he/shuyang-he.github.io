import reducer from "../reducers/index";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";

const composeEnhancers = composeWithDevTools({});

let store;
const midwares = [thunk];

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  store = createStore(
    reducer,
    compose(
      applyMiddleware(...midwares),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
} else {
  store = createStore(reducer, applyMiddleware(...midwares));
}

export default store;
