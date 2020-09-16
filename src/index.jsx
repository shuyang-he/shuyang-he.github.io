import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./App";
import "./normalize.css";
import "./base.scss";

try {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector("#root")
  );
} catch (error) {
  console.log(error);
}
