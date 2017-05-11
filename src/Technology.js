import React, { Component } from "react";
import PropTypes from "prop-types";

class Technology extends Component {
  render() {
    return (
      <span className="menu-li">
        <img src={this.props.imageName} alt="" className="menu-img" />
      </span>
    );
  }
}

Technology.propTypes = {
  imageName: PropTypes.string.isRequired
};

export default Technology;
