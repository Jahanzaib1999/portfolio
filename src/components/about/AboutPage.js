import './AboutPage.scss'

import React from 'react'
import AnimatedLetters from '../animatedLetters/AnimatedLetters'

import { useEffect, useState } from 'react'

import Loader from '../loader/Loader'

import AboutImage from '../../assets/images/img-j.png'
import AboutSecondDivImage from '../../assets/images/about-second.png'
import AboutThirdDivImage from '../../assets/images/third-div-about.png'
import HardworkImage from '../../assets/images/hardwork-value-card.png'
import TransparencyImage from '../../assets/images/transparency-value-card.png'
import InnovationImage from '../../assets/images/innovation-value-card.png'
import GrowthImage from '../../assets/images/growth-value-card.png'

import MovingBanner from '../movingBanner/MovingBanner'
import ValueCard from '../valueCard/ValueCard'
import Skillbar from '../skillbar/Skillbar'

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
  SiMailchimp,
  SiGit,
  SiMarketo,
  SiAdobexd,
} from 'react-icons/si'
import Footer from '../footer/Footer'

function AboutPage() {
  const [letterClass, setLetterClass] = useState('text-animate')

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
    <SiMailchimp />,
    <SiMarketo />,
    <SiAdobexd />,
  ]

  const technologies = [
    'React',
    'HTML5',
    'CSS3',
    'Flutter',
    'Firebase',
    'WordPress',
    'Squarespace',
    'Wix',
    'Webflow',
    'Figma',
    'Adobe Xd',
    'MailChimp',
    'Marketo',
    'JIRA',
    'Git',
  ]

  const bannerList = [
    'Branding',
    'Figma',
    'UI/UX Design',
    'Product Design',
    'Web Design',
    'Design Thinking',
    'App Development',
    'Abstract Thinking',
    'SOLID Principles',
    'CLEAN Architecture',
    'API Integration',
    'Design Patterns',
    'Algorithms & Data Structure',
    'Innovative Design',
    'Animations',
    'Unique Transitions',
  ]

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  function getTechIcon(name) {
    switch (name) {
      case 'React':
        return <SiReact size={50} color="#61DBFB" />
      case 'HTML5':
        return <SiHtml5 size={50} color="#E34F26" />
      case 'CSS3':
        return <SiCss3 size={50} color="#1572B6" />
      case 'Flutter':
        return <SiFlutter size={50} color="#02569B" />
      case 'Firebase':
        return <SiFirebase size={50} color="#FFCA28" />
      case 'WordPress':
        return <SiWordpress size={50} color="#21759B" />
      case 'Squarespace':
        return <SiSquarespace size={50} color="#222222" />
      case 'Wix':
        return <SiWix size={50} color="#13B0B6" />
      case 'Webflow':
        return <SiWebflow size={50} color="#4353FF" />
      case 'Figma':
        return <SiFigma size={50} color="#F24E1E" />
      case 'Adobe Xd':
        return <SiAdobexd size={50} color="#FF007A" />
      case 'MailChimp':
        return <SiMailchimp size={50} color="#FFE01B" />
      case 'Marketo':
        return <SiMarketo size={50} color="#502D88" />
      case 'JIRA':
        return <SiJira size={50} color="#0052CC" />
      case 'Git':
        return <SiGit size={50} color="#F05032" />
      default:
        return null
    }
  }

  function getPercentage(tech) {
    switch (tech) {
      case 'React':
        return 80
      case 'HTML5':
        return 90
      case 'CSS3':
        return 85
      case 'Flutter':
        return 70
      case 'Firebase':
        return 75
      case 'WordPress':
        return 75
      case 'Squarespace':
        return 80
      case 'Wix':
        return 50
      case 'Webflow':
        return 65
      case 'Figma':
        return 75
      case 'Adobe Xd':
        return 60
      case 'MailChimp':
        return 80
      case 'Marketo':
        return 70
      case 'JIRA':
        return 70
      case 'Git':
        return 90
      default:
        return 0
    }
  }

  return (
    <>
      <div className="container about-page">
        <div className="content">
          <div className="main-div">
            <div className="about-text-zone">
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                  idx={15}
                />
              </h1>
              <div className="bullet-point">
                <div
                  className="bullet"
                  style={{ backgroundColor: '#fdd700' }}
                ></div>
                <p>
                  I specialise in frontend Development using the Javascript's
                  React Library. I am also proficient in using different CMSs to
                  manage websites such as Webflow, Wordpress, Squarespace etc.
                </p>
              </div>
              <div className="bullet-point">
                <div
                  className="bullet"
                  style={{ backgroundColor: '#fdd700' }}
                ></div>
                <p>
                  I am a recent graduate with a lot of passion and enthusiasm
                  for creating unique eye-catching website designs.
                </p>
              </div>
              <div className="bullet-point">
                <div
                  className="bullet"
                  style={{ backgroundColor: '#fdd700' }}
                ></div>
                <p>
                  I am looking for an oppurtunity to work in a team of
                  developers where I can contribute towards building innovative
                  digital products.
                </p>
              </div>
              <div className="bullet-point">
                <div
                  className="bullet"
                  style={{ backgroundColor: '#fdd700' }}
                ></div>
                <p>
                  I can confidently say that I can transform most of the
                  wireframe deign into a working webpage.
                </p>
              </div>
            </div>

            <div className="about-image">
              <img src={AboutImage} />
            </div>
          </div>

          <div className="second-about-div">
            <div className="img-container">
              <h1>
                My <span>story</span> as a designer
              </h1>
              <img src={AboutSecondDivImage} alt="Image" />
            </div>
            <div className="text-container">
              <p>
                As a designer, I've always found inspiration in the work of
                other talented creatives. Whether it's a beautifully designed
                website, a striking piece of print design, or an eye-catching
                branding campaign, <br />
                <br />
                I'm always on the lookout for new and exciting ideas. When a
                design really catches my eye, I'm not content to simply admire
                it – I want to learn from it. I'll often spend hours dissecting
                a design, trying to understand the thought process behind it and
                the techniques used to create it. <br />
                <br />I also enjoy taking on redesign projects for businesses
                that are lacking in website appeal or user experience. There's
                nothing more satisfying than turning a cluttered or poorly
                designed website into a polished, professional masterpiece.{' '}
                <br />
                <br />
                I'm always on the lookout for design opportunities like this,
                and I love using my skills and creativity to help businesses
                improve their online presence.
              </p>
              <button
                className="get-in-touch-button"
                onClick={() => {
                  window.location.href = '/contact'
                }}
              >
                Get in touch
              </button>
            </div>
          </div>
        </div>

        <div className="third-about-div">
          <div className="text-container">
            <h1>
              Designing since I was
              <br /> <span>14 years old</span>
            </h1>
            <p>
              I've been passionate about drawing, painting, and designing since
              I was a young child. I spent countless hours sketching and
              doodling, experimenting with different colors, textures, and
              mediums. As I got older, my passion for art and design only grew,
              and I began to explore new techniques and mediums, from digital
              art and graphic design to web development and user experience
              design. <br />
              <br />
              For me, design is more than just a career – it's a way of
              expressing myself and sharing my ideas with the world. I'm always
              on the lookout for new and exciting projects to work on, and I'm
              constantly pushing myself to learn and grow as a designer. Whether
              I'm creating a logo for a new business or designing a website from
              scratch, I put my heart and soul into every project I take on.
            </p>
            <div className="bullet-point">
              <div className="bullet" style={{ backgroundColor: 'red' }}></div>
              <p>
                Art has always been a source of inspiration and creativity for
                me, and I love using my passion for drawing, painting, and
                design to inform and enhance my work as a designer.
              </p>
            </div>

            <div className="bullet-point">
              <div className="bullet" style={{ backgroundColor: 'blue' }}></div>
              <p>
                My artwork has been recognized and praised in numerous art
                competitions throughout my school life.
              </p>
            </div>

            <div className="bullet-point">
              <div
                className="bullet"
                style={{ backgroundColor: 'green' }}
              ></div>
              <p>
                By combining my technical skills with my artistic sensibility,
                I'm able to create designs that are not only visually stunning
                but also functional and user-friendly.
              </p>
            </div>

            <button
              className="get-in-touch-button"
              onClick={() => {
                window.location.href = '/contact'
              }}
              style={{ backgroundColor: '#fff', color: 'black' }}
            >
              Get in touch
            </button>
          </div>
          <div className="img-container">
            <img src={AboutThirdDivImage} />
          </div>
        </div>

        <div className="content">
          <div className="tech-stack-div">
            <h1>
              My <span>Tech Stack</span>
            </h1>

            <div className="tech-cards-container">
              {technologies.map((tech) => (
                <div className="tech-card" key={tech}>
                  <div className="tech-icon">{getTechIcon(tech)}</div>
                  <h2>{tech}</h2>
                  <Skillbar percentage={getPercentage(tech)} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="banner-container">
          <MovingBanner list={bannerList} addBullet={true} />
        </div>

        <div className="content">
          <div className="fourth-about-div">
            <div className="text-container">
              <h1 className="core-value-heading">
                The core <span>values</span> that drive my work
              </h1>
              <p>
                Upholding core values is important because it helps to guide our
                behavior and decision-making in both personal and professional
                settings. These values provide a moral compass that helps me
                navigate challenges and make difficult choices with integrity
                and consistency.
              </p>
            </div>
            <div className="value-cards-container">
              <ValueCard
                title={'Hard Work'}
                description={
                  'Diligent effort is essential for achieving success and reaching our full potential.'
                }
                imgSrc={HardworkImage}
              />
              <ValueCard
                title={'Transparency'}
                description={
                  'Honesty and openness in communication fosters trust and accountability in our relationships and endeavors.'
                }
                imgSrc={TransparencyImage}
              />
              <ValueCard
                title={'Innovation'}
                description={
                  'Embracing creativity and new ideas is necessary to drive progress and solve complex problems.'
                }
                imgSrc={InnovationImage}
              />
              <ValueCard
                title={'Growth'}
                description={
                  'Continuously learning and developing our skills and knowledge is crucial for personal and professional fulfillment.'
                }
                imgSrc={GrowthImage}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <Loader />
    </>
  )
}

export default AboutPage
