import './HomePage.scss'

import React, { useEffect, useState } from 'react'

import ContentLoader from 'react-content-loader'

import LogoTitle from '../../assets/images/logo-j.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../animatedLetters/AnimatedLetters'
import Logo from './logo/Logo'
// import Loader from 'react-loaders'
import Loader from '../loader/Loader'
import { Helmet } from 'react-helmet'

function HomePage() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [jobWordIndex, setJobWordIndex] = useState(0)
  const nameArray = ['a', 'h', 'a', 'n']
  const jobWords = [
    'Web developer',
    'App Developer',
    'Web Designer',
    'UI/UX Designer',
    'Coder',
  ]
  const jobWord = jobWords[jobWordIndex % jobWords.length]
  const jobArray = jobWord.split('')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    const intervalId = setInterval(() => {
      setJobWordIndex((jobWordIndex) => jobWordIndex + 1)
    }, 2000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <>
      <Helmet>
        <title>Home - Jahan's Portfolio</title>
        <meta
          name="description"
          content="Jahan's portfolio, a versatile developer skilled in web development, app development, UI/UX design, and coding."
        />
        <meta
          name="keywords"
          content="Jahan, Portfolio, Web Developer, App Developer, UI/UX Designer, Coder"
        />
      </Helmet>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobWords}
              idx={22}
              typewrited={true}
            />
            {/* <div className="wrapper">
              <div className="words">
                {jobWords.map((word) => (
                  <span key={word}>{word}</span>
                ))}
              </div>
            </div> */}
          </h1>
          <h2>Frontend Developer / JavaScript (React) / Coder</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader />
    </>
  )
}

export default HomePage
