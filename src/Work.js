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
              <p>
                Being a part of Personalization and Analytics team,
                I worked across a  span of projects from Recommendation Engine
                to Dashboards following proper code standards and test coverage.
                I was involved in designing and developing software to generate
                approximately 40 million users affinity end to end, starting from
                aggregating their day to day activity, storing it to finding relevant
                content for the recommendation.
              </p>
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
              <p>
                As a member of the security team, I built tools to extract and process Internet Session Metadata.
                And developed a software which blocked harmful IP addresses on top of the router.
              </p>
            </div>
          </div>
          <br />
        </div>
      </article>
    );
  }
}

export default Work;
