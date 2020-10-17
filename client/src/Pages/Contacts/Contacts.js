import React, { Component } from "react";
import "./style.css";

export default class Contacts extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  handleText = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    console.log(name, value);
    this.setState({ [name]: value });
  };

  sendMail = (e) => {
    e.preventDefault();

    console.log("form submitted");
  };

  render() {
    let { name, email, subject, message } = this.state;

    return (
      <div className="Contacts_Container">
        <div className="contact_top_section">
          <h1 className="page_heading">Contact Informations</h1>

          <h2>
            {/* We are an IT firm with the aim of providing world class and advanced
            quality IT solutions and services to our clients and */}
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 60,
            marginBottom: 60,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div className="contact_cards">
            <div className="contact_item">
              <div className="circle_img"></div>
              <div className="info_texts">
                <h5>Phone Number</h5>
                <h6>+233 240000000</h6>
              </div>
            </div>

            <div className="contact_item">
              <div className="circle_img"></div>
              <div className="info_texts">
                <h5>Email Address</h5>
                <h6>tylenwebservices@tylen.com</h6>
              </div>
            </div>

            <div className="contact_item">
              <div className="circle_img"></div>
              <div className="info_texts">
                <h5>Fax Address</h5>
                <h6>4464676544</h6>
              </div>
            </div>

            <div className="contact_item">
              <div className="circle_img"></div>
              <div className="info_texts">
                <h5>Location</h5>
                <h6>Accra, Ghana</h6>
              </div>
            </div>
          </div>

          <div className="form_container">
            <h3 style={{ margin: "10px 0 40px 0" }}>Send Message</h3>
            <form
              style={{ display: "flex", flexDirection: "column" }}
              onSubmit={this.sendMail}
            >
              <input
                type="text"
                value={name}
                name="name"
                placeholder="Your name"
                onChange={this.handleText}
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleText}
                placeholder="Email address"
              />
              <input
                type="text"
                value={subject}
                onChange={this.handleText}
                name="subject"
                placeholder="Subject"
              />
              <textarea
                name="message"
                value={message}
                onChange={this.handleText}
                cols="30"
                rows="8"
                placeholder="Message"
              ></textarea>

              <input
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  width: 180,
                  marginTop: 15,
                }}
                type="submit"
                value="SEND MESSAGE"
              />
            </form>
          </div>
        </div>

        <div
          style={{
            marginBottom: 60,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 12,
            textAlign: "center",
          }}
        >
          <h1 style={{ color: "black" }}>Find Us on Google Maps</h1>
          <p>We are located at Accra, near ......</p>
          <img
            className="map_image"
            src={require("../../assets/img/kevin.jpg")}
            alt=""
          />
        </div>
      </div>
    );
  }
}
