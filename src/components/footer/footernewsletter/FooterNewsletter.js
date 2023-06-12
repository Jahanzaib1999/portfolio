import React, { useState } from 'react'
import './FooterNewsletter.scss'

import FooterNewsletterImage from '../../../assets/images/footer-newsletter-graphic.png'

function FooterNewsletter() {
  return (
    <div className="footer-newsletter">
      <div className="image-container">
        <img src={FooterNewsletterImage} alt="footer-newsletter-graphic" />
      </div>

      <div className="newsletter-container">
        <h3>Subscribe to my newsletter</h3>

        <form>
          <input type="email" placeholder="Enter your email address" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default FooterNewsletter
