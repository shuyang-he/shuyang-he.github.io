import reducer from "../reducers/index";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

let store;
const midwares = [thunk];

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...midwares))
  );
} else {
  store = createStore(reducer, compose(applyMiddleware(...midwares)));
}

export default store;
