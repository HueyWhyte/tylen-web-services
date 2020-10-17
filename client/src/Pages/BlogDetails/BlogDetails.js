import React, { Component } from "react";
import "./style.css";
import comments from "../../assets/comment_data";

export default class BlogDetails extends Component {
  componentDidMount() {
    console.log(this.props.match.params);
  }

  render() {
    let { slug } = this.props.match.params;
    return (
      <div className="BlogDetails_Container">
        <div className="blog_d_top_section">
          <h1 className="page_heading">post title</h1>

          <h2>short description of the post</h2>

          <img
            className="k"
            src={require("../../assets/img/author-img3.jpg")}
            alt="team_img"
            style={{
              height: 80,
              width: 80,
              borderRadius: 100,
              marginBottom: -90,
              border: "3px solid white",
            }}
          />
        </div>

        <div className="post_details">
          <h3>post {slug}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            mollitia, maiores reprehenderit aspernatur nesciunt dicta impedit,
            explicabo, dolorem quisquam autem debitis veniam! Quasi laboriosam
            itaque adipisci autem. Libero, exercitationem hic! Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Maxime esse autem ab
            delectus, obcaecati quod ad, debitis saepe sint aliquid quidem neque
            expedita ea eos cupiditate aut maiores dolore perferendis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
            atque ratione illum tempora quisquam hic reiciendis nemo maxime
            quasi quo esse quidem placeat molestias explicabo, qui blanditiis
            necessitatibus beatae autem! Consequatur veritatis tempore aliquid
            rem nam pariatur dicta et, voluptatem, repellendus sed dolor.
            Laborum necessitatibus consequuntur consectetur hic repellat optio
            ipsam, eum accusantium iste expedita quam exercitationem incidunt,
            debitis nisi. Eaque eligendi possimus neque distinctio temporibus
            officiis culpa velit, veniam enim, cupiditate veritatis itaque
            architecto autem repellat, ea qui minus dolore cum quibusdam
            eveniet? Eligendi odio debitis doloremque illum totam. Error
            asperiores quasi dolorem cumque voluptatibus illum nihil ab, dolor
          </p>

          <p>
            blanditiis, quas voluptate. Voluptas aliquid architecto deserunt
            perspiciatis ea quod, ut explicabo expedita, provident ab nisi
            molestiae ducimus dignissimos maiores? Molestias, excepturi
            corrupti! Quisquam suscipit reprehenderit facilis laudantium,
            doloribus fugit mollitia cupiditate aliquam nesciunt, cum
            perferendis ab sapiente amet distinctio est voluptatem praesentium
            modi deleniti odio! Modi veritatis dolorum officiis! Aliquid,
            cupiditate quisquam. Provident inventore minima molestiae ut rerum
            nihil cumque rem ipsum nisi cum. Consequuntur distinctio molestias
            cum iure deserunt voluptate, eius consequatur magni officiis? Odio
            omnis eius deleniti? Dolorum deserunt odit quia dolore qui velit
            magnam doloremque quisquam reprehenderit? Nemo eos illo ea a quis
            voluptas tempore minima dolorum atque fuga aperiam provident ipsam
            minus, perspiciatis, animi omnis. Eaque doloribus amet consequatur
            facere maiores dolore accusantium cupiditate dicta aspernatur,
            commodi placeat quia assumenda! Nobis, ab harum nisi dignissimos, in
          </p>

          <p>
            pariatur deserunt ex id voluptates eveniet reiciendis quod soluta.
            Consequuntur, odit. Libero aperiam eaque eos ab, magnam nemo quod
            sit. Blanditiis fuga laboriosam nostrum nam eligendi omnis at
            accusantium expedita, totam ipsam ut soluta laborum, quis
            dignissimos aliquid doloremque? Aliquam laudantium consequuntur
            ratione recusandae sapiente provident corporis ad minima quas! Omnis
            optio quas maiores ea similique? Sequi assumenda rem, nisi sed
            ducimus facilis at accusantium dicta ipsam nostrum ratione.
          </p>
        </div>

        <div className="comment_section">
          <h5>133 Comments</h5>

          <div style={{ display: "flex", marginTop: 20 }}>
            <img
              className="k"
              src={require("../../assets/img/author-img3.jpg")}
              alt="team_img"
              style={{
                height: 50,
                width: 50,
                borderRadius: 6,
                border: "2px solid white",

                marginRight: 20,
              }}
            />
            <input
              style={{
                flex: 1,
                padding: "0 13px 0 13px",
                border: "none",
                borderRadius: 9,
              }}
              type="text"
              placeholder="Add a comment"
            />
          </div>

          <div className="" style={{ marginTop: 40 }}>
            {comments.map((comment) => (
              <div style={{ display: "flex" }}>
                <img
                  className="k"
                  src={require("../../assets/img/author-img3.jpg")}
                  alt="team_img"
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 6,
                    border: "2px solid white",
                    marginRight: 20,
                  }}
                />
                <div>
                  <h5>{comment.name}</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Illo, rerum. Repudiandae perspiciatis porro illo ratione
                    aperiam, doloribus non? Similique nemo doloribus earum
                    impedit eligendi error exercitationem fugit consequuntur
                    commodi voluptate.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
