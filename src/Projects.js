import React, { Component } from "react";
import Project from "./Project";
import ProjectStore from "./store/ProjectStore";

class Projects extends Component {
  render() {

    const projects = ProjectStore.getProjectStore().map((project, i) => (
      <Project key={i} {...project} />
    ));

    return (
      <article className="panel" id="work">
        <div className="fadeInLoad">
          <header>
            <h1>Projects</h1>
          </header>
          {projects}
        </div>
      </article>
    );
  }
}

export default Projects;
