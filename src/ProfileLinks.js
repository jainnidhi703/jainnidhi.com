import React, { Component } from "react";
import ProfileLink from "./ProfileLink";

class ProfileLinks extends Component {
  render() {
    return (
      <div style={{ paddingTop: "1em" }}>
        <ProfileLink
          url="https://www.linkedin.com/in/nidhi-jain-06746188/"
          icon="icon-linkedin-square"
        />
        <ProfileLink
          className="social-icon-space"
          url="https://github.com/jainnidhi703/"
          icon="icon-github"
        />
        <ProfileLink
          className="social-icon-space"
          url="https://angel.co/nidhi-jain-5"
          icon="icon-angellist"
        />
      </div>
    );
  }
}

export default ProfileLinks;
