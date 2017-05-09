import React, { Component } from "react";

class SkillImage extends Component {
  render() {
    return (
      <div className="3u 12u$(mobile)">
        <a className="image fit" href={this.props.url} target="_blank">
          <img src={this.props.image} alt="" />
        </a>
      </div>
    );
  }
}

export default SkillImage;
