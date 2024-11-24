import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container grid">
        <div className="footer_content grid">
          <div>
            {/* <a
              href="#"
              class="footer_logo"
            >
              Travel
            </a> */}
            <Link
              to={'#'}
              className="footer_logo"
            >
              Travel
            </Link>
            <p className="footer_description">
              Travel with us and explore <br /> the world without limits.
            </p>
          </div>
          <div className="footer_data grid">
            <div>
              <h3 className="footer_title">About</h3>
              <ul className="footer_links">
                <li>
                  <Link
                    to={'#'}
                    className="footer_link"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to={'#'}
                    className="footer_link"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to={'#'}
                    className="footer_link"
                  >
                    News & Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="footer_title">Company</h3>
              <ul className="footer_links">
                <li>
                  <Link
                    to={'#'}
                    className="footer_link"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    to={'#'}
                    className="footer_link"
                  >
                    History
                  </Link>
                </li>
                <li>
                  <Link
                    to={'#'}
                    className="footer_link"
                  >
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="footer_title">Contact</h3>
              <ul className="footer_links">
                <li>
                  <Link
                    to={'#'}
                    className="footer_link"
                  >
                    Call Center
                  </Link>
                </li>
                <li>
                  <Link
                    to={'#'}
                    className="footer_link"
                  >
                    Support Center
                  </Link>
                </li>
                <li>
                  <Link
                    to={'#'}
                    className="footer_link"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="footer_title">Support</h3>
              <ul className="footer_links">
                <li>
                  <Link
                    to={'#'}
                    className="footer_link"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to={'#'}
                    className="footer_link"
                  >
                    Terms & Services
                  </Link>
                </li>
                <li>
                  <Link
                    to={'#'}
                    className="footer_link"
                  >
                    Payments
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer_group">
          <div className="footer_social">
            <Link
              to={'https://www.facebook.com/'}
              target="_blank"
              className="footer_social_link"
            >
              <FaFacebookF className="icon" />
            </Link>
            <Link
              to={'https://www.instagram.com/'}
              target="_blank"
              className="footer_social_link"
            >
              <FaInstagram className="icon" />
            </Link>
            <Link
              to={'https://twitter.com/'}
              target="_blank"
              className="footer_social_link"
            >
              <FaXTwitter className="icon" />
            </Link>
            <Link
              to={'https://www.youtube.com/'}
              target="_blank"
              className="footer_social_link"
            >
              <FaYoutube className="icon" />
            </Link>
          </div>
          <span className="footer_copy">
            {' '}
            &#169; Created by Gul Rasulzada.{' '}
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
