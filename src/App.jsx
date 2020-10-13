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
                <SectionTitle title={`EDUCATION`}>
                  <Education />
                </SectionTitle>
              </Section>
              <Section id={`experience`}>
                <SectionTitle title={`EXPERIENCE`}>
                  <Experience />
                </SectionTitle>
              </Section>
              <Section id={`projects`}>
                <SectionTitle title={`PROJECTS`}>
                  <Projects />
                </SectionTitle>
              </Section>
              <Section id={`skills`}>
                <SectionTitle title={`SKILLS`}>
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
