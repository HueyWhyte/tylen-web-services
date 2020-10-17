import React, { Component } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./style.css";

export default class NavigationBar extends Component {
  openSideMenu = () => {
    document.getElementById("side_menu").style = "width: 80vw; margin-left: 0";
  };

  render() {
    return (
      <nav className="Navigation_Bar">
        <p style={{ fontSize: 22 }}>LOGO</p>

        <FaBars
          className="toggle-side-menu"
          onClick={this.openSideMenu}
          style={{ fontSize: 22 }}
        />

        <div className="top-bar-hide">
          <NavLink
            exact
            to="/"
            className="nav_btn"
            activeClassName="nav_btn_active"
          >
            Home
          </NavLink>

          <NavLink
            exact
            to="/portfolio"
            className="nav_btn"
            activeClassName="nav_btn_active"
          >
            Portfolio
          </NavLink>

          <NavLink
            exact
            to="/blog"
            className="nav_btn"
            activeClassName="nav_btn_active"
          >
            Blog
          </NavLink>

          <NavLink
            exact
            to="/contacts"
            className="nav_btn"
            activeClassName="nav_btn_active"
          >
            Contacts
          </NavLink>

          <NavLink
            exact
            to="/about"
            className="nav_btn"
            activeClassName="nav_btn_active"
          >
            About
          </NavLink>

          <input className="nav-search" type="text" placeholder="Search" />
        </div>
      </nav>
    );
  }
}
