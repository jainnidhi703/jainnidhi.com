import React, { Component } from "react";
import PropTypes from "prop-types";

class ProfileLink extends Component {
  render() {
    return (
      <a
        className={this.props.className}
        href={this.props.url}
        target="_blank"
      >
        <i className={this.props.icon} />
      </a>
    );
  }
}

ProfileLink.propTypes = {
  url: PropTypes.string.isRequired
};

export default ProfileLink;
