import React, { Component } from "react";

class ProfileLink extends Component {
  render() {
    return (
      <a
        className={this.props.className + " grey-color"}
        href={this.props.url}
        target="_blank"
      >
        <i className={this.props.icon} />
      </a>
    );
  }
}

export default ProfileLink;
