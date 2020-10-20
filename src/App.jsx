import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Banner from "./components/Banner/Banner";
import Main from "./components/Main/Main";
import Section from "./components/Section/Section";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import NotFound from "./components/NotFound/NotFound";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Banner />
        <Switch>
          <Route path="/" exact>
            <Main>
              <Section id={`about`}>
                <About />
              </Section>
              <Section id={`education`}>
                <Title title={`Education`} />
                <Education />
              </Section>
              <Section id={`experience`}>
                <Title title={`Experience`} />
                <Experience />
              </Section>
              <Section id={`projects`}>
                <Title title={`Projects`} />
                <Projects />
              </Section>
              <Section id={`skills`}>
                <Title title={`Skills`} />
                <Skills />
              </Section>
            </Main>
          </Route>
          <Route path="*">
            <Main>
              <Section>
                <NotFound />
              </Section>
            </Main>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
