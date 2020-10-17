import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TopNav from "./components/TopNav/TopNav";
import NavBanner from "./components/NavBanner/NavBanner";
import Main from "./containers/Main/Main";
import Section from "./containers/Section/Section";
import SectionTitle from "./components/SectionTitle/SectionTitle";
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
        <TopNav />
        <NavBanner />
        <Switch>
          <Route path="/">
            <Main>
              <Section id={`about`}>
                <About />
              </Section>
              <Section id={`education`}>
                <SectionTitle title={`Education`}>
                  <Education />
                </SectionTitle>
              </Section>
              <Section id={`experience`}>
                <SectionTitle title={`Experience`}>
                  <Experience />
                </SectionTitle>
              </Section>
              <Section id={`projects`}>
                <SectionTitle title={`Projects`}>
                  <Projects />
                </SectionTitle>
              </Section>
              <Section id={`skills`}>
                <SectionTitle title={`Skills`}>
                  <Skills />
                </SectionTitle>
              </Section>
            </Main>
          </Route>
          <Route path="*">
            <Section>
              <NotFound />
            </Section>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
