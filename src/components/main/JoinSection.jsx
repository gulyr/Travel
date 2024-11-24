import React from 'react'
import { IoMdArrowForward } from 'react-icons/io'
import Img1 from '../../assets/images/join-island.jpg'

const JoinSection = () => {
  return (
    <section className="join section">
      <div className="join_container container grid">
        <div className="join_data">
          <h2 className="section_title">
            Your Journey <br /> Starts Here
          </h2>
          <p className="join_description">
            Get up to date with the latest travel and information from us.
          </p>
          <form
            action=""
            className="join_form"
          >
            <input
              type="email"
              className="join_input"
              placeholder="Enter your email"
            />
            <button className="join_button button">
              Subscribe Our Newsletter <IoMdArrowForward className="icon" />
            </button>
          </form>
        </div>
        <div className="join_image">
          <img
            src={Img1}
            alt="Join image"
            className="join_img"
          />
          <div className="join_shadow"></div>
        </div>
      </div>
    </section>
  )
}

export default JoinSection
