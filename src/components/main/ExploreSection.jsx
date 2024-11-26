import React from "react";
import Img1 from "../../assets/images/explore-beach.webp";
import Img2 from "../../assets/images/explore-perfil.png";

const ExploreSection = () => {
  return (
    <section className="explore section" id="explore">
      <div className="explore_container">
        <div className="explore_image">
          <img src={Img1} alt="Explore image" className="explore_img" />
          <div className="explore_shadow"></div>
        </div>
        <div className="explore_content container grid">
          <div className="explore_data">
            <h2 className="section_title">
              Explore The <br /> Best Paradises
            </h2>
            <p className="explore_description">
              Exploring paradises such as islands and valleys when traveling the
              world is one of the greatest experiences when you travel, it
              offers you harmony and peace and you can enjoy it with great
              comfort.
            </p>
          </div>
          <div className="explore_user">
            <img src={Img2} alt="Explore image" className="explore_perfil" />
            <span className="explore_name">Paul Jeams</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
