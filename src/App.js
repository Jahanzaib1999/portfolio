import './App.scss'
import { Route, Routes } from 'react-router-dom'
import React from 'react'

//components
import Layout from './components/layout/Layout'
import HomePage from './components/home/HomePage'
import AboutPage from './components/about/AboutPage'
import ContactPage from './components/contact/ContactPage'
import PortfolioPage from './components/portfolio/PortfolioPage'
import EducationPage from './components/education/EducationPage'
import ServicesPage from './components/servicespage/ServicesPage'
import Footer from './components/footer/Footer'
import ErrorPage from './components/errorpage/ErrorPage'
import ProjectDetailPage from './components/projectDetailPage/ProjectDetailPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route exact path="/portfolio/:id" element={<ProjectDetailPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
