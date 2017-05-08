import React, { Component } from "react";
import ProfileLinks from "./ProfileLinks";
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
              &lt;Developer /&gt;.
              <br />
              <ProfileLinks/>
            </div>
          </header>
          <img className="jumplink pic" src={me} alt="" />
        </div>
      </article>
    );
  }
}

export default About;
