import React, { Component } from "react";
import PropTypes from "prop-types";

class Project extends Component {
  render() {
    return (
      <div className="container">
        <div className="flex-item">
          <div className="comicSans">
            {this.props.name}
          </div>
        </div>
      </div>
    );
  }
}

Project.propTypes = {
  name: PropTypes.string.isRequired
};

export default Project;
