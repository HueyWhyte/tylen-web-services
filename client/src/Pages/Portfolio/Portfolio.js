import React, { Component } from "react";
import "./style.css";

import Data from "../../assets/portfolio_data";

export default class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio_Container">
        <div className="portfolio_top_section">
          <h1 className="page_heading">Management Team</h1>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          {Data.map((team) => (
            <div key={team.id} style={{ display: "flex", margin: 50 }}>
              <img
                className="team_img"
                src={require("../../assets/img/author-img3.jpg")}
                alt="team_img"
              />
              <div className="user_info_container">
                <h4>{team.fname}</h4>
                <h4>{team.lname}</h4>

                <h6 style={{ marginLeft: "auto" }}>{team.position}</h6>
                <hr />
                <p style={{ fontSize: 17 }}>{team.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
