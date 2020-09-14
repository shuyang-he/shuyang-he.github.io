import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Nav from "./components/Nav/Nav";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/"></Route>
          <Route path="*">{/* <NotFound /> */}</Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
