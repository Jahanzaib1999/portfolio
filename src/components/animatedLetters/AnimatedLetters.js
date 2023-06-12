import './AnimatedLetters.scss'

import React, { useState, useEffect } from 'react'
import { Typewriter } from 'react-simple-typewriter'

// function AnimatedLetters({ letterClass, strArray, idx }) {
//   return (
//     <span>
//       {strArray.map((char, i) => (
//         <span key={char + i} className={`${letterClass} _${i + idx}`}>
//           {char}
//         </span>
//       ))}
//     </span>
//   );
// }

function AnimatedLetters({ letterClass, strArray, idx, typewrited = false }) {
  return (
    <span>
      {typewrited ? (
        <div className="typewriter-container">
          <Typewriter
            cursorColor="#fdd700"
            cursor={true}
            words={strArray}
            loop={false}
          />
        </div>
      ) : (
        strArray.map((char, i) => (
          <span key={char + i} className={`${letterClass} _${i + idx}`}>
            {char}
          </span>
        ))
      )}
    </span>
  )
}

export default AnimatedLetters
