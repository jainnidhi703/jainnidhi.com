import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <article id="contact" className="panel">
        <div className="fadeInLoad">
          <header>
            <h1><b>Let's talk </b></h1>
          </header>
          <div>
            I'm currently looking for challenging projects.
            <br />
            Have something for me?
            <br />
            Ping me!!!
            <div style={{ height: "1.5em" }} />
            <i className="icon-envelope">
              <span> jainnidhi703@gmail.com</span>
            </i>
          </div>
        </div>
      </article>
    );
  }
}

export default Contact;
