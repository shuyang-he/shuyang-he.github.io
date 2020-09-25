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
    composeEnhancers(
      applyMiddleware(...midwares),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
} else {
  store = createStore(reducer, composeEnhancers(applyMiddleware(...midwares)));
}

export default store;
