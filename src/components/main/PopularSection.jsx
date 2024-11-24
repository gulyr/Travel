import React from 'react'
import Img1 from '../../assets/images/popular-mountain.jpg'
import Img2 from '../../assets/images/popular-forest.jpg'
import Img3 from '../../assets/images/popular-lake.jpg'
import { IoLocationOutline } from 'react-icons/io5'

const PopularSection = () => {
  return (
    <section
      className="popular section"
      id="popular"
    >
      <h2 className="section_title">
        Enjoy The Beauty <br /> Of The World
      </h2>
      <div className="popular_container container grid">
        <article className="popular_card">
          <div className="popular_image">
            <img
              src={Img1}
              alt="Popular image"
              className="popular_img"
            />
            <div className="popular_shadow"></div>
          </div>
          <h2 className="popular_title">Logan Mountain</h2>
          <div className="popular_location">
            <IoLocationOutline className="icon" />
            <span>Canadá</span>
          </div>
        </article>

        <article className="popular_card">
          <div className="popular_image">
            <img
              src={Img2}
              alt="Popular image"
              className="popular_img"
            />
            <div className="popular_shadow"></div>
          </div>
          <h2 className="popular_title">Spike Forest</h2>
          <div className="popular_location">
            <IoLocationOutline className="icon" />
            <span>Irland</span>
          </div>
        </article>

        <article className="popular_card">
          <div className="popular_image">
            <img
              src={Img3}
              alt="Popular image"
              className="popular_img"
            />
            <div className="popular_shadow"></div>
          </div>
          <h2 className="popular_title">Garda Lake</h2>
          <div className="popular_location">
            <IoLocationOutline className="icon" />
            <span>Italy</span>
          </div>
        </article>
      </div>
    </section>
  )
}

export default PopularSection
