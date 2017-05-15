import React, { Component } from "react";
import juniper from "../public/images/juniper.jpg";
import dailyhunt from "../public/images/dailyhunt.jpg";

class Work extends Component {
  render() {
    return (
      <article id="work" className="panel">
        <div className="fadeInLoad">
          <header>
            <h1>Experience</h1>
          </header>
          <div className="container">
            <div className="fixed">
              <a href="http://www.dailyhunt.in" target="_blank">
                <img src={dailyhunt} alt="" />
              </a>
            </div>

            <div className="flex-item">
              <div>
                <b>DailyHunt - Software Engineer</b>
                <i style={{ float: "right" }}> [ 07/2015 - Present ]</i>
              </div>
              <ul>
                <li>
                  Being a part of Personalization & Analytics team, worked on systems to build User Preferences and Feed Recommendations for 40 million users.
                </li>
                <li>
                  Developed content ingestion and meta-system for 17 languages, about 450 newspapers and  50,000 articles on day to day basis.
                </li>
                <li>
                  Created dashboards and summarized email generator systems for business to see the overall impact of recommendation service.
                </li>
              </ul>
            </div>
          </div>
          <div className="container">
            <div className="fixed">
              <a href="http://www.juniper.net" target="_blank">
                <img src={juniper} alt="" />
              </a>
            </div>

            <div className="flex-item">
              <div>
                <b>Juniper Networks - Intern</b>
                <i style={{ float: "right" }}> [ 01/2015 - 06/2015 ]</i>
              </div>
              <ul>
                <li>
                  As a member of the security team, I built tools to extract/process Internet Session Metadata and block harmful IP addresses on top of the router.
                </li>
              </ul>
            </div>
          </div>
          <br />
        </div>
      </article>
    );
  }
}

export default Work;
