import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import store from "./store/index";
import { disableReactDevTools } from "./helpers/utils";
import App from "./App";
import "normalize.css";
import "./reset.scss";
import "./base.scss";
import "./typography.scss";

let renderMethod = ReactDOM.render;
if (process.env.NODE_ENV === "production") {
  renderMethod = ReactDOM.hydrate;
  disableReactDevTools();
}

renderMethod(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
