import React, { Component } from "react";
import Project from "./Project";

class Projects extends Component {
  render() {
    return (
      <article className="panel" id="work">
        <div className="fadeInLoad">
          <header>
            <h1>Projects</h1>
          </header>
          <div>
            <Project title="Recommendation System" />
            <Project title="Content Ingestion System" />
            <Project title="Flink Aggregations" />
            <Project title="History Reconstruction" />
            <Project title="Open Source Contribution" />
            <Project title="Recommendation System" />
            <Project title="Recommendation System" />
          </div>
        </div>
      </article>
    );
  }
}

export default Projects;
