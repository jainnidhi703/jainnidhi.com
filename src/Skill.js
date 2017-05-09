import React, { Component } from "react";
import SkillImage from "./SkillImage";
import redis from "../public/images/redis.svg";
import react from "../public/images/react.svg";
import nodejs from "../public/images/nodejs.svg";
import mongo from "../public/images/mongo.svg";
import kafka from "../public/images/kafka.svg";
import java from "../public/images/java.svg";
import flink from "../public/images/flink.svg";
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
          <div className="menu">
            <div className="col-xs-12 col-sm-12 col-lg-12">
              <SkillImage image={java} />
              <SkillImage image={nodejs} />
              <SkillImage image={hadoop} />
              <SkillImage image={flink} />
              <SkillImage image={kafka} />
              <SkillImage image={redis} />
              <SkillImage image={elasticsearch} />
              <SkillImage image={react} />
              <SkillImage image={mongo} />
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Skill;
