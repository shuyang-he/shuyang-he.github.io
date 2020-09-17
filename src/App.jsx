import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TopNav from "./components/TopNav/TopNav";
import NavBanner from "./components/NavBanner/NavBanner";
import Main from "./containers/Main/Main";
import Section from "./containers/Section/Section";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <TopNav />
        <NavBanner />
        <Switch>
          <Route path="/">
            <Main>
              <Section>
                <About />
              </Section>
              <Section>
                <Education />
              </Section>
              <Section>
                <Experience />
              </Section>
              <Section>
                <Projects />
              </Section>
              <Section>
                <Skills />
              </Section>
            </Main>
          </Route>
          <Route path="*">{/* <NotFound /> */}</Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
