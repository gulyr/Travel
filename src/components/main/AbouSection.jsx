import React from 'react'
import { IoMdArrowForward } from 'react-icons/io'
import Img1 from '../../assets/images/about-beach.jpg'
import { HashLink as Link } from 'react-router-hash-link'

const AboutSection = () => {
  return (
    <section
      className="about section"
      id="about"
    >
      <div className="about_container container grid">
        <div className="about_data">
          <h2 className="section_title">
            Learn More <br /> About Travel
          </h2>
          <p className="about_description">
            All the trips around the world are a great pleasure and happiness
            for anyone, enjoy the sights when you travel the world. Travel
            safely and without worries, get your trip and explore the paradises
            of the world.
          </p>
          <Link
            smooth
            to={'#'}
            className="button"
          >
            Explore Travel <IoMdArrowForward className="icon" />
          </Link>
        </div>
        <div className="about_image">
          <img
            src={Img1}
            alt="about image"
            className="about_img"
          />
          <div className="about_shadow"></div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
