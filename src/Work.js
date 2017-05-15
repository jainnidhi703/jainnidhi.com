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
              <div className="comicSans">
                DailyHunt - Software Engineer
                <i> [ 07/2015 - Present ]</i>
              </div>
              <ul>
                <li>
                  Built
                  <b> Feed Recommendation Engine </b>
                  scaled to 40 million users' affinity
                </li>
                <li>
                  Developed a
                  <b> Content Ingestion System </b>
                  that stores 50K articles/day spread across 17 languages and 450 newspapers
                </li>
                <li>
                  Created
                  <b> Dashboards </b>
                  to summarize the overall impact of the recommendation engine
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
          <br />
        </div>
      </article>
    );
  }
}

export default Work;
