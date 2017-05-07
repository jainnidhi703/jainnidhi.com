import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <article id="contact" className="panel">
        <div className="fadeInLoad">
          <header>
            <h1><b>Let's talk </b></h1>
          </header>
          <p>
            I'm currently looking for challenging projects,
            <br />
            feel free to reach out to me for a mutual and 
            <br/>
            successful collaboration.
            <div style={{ height: "1em" }} />
            <i className="icon-envelope" >
              <span> jainnidhi703@gmail.com</span>
            </i>
          </p>
        </div>
      </article>
    );
  }
}

export default Contact;
