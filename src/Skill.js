import React, { Component } from "react";
import SkillImage from "./SkillImage";
import redis from "../public/images/redis.svg";
import react from "../public/images/react.svg";
import nodejs from "../public/images/nodejs.svg";
// import mongodb from "../public/images/mongodb.svg";
import kafka from "../public/images/kafka.svg";
import java from "../public/images/java.svg";
import hbase from "../public/images/hbase.svg";
import hadoop from "../public/images/hadoop.svg";
import elasticsearch from "../public/images/elasticsearch.svg";

class Skill extends Component {
  render() {
    return (
      <article className="panel" id="work">
        <div className="fadeInLoad">
          <header>
            <h1>Skills</h1>
          </header>
          <section>
            <div className="row">
              <SkillImage image={nodejs} url="https://nodejs.org/" />
              <SkillImage image={hadoop} url="http://hadoop.apache.org/" />
              <SkillImage image={hbase} url="https://hbase.apache.org/" />
              <SkillImage image={redis} url="https://redis.io/" />
              <SkillImage image={elasticsearch} url="https://www.elastic.co/" />
              <SkillImage
                image={react}
                url="https://facebook.github.io/react/"
              />
              <SkillImage image={java} url="https://www.java.com/" />
              <SkillImage image={kafka} url="https://kafka.apache.org/" />
              {/*<SkillImage image={mongodb} />*/}
            </div>
          </section>
        </div>
      </article>
    );
  }
}

export default Skill;
