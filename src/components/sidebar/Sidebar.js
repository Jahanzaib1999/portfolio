import './Sidebar.scss'

import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoJ from '../../assets/images/logo-j.png'
import LogoJNew from '../../assets/images/logo-j-new.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faUser,
  faBook,
  faHandHoldingHand,
  faSuitcase,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

function Sidebar() {
  const [showMenu, setShowMenu] = useState(false)

  const handleToggleMenu = () => {
    setShowMenu(!showMenu)
  }

  useEffect(() => {
    const handleClick = (event) => {
      const sidebar = document.querySelector('.nav-bar')
      if (sidebar && !sidebar.contains(event.target)) {
        setShowMenu(false)
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  const handleLinkClick = () => {
    setShowMenu(false)
  }

  return (
    <div className={`nav-bar ${showMenu ? 'open' : ''}`}>
      <button
        className={`menu-toggle ${showMenu ? 'open' : ''}`}
        onClick={handleToggleMenu}
      >
        {showMenu ? (
          <FontAwesomeIcon icon={faTimes} color="#fdd700" size={'sm'} />
        ) : (
          <FontAwesomeIcon icon={faBars} color="#fdd700" size={'sm'} />
        )}
      </button>
      <Link className="logo" to="/" onClick={handleLinkClick}>
        <img src={LogoJ} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="Jahan" />
      </Link>

      <nav className={`menu ${showMenu ? 'active' : ''}`}>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={handleLinkClick}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          to="/about"
          className="about-link"
          onClick={handleLinkClick}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          to="/portfolio"
          className="portfolio-link"
          onClick={handleLinkClick}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          to="/education"
          className="education-link"
          onClick={handleLinkClick}
        >
          <FontAwesomeIcon icon={faBook} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          to="/services"
          className="services-link"
          onClick={handleLinkClick}
        >
          <FontAwesomeIcon icon={faHandHoldingHand} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          to="/contact"
          className="contact-link"
          onClick={handleLinkClick}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/jahanzeb-khan-5a610a51/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/jahanzeb-khan-5a610a51/"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/jahanzeb-khan-5a610a51/"
          >
            <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
