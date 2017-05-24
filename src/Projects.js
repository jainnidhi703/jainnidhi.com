import React, { Component } from "react";
import Project from "./Project";
import ProjectStore from "./store/ProjectStore";
import reco from "../public/images/reco.svg";
import flink from "../public/images/flink-aggregation.svg";
import cis from "../public/images/cis.svg";
import ir from "../public/images/ir.svg";
import open from "../public/images/open.svg";
import www from "../public/images/www.svg";

const images = [reco, flink, cis, www, ir, open];

class Projects extends Component {
  render() {

    const projects = ProjectStore.map((project, i) => (
      <Project key={i} {...project} img={images[i]} />
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
