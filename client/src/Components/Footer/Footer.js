import React, { Component } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./style.css";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-top">
          <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
            <FaFacebook style={{ fontSize: 30, marginRight: 10 }} />

            <FaInstagram style={{ fontSize: 30, marginRight: 10 }} />
          </div>

          <h2 className="footer-logo">logo</h2>

          <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
            <FaTwitter style={{ fontSize: 30, marginRight: 10 }} />

            <FaLinkedin style={{ fontSize: 30, marginRight: 10 }} />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          <p>Terms & Conditions</p>|<p>Privacy Policy</p>|<p>Help Center</p>|
          <p>Events</p>
        </div>

        <div>
          <p style={{ textAlign: "center" }}>
            All rights reseved @ Tylen Web Services 2020
          </p>
        </div>
      </footer>
    );
  }
}
