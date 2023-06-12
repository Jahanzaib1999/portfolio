import './HomePage.scss'

import React, { useEffect, useState } from 'react'

import LogoTitle from '../../assets/images/logo-j.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../animatedLetters/AnimatedLetters'
import Logo from './logo/Logo'
import Loader from 'react-loaders'

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
      <Loader type="pacman" />
    </>
  )
}

export default HomePage
