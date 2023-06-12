import './ValueCard.scss'

import React from 'react'

function ValueCard({ title, description, imgSrc }) {
  return (
    <div className="value-card">
      <div className="value-card-image">
        <img src={imgSrc} alt="card" />
      </div>
      <div className="value-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ValueCard
