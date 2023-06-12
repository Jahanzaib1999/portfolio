import React from 'react'
import './ServiceCard.scss'
import { AiOutlineMail } from 'react-icons/ai'

function ServiceCard({ title, text, imgSrc, lastCard = false }) {
  return lastCard ? (
    <>
      <div className="last-card">
        <img src={imgSrc} alt="card-img" />
        <h2>{title}</h2>
        <p className="last-card-text">{text}</p>
        <button className="get-in-touch-button">
          <AiOutlineMail className="mail-icon" size={20} />
          {title}
        </button>
      </div>
    </>
  ) : (
    <>
      <div className="card">
        <div className="card-image">
          <img src={imgSrc} alt="card-image" />
        </div>
        <h2>{title}</h2>
        <div className="card-content">
          <p className="card-text">{text}</p>
        </div>
      </div>
    </>
  )
}

export default ServiceCard
