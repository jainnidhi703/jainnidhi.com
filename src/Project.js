import React, { Component } from "react";
import PropTypes from "prop-types";

class Project extends Component {
  getUrlTag = (url, text) => {
    if (typeof url !== "undefined" || url !== null)
      return (
        <a
          href={url}
          target="_blank"
          style={{ textDecoration: "none", float: "right" }}
        >
          {text == null ? url : text}
        </a>
      );
  };

  render() {
    // let gitUrl = this.getUrlTag(this.props.gitUrl);
    // let projectUrl = this.getUrlTag(this.props.projectUrl, this.props.name);

    return (
      <div className="container">
        <div className="flex-item">
          <div className="comicSans">
            {this.props.name}
          </div>
          <div className="tech-wrapper">
            {this.props.technologies.map((tech, i) => (
              <span className="tech"> {tech}</span>
            ))}
            {/*{gitUrl}*/}
          </div>
          <div>
            {this.props.description}
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
