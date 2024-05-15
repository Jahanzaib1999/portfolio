import React from 'react'
import './ProjectInfoCard.scss'
import { BsBoxArrowUpRight } from 'react-icons/bs'

function ProjectInfoCard({ appType, client, year, web_url, github_url }) {
  return (
    <div className="InfoCard">
      <div className="InfoCard-header">Project Info</div>
      <div className="InfoCard-content">
        <ul>
          <li>
            <span>App Type:</span>
          </li>
          <li>/{appType}</li>
          <li>
            <span>Client:</span>
          </li>
          <li>/{client}</li>
          <li>
            <span>Year:</span>
          </li>
          <li> /{year}</li>
        </ul>
      </div>

      <div className="infor-card-buttons-div">
        {web_url && web_url !== 'null' && (
          <button
            className="info-card-button"
            onClick={() => {
              const url =
                web_url.startsWith('http') || web_url.startsWith('https')
                  ? web_url
                  : `https://${web_url}`
              window.open(url, '_blank')
            }}
          >
            Live Demo
          </button>
        )}

        <button
          className="info-card-button github-button"
          onClick={() => {
            const url =
              github_url.startsWith('http') || github_url.startsWith('https')
                ? github_url
                : `https://${github_url}`
            window.open(url, '_blank')
          }}
        >
          Github <BsBoxArrowUpRight className="button-icon" />
        </button>
      </div>
    </div>
  )
}

export default ProjectInfoCard
