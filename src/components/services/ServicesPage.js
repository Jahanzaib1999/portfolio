import './ServicesPage.scss'

import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../animatedLetters/AnimatedLetters'
import ServiceCard from '../servicecard/ServiceCard'
import WebDev from '../../assets/images/web-dev.png'
import MailGraphic from '../../assets/images/mail-graphic.png'
import MobDev from '../../assets/images/mob-dev.png'
import ProdGraphic from '../../assets/images/product-graphic.png'
import UIGraphic from '../../assets/images/ux-ui-graphic.png'
import AnimationGraphic from '../../assets/images/animation-graphic.png'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiAngular,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiFacebook,
  SiWebflow,
  SiWordpress,
  SiSquarespace,
  SiWix,
  SiYoutube,
  SiFirebase,
  SiMongodb,
  SiGoogleplay,
  SiGooglechrome,
  SiGooglecloud,
  SiAmazonaws,
  SiJava,
  SiBootstrap,
  SiWebpack,
  SiApple,
  SiAndroid,
  SiFlutter,
  SiNativescript,
  SiDart,
  SiApachekafka,
  SiSpotify,
  SiMicrosoft,
  SiMicrosoftazure,
  SiSamsung,
  SiAtlassian,
  SiJira,
  SiSass,
  SiWhatsapp,
  SiBitcoin,
  SiCloudflare,
} from 'react-icons/si'
import MovingBanner from '../movingBanner/MovingBanner'

import {
  faJira,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Footer from '../../components/footer/Footer'

function ServicesPage() {
  const iconList = [
    <SiHtml5 />,
    <SiCss3 />,
    <SiAdobeillustrator />,
    <SiAdobephotoshop />,
    <SiAmazonaws />,
    <SiAndroid />,
    <SiAngular />,
    <SiApachekafka />,
    <SiApple />,
    <SiAtlassian />,
    <SiBitcoin />,
    <SiBootstrap />,
    <SiDart />,
    <SiFacebook />,
    <SiFigma />,
    <SiFirebase />,
    <SiFlutter />,
    <SiGooglechrome />,
    <SiGooglecloud />,
    <SiYoutube />,
    <SiWordpress />,
    <SiGoogleplay />,
    <SiSquarespace />,
    <SiJava />,
    <SiMicrosoft />,
    <SiJavascript />,
    <SiJira />,
    <SiMicrosoftazure />,
    <SiMongodb />,
    <SiNativescript />,
    <SiReact />,
    <SiSamsung />,
    <SiWhatsapp />,
    <SiWix />,
    <SiSass />,
    <SiWebflow />,
    <SiCloudflare />,
    <SiSpotify />,
  ]

  //console.log(iconList.length)

  const [letterClass, setLetterClass] = useState('text-animate')

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
      <div className="container services-page">
        <h1 className="page-title">
          <AnimatedLetters
            idx={15}
            strArray={'Services'.split('')}
            letterClass={letterClass}
          />
        </h1>

        <div className="services-container">
          <div className="services-text">
            <h2>
              I Offer a Wide Variety of Services ranging from <br />
              <span className="heading-span-1">Web Development</span>,
              <span className="heading-span-2"> Mobile App Development</span>,
              <span className="heading-span-3"> UI/UX Design</span>.
            </h2>
            <p>
              For more details about how I can help you with your project, find
              below a comprehensive list of services which I can provide. Also
              feel free to contact me via button below.
            </p>
            <button className="get-in-touch-button">Get in Touch</button>
          </div>

          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faJira} color="#003366" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
            </div>
          </div>
        </div>

        <MovingBanner list={iconList} />

        <h2 className="services-second-container-heading">
          My broad <span> set of services</span>
        </h2>

        <div className="service-cards-container">
          <ServiceCard
            title={'Web Development'}
            text={
              'Web Development services offered. I can build websites using javascript frameworks like React and Angular.'
            }
            imgSrc={WebDev}
          />
          <ServiceCard
            title={'Mobile App Development'}
            text={`Mobile App Development services offered. I can build mobile apps using Google's Flutter framework for cross-platform mobile app or javascript frameworks like React Native.`}
            imgSrc={MobDev}
          />
          <ServiceCard
            title={'Product Design'}
            text={
              'I can help design products based on clients need and expectation. I follow clean design patterns and guidelines.'
            }
            imgSrc={ProdGraphic}
          />
          <ServiceCard
            title={'UI/UX Design'}
            text={
              'I can build unique UIs according to the needs of your business. I use Figma and Adobe PhotoShop to create wireframes'
            }
            imgSrc={UIGraphic}
          />
          <ServiceCard
            title={'Animations'}
            text={
              'Animations is an important part of UX Design. I can design cool on scroll animations and loaders for your websites using libraries and custom tools.'
            }
            imgSrc={AnimationGraphic}
          />
          <ServiceCard
            title={'Get in Touch'}
            text={
              'Looking for another service? Get in touch with me, there is a high chance that I will be able to help!'
            }
            imgSrc={MailGraphic}
            lastCard={true}
          />
        </div>

        {/* <div className="banner-wrapper-2">
          <div className="banner-content">
            <h2>Banner 2</h2>
            <p>Some description text here</p>
            <i className="fa fa-icon"></i>
          </div>
        </div> */}

        <Footer />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default ServicesPage
