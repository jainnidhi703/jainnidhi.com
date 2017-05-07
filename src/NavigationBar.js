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
          <NavLink to="/work" activeClassName="active">
            <i className="icon-folder" />
          </NavLink>
          <NavLink to="/projects" activeClassName="active">
            <i className="icon-code" />
          </NavLink>
          <NavLink to="/skills" activeClassName="active">
            <i className="icon-lightbulb-o" />
          </NavLink>
          <NavLink to="/contact" activeClassName="active">
            <i className="icon-envelope" />
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default NavigationBar;
