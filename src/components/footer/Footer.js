import React from 'react'
import './Footer.scss'

import LogoJ from '../../assets/images/logo-j-new.png'
import EmailFooterGraphic from '../../assets/images/footer-graphics/email-footer-graphic.png'
import FbFooterGraphic from '../../assets/images/footer-graphics/fb-footer-graphic.png'
import InstaFooterGraphic from '../../assets/images/footer-graphics/insta-footer-graphic.png'
import LinkedinFooterGraphic from '../../assets/images/footer-graphics/linkedin-footer-graphic.png'
import PhoneFooterGraphic from '../../assets/images/footer-graphics/phone-footer-graphic.png'
import TwitterFooterGraphic from '../../assets/images/footer-graphics/twitter-footer-graphic.png'
import YtFooterGraphic from '../../assets/images/footer-graphics/yt-footer-graphic.png'

import FooterNewsletter from './footernewsletter/FooterNewsletter'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-newsletter-container">
        <FooterNewsletter />
      </div>

      <div className="footer-brand-container">
        {/* Add your brand logo and name here */}
        <div
          className="footer-brand-container-header"
          onClick={() => {
            window.location.href = '/'
          }}
        >
          <img src={LogoJ} alt="brand-logo" />
          <h3>Jahan's Portfolio</h3>
        </div>
        <p>Find me on social media via the links below.</p>

        {/* Add your social media icons here */}
        <div className="social-icons-container">
          <a className="footer-graphic not-provided">
            <img src={FbFooterGraphic} alt="fb" />
          </a>
          <a className="footer-graphic not-provided">
            <img src={TwitterFooterGraphic} alt="twitter" />
          </a>
          <a
            className="footer-graphic"
            href="https://www.instagram.com/radioactive_68/?next=%2F"
          >
            <img src={InstaFooterGraphic} alt="insta" />
          </a>
          <a
            className="footer-graphic"
            href="https://www.linkedin.com/in/jahanzeb-khan-5a610a51/"
          >
            <img src={LinkedinFooterGraphic} alt="linkedin" />
          </a>
          <a className="footer-graphic not-provided">
            <img src={YtFooterGraphic} alt="youtube" />
          </a>
        </div>
      </div>

      <div className="footer-pages-container">
        <h3>Pages</h3>
        <ul>
          <li>
            <a href="/" className="footer-page-link">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="footer-page-link">
              About
            </a>
          </li>
          <li>
            <a href="/services" className="footer-page-link">
              Services
            </a>
          </li>
          <li>
            <a href="/portfolio" className="footer-page-link">
              Portfolio
            </a>
          </li>
          <li>
            <a href="/contact" className="footer-page-link">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-contact-container">
        <h3>Contact</h3>

        <div className="footer-contact-container-contact">
          <a href="mailto:jahanzaib1999@gmail.com" className="footer-graphic">
            <img src={EmailFooterGraphic} alt="email" />
          </a>
          <p>jahanzaib1999@gmail.com</p>
        </div>

        <div className="footer-contact-container-contact">
          <a href="" className="footer-graphic">
            <img src={PhoneFooterGraphic} alt="phone" />
          </a>
          <p>+61405446172</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
