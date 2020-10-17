import React, { Component } from "react";
import "./style.css";

export default class About extends Component {
  render() {
    return (
      <div className="About_Container">
        <div className="abt_top_section">
          <h1 className="page_heading">About Us</h1>

          <h2>
            We are an IT firm with the aim of providing world class and advanced
            quality IT solutions and services to our clients and the community
            as whole
          </h2>

          {/* <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            non earum repudiandae eum enim nobis ratione ut accusamus dicta
            possimus mollitia doloremque aspernatur neque deleniti, facere
            libero numquam rem qui.
          </p> */}
        </div>

        <div className="info_container">
          <img
            className="info_image"
            src={require("../../assets/img/kevin.jpg")}
            alt=""
          />

          <div className="info_text_container">
            <h1 style={{ color: "black" }}>
              {/* Recusandae distinctio est id inventore */}
            </h1>
            <p>
              Tylenweb Services is an information technology company and MSP
              that specializes in providing cloud backup and disaster recovery,
              Network solutions, Web Development, IT support services, Graphic
              Designing and Technical consultancy. TWS strives to provide the
              high quality technological business solutions with a concentrated
              focus on small and mid-business sectors. TWS is located in Accra,
              Ghana. The company currently has ten full–time staff members with
              expansion plans to add ten more within the next three years.
            </p>
            <hr />
            <p>
              TWS was formed in 2020 by Sam Kweku when he experienced downsize
              in an hospital in Ghana which nearly caused loss of lives. With 3
              years experience in cloud computing and AWS solutions Architect
              Mr. Sam has successfully mobilized a team of Engineers,
              Technicians and developers to build Tylenweb Services with
              software developers and digital marketers in the pipeline.
            </p>
          </div>
        </div>

        <div className="info_container">
          <div className="info_text_container">
            <h1 style={{ color: "black" }}>
              {/* Recusandae distinctio est id inventore */}
            </h1>
            <p>
              TWS focuses its efforts in two service areas: cloud backups and
              Managed IT support for small and mid-sized businesses. TWS strives
              to foster and maintain solid relationships with its clients, fine
              tune its services, and continue to develop innovative business
              solutions that will improve the way their clients do business. Due
              to its small size, TWS has the unique ability to act quickly and
              easily meets or beats its deadlines. Its main limitation is its
              limited staff resources. TWS plans to expand personnel over the
              next three years to meet achieve a balance of supply and demand.
            </p>
            <hr />
            <p>
              The purpose of this plan is to create a strategy for TWS that will
              increase its revenues annually by 20%, and simultaneously grow
              assets 25%. Overall, this business plan will provide an in–depth
              understanding of the company, along with a plan for growth in the
              future.
            </p>
          </div>
          <img
            className="info_image"
            src={require("../../assets/img/kevin.jpg")}
            alt=""
          />
        </div>

        {/* <div style={{ padding: 20, textAlign: "center", marginTop: 50 }}>
          <h1 style={{ margin: 20, fontSize: 40, color: "black" }}>
            Why Choose Us
          </h1>

          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            <div className="reason_box"></div>

            <div className="reason_box"></div>

            <div className="reason_box"></div>
          </div>
        </div> */}

        <div
          style={{
            padding: 20,
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            textAlign: "center",
            marginTop: 50,
          }}
        >
          {/* <h1 style={{ color: "black" }}>Our Focus</h1> */}

          <p>
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. A provident
            amet molestias distinctio vitae? Aliquam maiores quas, voluptatem
            illo ad praesentium sit dolorem. Alias suscipit reiciendis labore
            voluptatibus, veritatis maxime! */}
          </p>
        </div>
      </div>
    );
  }
}
