import React from 'react'

import './Skillbar.scss'

function Skillbar({ percentage }) {
  const style = {
    height: '20px',
    borderRadius: '5px',
    width: `${percentage}%`,
    transition: 'width 0.3s ease-in-out',
  }

  return (
    <div className="progress-bar">
      <div className="progress" style={style}>
        {/* <span className="progress-text">{percentage}%</span> */}
      </div>
    </div>
  )
}

export default Skillbar
