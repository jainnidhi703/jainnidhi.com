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
    let gitUrl = this.getUrlTag(this.props.gitUrl);
    let projectUrl = this.getUrlTag(this.props.projectUrl, this.props.name);

    return (
      <div className="container">
        <div className="flex-item">
          <div className="comicSans">
            {this.props.name}
          </div>
          {gitUrl}
        </div>
      </div>
    );
  }
}

Project.propTypes = {
  name: PropTypes.string.isRequired
};

export default Project;
