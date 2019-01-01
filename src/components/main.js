import React from "react";

import About from "./aboutme";
import Projects from "./projects";
import Resume from "./resume";
import Contact from "./contact";
import LandingPage from "./landingpage";

import { Switch, Route } from "react-router-dom";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/aboutme" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/resume" component={Resume} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
);

export default Main;
