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
import Skills from "./components/Abilities/Abilities";

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
                <SectionTitle id={`education`} title={`EDUCATION`}>
                  <Education />
                </SectionTitle>
              </Section>
              <Section>
                <SectionTitle id={`experience`} title={`EXPERIENCE`}>
                  <Experience />
                </SectionTitle>
              </Section>
              <Section>
                <SectionTitle id={`projects`} title={`PROJECTS`}>
                  <Projects />
                </SectionTitle>
              </Section>
              <Section>
                <SectionTitle id={`skills`} title={`SKILLS`}>
                  <Skills />
                </SectionTitle>
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
