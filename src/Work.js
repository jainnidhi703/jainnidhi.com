import React, { Component } from "react";
// import juniper from "../public/images/juniper.jpg";
// import dailyhunt from "../public/images/dailyhunt.jpg";

class Work extends Component {
  render() {
    return (
      <article id="work" className="panel">
        <div className="fadeInLoad">
          <header>
            <h1>Experience</h1>
          </header>
          <div>
            <ul>
              <li>
                <b>Software Engineer</b>
                <br />
                DailyHunt, Bangalore
                <br />
                <i> 07/2015 - Present </i>
              </li>
              <br />
              <p>
                Being a part of Personalization and Analytics team,
                I worked across a  span of projects from Recommendation Engine
                to Dashboards following proper code standards and test coverage.
                I was involved in designing and developing software to generate
                approximately 40 million users affinity end to end, starting from
                aggregating their day to day activity, storing it to finding relevant
                content for the recommendation.
              </p>
              <li>
                <b>Intern</b>
                <br />
                Juniper Networks, Bangalore
                <br />
                <i> 01/2015 - 06/2015 </i>
              </li>
              <br />
              <p>
                As a member of the security team, I built tools to extract and process Internet Session Metadata.
                And developed a software which blocked harmful IP addresses on top of the router.
              </p>
            </ul>
          </div>
        </div>
      </article>
    );
  }
}

export default Work;
