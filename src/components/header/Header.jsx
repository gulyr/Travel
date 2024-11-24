import React, { useEffect } from 'react'
import { IoMdClose } from 'react-icons/io'
import { IoMdMenu } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { HashLink as Link } from 'react-router-hash-link'
import '../../assets/js/scrollreveal.min.js'
import { closeNavMenu, toggleNavMenu } from '../../redux/slices/menuSlice.js'

const Header = () => {
  const dispatch = useDispatch()
  const navMenuVisible = useSelector((state) => state.menu.navMenuVisible)
  const activeSection = useSelector((state) => state.menu.activeSection)

  return (
    <header
      className="header"
      id="header"
    >
      <nav className="nav container">
        <Link
          smooth
          to={'#'}
          className="nav_logo"
        >
          Travel
        </Link>
        <div
          className={`nav_menu ${navMenuVisible ? 'show_menu' : ''}`}
          id="navMenu"
        >
          <ul className="nav_list">
            {['home', 'about', 'popular', 'explore'].map((section, index) => (
              <li
                className="nav_item"
                key={`section-${index}`}
              >
                <Link
                  smooth
                  to={`#${section}`}
                  className={`nav_link ${
                    activeSection === section ? 'active_link' : ''
                  }`}
                  onClick={() => dispatch(closeNavMenu())}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
          <div
            className="nav_close"
            id="navClose"
            onClick={() => dispatch(closeNavMenu())}
          >
            <IoMdClose className="icon" />
          </div>
        </div>
        <div
          className="nav_toggle"
          id="navToggle"
          onClick={() => dispatch(toggleNavMenu())}
        >
          <IoMdMenu className="icon" />
        </div>
      </nav>
    </header>
  )
}

export default Header
