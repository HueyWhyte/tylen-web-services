import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { FaTimesCircle } from "react-icons/fa";

import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import BlogDetails from "./Pages/BlogDetails";
import Contacts from "./Pages/Contacts";
import Portfolio from "./Pages/Portfolio";
import ErrorPage from "./Pages/ErrorPage";

export default class App extends Component {
  closeSideMenu = () => {
    document.getElementById("side_menu").style = "width: 0;";
  };

  render() {
    return (
      <Router>
        <NavigationBar />

        <div id="side_menu">
          <FaTimesCircle
            style={{ fontSize: 30, margin: "8px 0 20px auto" }}
            onClick={this.closeSideMenu}
          />

          <input className="side-nav-search" type="text" placeholder="Search" />

          <NavLink
            exact
            to="/"
            className="side_nav_btn"
            activeClassName="side_btn_active"
          >
            Home
          </NavLink>

          <NavLink
            exact
            to="/portfolio"
            className="side_nav_btn"
            activeClassName="side_btn_active"
          >
            Portfolio
          </NavLink>

          <NavLink
            exact
            to="/blog"
            className="side_nav_btn"
            activeClassName="side_btn_active"
          >
            Blog
          </NavLink>

          <NavLink
            exact
            to="/contacts"
            className="side_nav_btn"
            activeClassName="side_btn_active"
          >
            Contacts
          </NavLink>

          <NavLink
            exact
            to="/about"
            className="side_nav_btn"
            activeClassName="side_btn_active"
          >
            About
          </NavLink>
        </div>

        <div style={{ height: 60 }}></div>

        <Switch>
          <Route exact path="/about" component={About} />

          <Route exact path="/blog" component={Blog} />

          <Route exact path="/blog/:slug" component={BlogDetails} />

          <Route exact path="/contacts" component={Contacts} />

          <Route exact path="/portfolio" component={Portfolio} />

          <Route exact path="/" component={Home} />

          <Route component={ErrorPage} />
        </Switch>

        <Footer />
      </Router>
    );
  }
}
