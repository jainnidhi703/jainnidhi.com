import React, { Component } from "react";
import PropTypes from "prop-types";

class Technology extends Component {
  render() {
    return (
      <a href={this.props.url} target="_blank">
        <span className="menu-li">
          <img src={this.props.imageName} alt="" className="menu-img" />
        </span>
      </a>
    );
  }
}

Technology.propTypes = {
  imageName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Technology;
