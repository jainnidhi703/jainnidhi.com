import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <article id="contact" className="panel">
        <div className="fadeInLoad">
          <header>
            <h1>Let's talk </h1>
          </header>
          <p>
            I'm always looking forward to new opportunities,
            <br />
            ping me if you got any.
            <br />
            <i className="icon-envelope">
              <span> jainnidhi703@gmail.com</span>
            </i>
          </p>
        </div>
      </article>
    );
  }
}

export default Contact;
