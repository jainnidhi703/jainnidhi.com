import React, { Component } from "react";
import PropTypes from "prop-types";

class Project extends Component {
  getUrlTag = (url, text) => {
    if (typeof url !== "undefined" || url !== null)
      return (
        <a href={url} target="_blank" style={{ textDecoration: "none" }}>
          {text == null ? url : text}
        </a>
      );
  };

  render() {
    // let gitUrl = this.getUrlTag(this.props.gitUrl);
    // let projectUrl = this.getUrlTag(
    //   this.props.projectUrl,
    //   this.props.projectUrlText
    // );

    let description = this.props.description;

    return (
      <div className="container">
        <div className="flex-item">
          <div className="comicSans">
            {this.props.name}
          </div>
          <div className="tech-wrapper">
            {this.props.technologies.map((tech, i) => (
              <span className="tech" key={i}> {tech}</span>
            ))}
          </div>
          <div style={{ paddingTop: "0.8em" }}>
            {description}
          </div>

        </div>
      </div>
    );
  }
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Project;
