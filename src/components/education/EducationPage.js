import './EducationPage.scss'

import React, { useState, useEffect } from 'react'
import AnimatedLetters from '../animatedLetters/AnimatedLetters'
// import Loader from 'react-loaders'
import Loader from '../loader/Loader'
import Footer from '../../components/footer/Footer'
import { motion } from 'framer-motion'

import KOILogo from '../../assets/images/koi-logo.png'
import ELSLogo from '../../assets/images/els-logo.jpg'
import SydneyPhoto from '../../assets/images/sydney.jpg'

import SydneySkyline from '../../assets/images/sydney-skyline.jpg'
import DubaiSkyline from '../../assets/images/dubai-skyline.jpg'
import AusMap from '../../assets/images/australia-map.png'
import UAEMap from '../../assets/images/uae-map.jpeg'

function EducationPage() {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    const timer = setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const [bachelorsExpanded, setBachelorsExpanded] = useState(false)
  const [highSchoolExpanded, setHighSchoolExpanded] = useState(false)

  const handleBachelorsDropdownClick = () => {
    setBachelorsExpanded(!bachelorsExpanded)
  }

  const handleHighSchoolDropdownClick = () => {
    setHighSchoolExpanded(!highSchoolExpanded)
  }

  return (
    <>
      <div className="container education-page">
        <h1 className="page-title">
          <AnimatedLetters
            idx={15}
            strArray={'Education'.split('')}
            letterClass={letterClass}
          />
        </h1>
        <div className="dropdowns-div">
          <div
            className={`education-dropdown ${
              bachelorsExpanded ? 'expanded' : ''
            }`}
          >
            {/* <div className="service-separator" /> */}
            <div className="dropdown-header">
              <div className="dropdown-title">
                Bachelors of Information Technology
                <br />
                <span>2020-2022</span>
              </div>

              <div
                className={`dropdown-arrow `}
                onClick={handleBachelorsDropdownClick}
                //style={bachelorsExpanded ? { backgroundColor: 'red' } : {}}
              >
                <span className={`${bachelorsExpanded ? 'open' : ''}`}>+</span>
              </div>
            </div>
            <div
              className={`dropdown-menu ${bachelorsExpanded ? 'expanded' : ''}`}
            >
              <div className="dropdown-item">
                <div className="dropdown-item-main-div">
                  <div className="dropdown-item-main-div-left">
                    <div className="school-name">King's Own Institute</div>
                    <div className="school-location">Sydney, Australia</div>
                  </div>
                  <div className="dropdown-item-main-div-right">
                    <img src={AusMap} alt="Aus Map" className="map-logo" />
                    <img
                      src={KOILogo}
                      alt="Bachelors Logo"
                      className="school-logo"
                    />
                  </div>
                </div>

                <div className="dropdown-item-second-div">
                  <div className="academic-achievement">
                    <div className="heading-name">Academic Achievements</div>
                    <div className="bullet-point">
                      <div
                        className="bullet"
                        style={{
                          backgroundColor: '#fdd700',
                          borderColor: '#000',
                        }}
                      ></div>
                      <p>
                        High Distinction in
                        <span> Web Design Development (ASP.NET MVC)</span> &
                        <span> Innovation and Technology Management</span>
                      </p>
                    </div>

                    <div className="bullet-point">
                      <div
                        className="bullet"
                        style={{
                          backgroundColor: '#fdd700',
                          borderColor: '#000',
                        }}
                      ></div>
                      <p>
                        10 Distinctions. Subjects include
                        <span> Discrete Mathematics for IT</span>,
                        <span> System Analysis and Design</span>,
                        <span> Cyber Security</span>,
                        <span> Business Statistics</span>,
                        <span> Project Management</span>,
                        <span> Artificial Intelligence</span>,
                        <span> E-Commerce</span>,{' '}
                        <span>Professional Ethics</span>,
                        <span> IT Project 2</span> &
                        <span> Mobile Computing (Java)</span>.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bottom-image">
                  <img
                    src={SydneySkyline}
                    alt="sydney-skyline"
                    className="skyline-image"
                  />
                </div>
              </div>
            </div>
            {/* <div className="service-separator" /> */}
          </div>

          <div
            className={`education-dropdown ${
              highSchoolExpanded ? 'expanded' : ''
            }`}
          >
            <div
              className="dropdown-header"
              onClick={handleHighSchoolDropdownClick}
            >
              <div className="dropdown-title">
                O-levels & A-levels
                <br />
                <span>2016-2019</span>
              </div>
              <div
                className={`dropdown-arrow `}
                onClick={handleHighSchoolDropdownClick}
              >
                <span className={`${highSchoolExpanded ? 'open' : ''}`}>+</span>
              </div>
            </div>
            <div
              className={`dropdown-menu ${
                highSchoolExpanded ? 'expanded' : ''
              }`}
            >
              <div className="dropdown-item">
                <div className="dropdown-item-main-div">
                  <div className="dropdown-item-main-div-left">
                    <div className="school-name">
                      English Language School Pvt Ltd
                    </div>
                    <div className="school-location">Dubai, U.A.E</div>
                  </div>
                  <div className="dropdown-item-main-div-right">
                    <img src={UAEMap} alt="UAE Map" className="map-logo" />
                    <img
                      src={ELSLogo}
                      alt="Bachelors Logo"
                      className="school-logo"
                    />
                  </div>
                </div>
                <div className="dropdown-item-second-div">
                  <div className="academic-achievement">
                    <div className="heading-name">Academic Achievements</div>
                    <div className="bullet-point">
                      <div
                        className="bullet"
                        style={{
                          backgroundColor: '#fdd700',
                          borderColor: '#000',
                        }}
                      ></div>
                      <p>
                        10 O-levels Subjects <span>(5 A*, 4 B and 1 C)</span>
                      </p>
                    </div>

                    <div className="bullet-point">
                      <div
                        className="bullet"
                        style={{
                          backgroundColor: '#fdd700',
                          borderColor: '#000',
                        }}
                      ></div>
                      <p>
                        <span>Further Pure Mathematics</span> in AS-Level
                      </p>
                    </div>

                    <div className="bullet-point">
                      <div
                        className="bullet"
                        style={{
                          backgroundColor: '#fdd700',
                          borderColor: '#000',
                        }}
                      ></div>
                      <p>
                        <span>School Proctor</span> in Year 11 &
                        <span> Sixth Form Prefect</span> in Year 13
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bottom-image">
                  <img
                    src={DubaiSkyline}
                    alt="sydney-skyline"
                    className="skyline-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>

      <Loader />
    </>
  )
}

export default EducationPage
