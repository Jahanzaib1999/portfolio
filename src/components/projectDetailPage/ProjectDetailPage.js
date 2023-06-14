import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import AnimatedLetters from '../animatedLetters/AnimatedLetters'
import './ProjectDetailPage.scss'

import ProjectImage from '../../assets/images/detail-page-image.png'

import Monitor from '../../assets/images/monitor.png'
import MonitorInitial from '../../assets/images/monitor-initial.jpg'
import MonitorBgChange from '../../assets/images/monitor-bg-change.png'

import useDocumemt from '../../hooks/useDocument'

// import { gsap, TweenMax } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useInView } from 'react-intersection-observer'

import { motion, useScroll, useTransform } from 'framer-motion'

import ScrollMagic from 'scrollmagic'

import AOS from 'aos'
import ProjectInfoCard from '../projectInfoCard/ProjectInfoCard'
import StyledOrderedList from '../styledOrderedList/StyledOrderedList'
import FlippingCard from '../flippingCard/FlippingCard'

import {
  SiFlutter,
  SiFirebase,
  SiReact,
  SiCss3,
  SiFastapi,
} from 'react-icons/si'

import Footer from '../../components/footer/Footer'

import Loader from 'react-loaders'

// gsap.registerPlugin(ScrollTrigger)

function ProjectDetailPage() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const { id } = useParams()

  const { document: projectDocument, error: projectError } = useDocumemt(
    'projects',
    id
  )

  const [project, setProject] = useState(null)

  const [projectTitle, setProjectTitle] = useState('Portfolio/')

  useEffect(() => {
    if (projectDocument) {
      setProject(projectDocument)
      setProjectTitle(`Portfolio/${projectDocument.name}`)
    }
  }, [projectDocument])

  useEffect(() => {
    const timer = setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const backgroundChangeRef = useRef(null)

  //   useEffect(() => {
  //     gsap.to('.monitor-background-change', {
  //       height: '100%',

  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: '.monitor-background-change',
  //         markers: true,
  //         start: 'top center',
  //         end: 'bottom 100px',
  //         scrub: 10,
  //       },
  //     })
  //   }, [])

  return (
    <div className="container project-detail-page">
      <div className="project-header">
        <h1 className="project-title">
          <AnimatedLetters
            idx={15}
            strArray={projectTitle.split('')}
            letterClass={letterClass}
          />
        </h1>
        <div className="curve">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>

      <div className="project-body">
        <div className="project-overview">
          <h2 className="section-heading">Project Overview</h2>
          <p className="overview-text">{project && project.overview}</p>
        </div>

        <div className="project-image">
          <img src={ProjectImage} alt="project-image" />
        </div>

        <div className="project-body-inner">
          {/* <div className="project-preview-container">
          <div className="monitor-section" id="monitor-section">
            <div className="monitor-background">
              <img src={MonitorInitial} alt="monitor-initial-bg" />

              <motion.div
                className="monitor-background-change"
                ref={backgroundChangeRef}
              >
                <img src={MonitorBgChange} alt="monitor-bg-changed" />
              </motion.div>
            </div>

            <img src={Monitor} alt="monitor" />
          </div>
        </div> */}
          <div className="project-body-inner-left">
            <div className="project-problem-statement">
              <h2 className="section-heading">Problem Statement</h2>
              <p>{project && project.problem_statement}</p>
            </div>

            <div className="project-description">
              <h2 className="section-heading">Project Description</h2>
              <p>{project && project.description}</p>
            </div>

            <div className="project-functionalities">
              <h2 className="section-heading">Project Functionalities</h2>
              <StyledOrderedList list={project !== null && project.features} />
            </div>

            <div className="project-technologies">
              <h2 className="section-heading">Project Technologies</h2>
              {project !== null && (
                <div className="technology-list">
                  {project.technologies.map((technology) => (
                    <div key={technology.name} className="technology-item">
                      <div className="icon-container">
                        {technology.name.toLowerCase() === 'react' && (
                          <SiReact size={70} color="#61DBFB" />
                        )}
                        {technology.name.toLowerCase() === 'flutter' && (
                          <SiFlutter size={70} color=" #42A5F5" />
                        )}
                        {technology.name.toLowerCase() === 'firebase' && (
                          <SiFirebase size={70} color="#FFA611" />
                        )}
                        {technology.name.toLowerCase() === 'css3' && (
                          <SiCss3 size={70} color="#264de4" />
                        )}
                        {!['react', 'flutter', 'firebase', 'css3'].includes(
                          technology.name.toLowerCase()
                        ) && <SiFastapi size={70} color="red" />}
                      </div>
                      <div className="info-container">
                        <h3 className="technology-name">{technology.name}</h3>
                        <p className="technology-description">
                          {technology.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="project-conclusion">
              <h2 className="section-heading">Project Conclusion</h2>
              <p>{project && project.conclusion}</p>
            </div>
          </div>
          <div className="project-body-inner-right">
            <ProjectInfoCard
              appType={project && project.app_type}
              client={project && project.client}
              year={project && project.year}
              web_url={project && project.web_url}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailPage
