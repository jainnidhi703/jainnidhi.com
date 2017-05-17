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
    // lest projectUrl = this.getUrlTag(
    //   this.props.projectUrl,
    //   this.props.projectUrlText
    // );

    return (
      <div className="w3-card-4">
        <header className="w3-container w3-light-grey">
          <h3>
            {this.props.name}
          </h3>
        </header>
        <div className="w3-container">
          <img
            src={this.props.img}
            alt=""
            className="w3-left w3-circle w3-margin-right"
          />
          <p>
            {this.props.description}
          </p>
          <br />
        </div>
        <div className="w3-button w3-block w3-dark-grey">
          {this.props.technologies.map((tech, i) => (
            <span className="tech" key={i}> {tech}</span>
          ))}
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
