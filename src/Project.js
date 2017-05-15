import React, { Component } from "react";

class Project extends Component {
  render() {
    return (
      <article className="panel" id="work">
        <div className="fadeInLoad">
          <header>
            <h1>Projects</h1>
            <div className="container">
              <div className="flex-item">
                <div className="comicSans">
                  Juniper Networks - Intern
                  <i>[ 01/2015 - 06/2015 ]</i>
                </div>
                <ul>
                  <li>
                    Built tools to
                    <b> Extract/Process Internet Session Data </b>
                    and block harmful IP addresses on top of the router.
                  </li>
                </ul>
              </div>
            </div>
          </header>
        </div>
      </article>
    );
  }
}

export default Project;
