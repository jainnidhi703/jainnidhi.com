import React, { Component } from "react";
import Technology from "./Technology";
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
            <h1>Technologies</h1>
          </header>
          <div className="menu">
            <div className="col-xs-12 col-sm-12 col-lg-12">
              <Technology imageName={java} url={"https://www.java.com"}/>
              <Technology imageName={nodejs} url={"https://nodejs.org"}/>
              <Technology imageName={hadoop} url={"http://hadoop.apache.org/"}/>
              <Technology imageName={flink} url={"https://flink.apache.org/"}/>
              <Technology imageName={kafka} url={"https://kafka.apache.org"}/>
              <Technology imageName={redis} url={"https://redis.io/"}/>
              <Technology imageName={elasticsearch} url={"https://www.elastic.co/"}/>
              <Technology imageName={react} url={"https://facebook.github.io/react/"}/>
              <Technology imageName={mongo} url={"https://www.mongodb.com/"}/>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Skill;
