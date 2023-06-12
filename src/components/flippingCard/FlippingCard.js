import React, { useEffect, useState } from 'react'

import './FlippingCard.scss'

import {
  SiFlutter,
  SiFirebase,
  SiReact,
  SiCss3,
  SiFastapi,
} from 'react-icons/si'

function FlippingCard({ project }) {
  //   const [Icon, setIcon] = useState(<SiFastapi size={24} />)

  //   useEffect(() => {
  //     switch (logo.toLowerCase()) {
  //       case 'flutter':
  //         setIcon(<SiFlutter size={24} />)
  //         break
  //       case 'firebase':
  //         setIcon(<SiFirebase size={24} />)
  //         break
  //       case 'react':
  //         setIcon(<SiReact size={24} />)
  //         break
  //       case 'css3':
  //         setIcon(<SiCss3 size={24} />)
  //         break
  //       default:
  //         setIcon(<SiFastapi size={24} />)
  //     }
  //   }, [logo])

  return (
    <div>
      {project.technologies !== null &&
        project.technologies.map((tech, index) => {
          let Icon = SiFastapi
          switch (tech.name.toLowerCase()) {
            case 'flutter':
              Icon = SiFlutter
              break
            case 'firebase':
              Icon = SiFirebase
              break
            case 'react':
              Icon = SiReact
              break
            case 'css3':
              Icon = SiCss3
              break
            default:
              Icon = SiFastapi
          }
          return (
            <div className="flipping-card" key={index}>
              <div className="cover">
                <Icon size={100} />
                <div className="card-back">{tech.description}</div>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default FlippingCard
