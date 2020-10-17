import React, { Component } from "react";
// import { Carousel, Image } from "react-bootstrap";
import "./style.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home_Container">
        <div className="home_top_section">
          <h1 className="page_heading">Tylen Web Services</h1>
        </div>

        <div className="home_intro">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            ab enim. Veniam praesentium amet tenetur odio ad distinctio
            perferendis. Quidem voluptatum tenetur hic minima harum
            reprehenderit pariatur nemo possimus aliquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            ab enim. Veniam praesentium amet tenetur odio ad distinctio
            perferendis. Quidem voluptatum tenetur hic minima harum
            reprehenderit pariatur nemo possimus aliquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            ab enim. Veniam praesentium amet tenetur odio ad distinctio
            perferendis. Quidem voluptatum tenetur hic minima harum
            reprehenderit pariatur nemo possimus aliquam. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Illo voluptatibus voluptate modi
            perferendis nihil eum sunt at possimus totam voluptatum natus cum,
            aspernatur repudiandae ut labore commodi quia vitae dolore.
          </p>
        </div>

        <div
          className=""
          style={{
            minHeight: "calc(100vh - 60px)",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <div
            className=""
            style={{
              width: 300,
              height: 400,
              backgroundColor: "grey",
              margin: 10,
              borderRadius: "15px 0 0 15px",
            }}
          ></div>

          <div
            className=""
            style={{
              width: 300,
              height: 400,
              backgroundColor: "grey",
              margin: 10,
            }}
          ></div>

          <div
            className=""
            style={{
              width: 300,
              height: 400,
              backgroundColor: "grey",
              margin: 10,
              borderRadius: "0 15px 15px 0",
            }}
          ></div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // backgroundColor: "red",
            width: "70%",
            borderRadius: 20,
            padding: 12,
            marginBottom: 30,
            marginLeft: "auto",
            marginRight: "auto",
            alignItems: "center",
          }}
        >
          <h3>Subscribe Our Newsletter</h3>

          <div
            style={{
              display: "flex",
              boxShadow: "0px 4px 10px 0px grey",
              padding: 20,
              width: "100%",
              borderRadius: 12,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              style={{ flex: 1, borderRadius: 20, border: "none" }}
              type="text"
              placeholder="Enter your Email"
            />

            <div
              style={{
                padding: "5px 20px",
                margin: "0 10px",
                backgroundColor: "blueviolet",
                borderRadius: 30,
              }}
            >
              <p
                style={{
                  padding: 0,
                  margin: 0,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                SUBSCRIBE
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
