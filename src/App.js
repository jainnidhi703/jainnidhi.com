import React, { Component } from "react";
import { Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Work from "./Work";
import Project from "./Project";
import Skill from "./Skill";
import NavigationBar from "./NavigationBar";

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <NavigationBar />
        <Route exact path="/" component={About} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/work" component={Work} />
        <Route path="/projects" component={Project} />
        <Route path="/skills" component={Skill} />
      </div>
    );
  }
}

export default App;
