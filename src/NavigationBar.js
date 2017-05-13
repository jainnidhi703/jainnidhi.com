import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

class NavigationBar extends Component {
  render() {
    const pathName = this.props.location.pathname;
    const aboutClass = pathName === "/" ? "active" : "";
    return (
      <div>
        <nav id="nav">
          <NavLink to="/about" activeClassName="active" className={aboutClass}>
            <div className="activeTriangle" />
            <i className="icon-home" />
          </NavLink>
          <NavLink to="/work" activeClassName="active">
            <div className="activeTriangle" />
            <i className="icon-folder" />
          </NavLink>
          <NavLink to="/projects" activeClassName="active">
            <div className="activeTriangle" />
            <i className="icon-code" />
          </NavLink>
          <NavLink to="/technologies" activeClassName="active">
            <div className="activeTriangle" />
            <i className="icon-lightbulb-o" />
          </NavLink>
          <NavLink to="/contact" activeClassName="active">
            <div className="activeTriangle" />
            <i className="icon-envelope" />
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default withRouter(NavigationBar);
