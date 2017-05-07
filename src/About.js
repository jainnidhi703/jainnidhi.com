import React, { Component } from "react";
import me from "../public/images/me.jpg";

class About extends Component {
  render() {
    return (
      <article className="panel" id="me">
        <div className="fadeInLoad">
          <header>
            <h1><b>Hi!<br />I'm Nidhi.</b></h1>
            <div>
              An Innovative and Enthusiastic
              <br />
              Software Developer.
              <br />
              <div style={{height: '1em'}}/>
              <a
                className="grey-color"
                href="https://www.linkedin.com/in/nidhi-jain-06746188/"
                target="_blank"
              >
                <i className="icon-linkedin-square" />
              </a>
              <a
                className="grey-color social-icon-space"
                href="https://github.com/jainnidhi703/"
                target="_blank"
              >
                <i className="icon-github" />
              </a>
              <a
                className="grey-color social-icon-space"
                href="https://angel.co/nidhi-jain-5"
                target="_blank"
              >
                <i className="icon-angellist" />
              </a>
            </div>
          </header>
          <img className="jumplink pic" src={me} alt="" />
        </div>
      </article>
    );
  }
}

export default About;
