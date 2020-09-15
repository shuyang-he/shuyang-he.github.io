import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TopNav from "./components/TopNav/TopNav";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <TopNav />
        <Switch>
          <Route path="/"></Route>
          <Route path="*">{/* <NotFound /> */}</Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
