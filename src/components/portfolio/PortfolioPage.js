import './PortfolioPage.scss'

import React, { useState, useEffect } from 'react'
// import Loader from 'react-loaders'

import Loader from '../loader/Loader'
import AnimatedLetters from '../animatedLetters/AnimatedLetters'
import useCollection from '../../hooks/useCollection'
import ProjectCard from '../projectCard/ProjectCard'
import Footer from '../../components/footer/Footer'

function PortfolioPage() {
  const [letterClass, setLetterClass] = useState('text-animate')

  const { documents, error } = useCollection('projects')

  useEffect(() => {
    const timer = setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            idx={15}
            strArray={'Portfolio'.split('')}
            letterClass={letterClass}
          />
        </h1>

        <div className="project-cards">
          {documents &&
            documents.map((doc) => <ProjectCard key={doc.id} project={doc} />)}
          {error && <div className="error">{error.message}</div>}
        </div>
        <Footer />
      </div>
      <Loader />
    </>
  )
}

export default PortfolioPage
