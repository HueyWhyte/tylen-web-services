import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./style.css";

import blog from "../../assets/blog_data";

export default class Blog extends Component {
  render() {
    return (
      <div className="Blog_Container">
        <div className="contact_top_section">
          <h1 className="page_heading">Blog</h1>

          <h2>
            {/* We are an IT firm with the aim of providing world class and advanced
            quality IT solutions and services to our clients and */}
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            marginTop: 30,
            marginBottom: 50,
          }}
        >
          {blog.map((post) => (
            <Link to={`blog/${post.id}`} className="post_container">
              <img
                className="k"
                src={require("../../assets/img/author-img3.jpg")}
                alt="team_img"
                style={{ height: 260 }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: 12,
                  flex: 1,
                }}
              >
                <h5>{post.title}</h5>
                <h6>short descrih6tion</h6>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "auto",
                  }}
                >
                  <img
                    className="k"
                    src={require("../../assets/img/author-img3.jpg")}
                    alt="team_img"
                    style={{
                      width: 45,
                      height: 45,
                      borderRadius: 100,
                      marginRight: 17,
                    }}
                  />

                  <h6 style={{}}>{post.arthur}</h6>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
