import React, { useEffect } from 'react'
import Img1 from '../../assets/images/home-bg.jpg'
import Img2 from '../../assets/images/home-trees.jpg'
import Img3 from '../../assets/images/home-lake.jpg'
import Img4 from '../../assets/images/home-mountain.jpg'
import Img5 from '../../assets/images/home-beach.jpg'
import { IoMdArrowForward } from 'react-icons/io'
import '../../assets/js/scrollreveal.min.js'
import { HashLink as Link } from 'react-router-hash-link'

const HomeSection = () => {
  return (
    <section
      className="home section"
      id="home"
    >
      <img
        src={Img1}
        alt="Home image"
        className="home_bg"
      />
      <div className="home_shadow"></div>
      <div className="home_container container grid">
        <div className="home_data">
          <h3 className="home_subtitle">Welcome To Travel</h3>
          <h1 className="home_title">
            Explore <br />
            The World
          </h1>
          <p className="home_description">
            Live the trips exploring the world, discover paradises, islands,
            mountains and much more, get your trip now.
          </p>
          {/* <a
            href="#"
            className="button"
          >
            Start Your Journey <IoMdArrowForward className="icon" />
          </a> */}
          <Link
            smooth
            to={'#about'}
            className="button"
          >
            Start Your Journey <IoMdArrowForward className="icon" />
          </Link>
        </div>
        <div className="home_cards grid">
          <article className="home_card">
            <img
              src={Img2}
              alt="Home image"
              className="home_card_img"
            />
            <h3 className="home_card_title">Croatia</h3>
            <div className="home_card_shadow"></div>
          </article>

          <article className="home_card">
            <img
              src={Img3}
              alt="Home image"
              className="home_card_img"
            />
            <h3 className="home_card_title">Iceland</h3>
            <div className="home_card_shadow"></div>
          </article>

          <article className="home_card">
            <img
              src={Img4}
              alt="Home image"
              className="home_card_img"
            />
            <h3 className="home_card_title">Italy</h3>
            <div className="home_card_shadow"></div>
          </article>

          <article className="home_card">
            <img
              src={Img5}
              alt="Home image"
              className="home_card_img"
            />
            <h3 className="home_card_title">Spain</h3>
            <div className="home_card_shadow"></div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default HomeSection
