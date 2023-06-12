import React from 'react'

import './StyledOrderedList.scss'

function StyledOrderedList({ list }) {
  return (
    <div className="StyledOrderedList">
      <ul>
        {list &&
          list.map((item, index) => (
            <li key={index}>
              {/* <div className="feature-name">{item.name}</div> */}
              <div className="feature-description">
                <span>{item.name}: </span>
                {item.description}
              </div>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default StyledOrderedList
