import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <nav id="nav">
          <NavLink to="/about" activeClassName="active">
            <i className="icon-home" />
          </NavLink>
          <NavLink to="/work">
            <i className="icon-folder" />
          </NavLink>
          <NavLink to="/contact">
            <i className="icon-envelope" />
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default NavigationBar;
