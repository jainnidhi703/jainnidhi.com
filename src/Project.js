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
                  Recommendation System
                </div>
              </div>
            </div>
            <div className="container">

              <div className="flex-item">
                <div className="comicSans">
                  Content Ingestion System
                </div>
              </div>
            </div>
            <div className="container">

              <div className="flex-item">
                <div className="comicSans">
                  Flink Aggregations
                </div>
              </div>
            </div>
            <div className="container">
              <div className="flex-item">
                <div className="comicSans">
                  History Reconstruction
                </div>
              </div>
            </div>
            <div className="container">
              <div className="flex-item">
                <div className="comicSans">
                  Open Source Contribution
                </div>
              </div>
            </div>
          </header>
        </div>
      </article>
    );
  }
}

export default Project;
