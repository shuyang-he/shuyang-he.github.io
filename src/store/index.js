import reducer from "../reducers/index";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

let store;
const midwares = [thunk];

if (
  !(
    window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__()
  )
) {
  store = createStore(reducer, applyMiddleware(...midwares));
} else {
  store = createStore(
    reducer,
    compose(
      applyMiddleware(...midwares),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}

export default store;
