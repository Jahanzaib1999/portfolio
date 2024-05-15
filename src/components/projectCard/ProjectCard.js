import './ProjectCard.scss'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  SiFlutter,
  SiFirebase,
  SiReact,
  SiCss3,
  SiFastapi,
} from 'react-icons/si'
import { useNavigate } from 'react-router-dom'

function ProjectCard({ project }) {
  const navigate = useNavigate()
  const handleProjectClick = () => {
    navigate(`/portfolio/${project.id}`)
  }
  return (
    <div className="box" onClick={handleProjectClick}>
      <div className="wave -one"></div>
      <div className="wave -two"></div>
      <div className="wave -three"></div>
      <div className="card-header">
        <h2 className="card-title">{project.name}</h2>
        <div className="app-type">{project.app_type}</div>
      </div>
      <div className="card-body">
        <p className="card-overview">{project.overview}</p>
        {/* <div className="card-tech">
          {project.technologies &&
            project.technologies.map((tech, index) => (
              <div className="tech-item" key={index}>
                <i className={`fab fa-${tech.name.toLowerCase()}`} />
                {tech.name}
              </div>
            ))}
        </div> */}
        <div className="card-tech">
          {project.technologies &&
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
                <div className="tech-item" key={index}>
                  <span className="tech-icon">
                    <Icon size={20} />
                  </span>
                  {tech.name}
                </div>
              )
            })}
        </div>

        <div className="card-backdrop">
          <img src={project && project.backdrop} />
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
