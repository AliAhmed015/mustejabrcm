import { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TrustStrip } from './components/TrustStrip'
import { ServicesSection } from './components/ServicesSection'
import { AboutSection } from './components/AboutSection'
import { ProcessSection } from './components/ProcessSection'
import { ClientSegments } from './components/ClientSegments'
import { ComplianceSection } from './components/ComplianceSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import './App.css'

function getCurrentSection() {
  const headerBottom = document.querySelector('.topbar')?.getBoundingClientRect().bottom ?? 0
  const activationLine = headerBottom + 32
  let currentSection = 'home'
  let lastSection = currentSection

  document.querySelectorAll('.desktop-nav a[href^="#"]').forEach((link) => {
    const section = document.getElementById(link.hash.slice(1))
    if (section) {
      lastSection = section.id
      if (section.getBoundingClientRect().top <= activationLine) {
        currentSection = section.id
      }
    }
  })

  const isAtPageBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2
  return isAtPageBottom ? lastSection : currentSection
}

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    let frameId = null

    const updateActiveSection = () => {
      frameId = null
      setActiveSection(getCurrentSection())
    }

    const scheduleUpdate = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateActiveSection)
      }
    }

    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    window.addEventListener('hashchange', scheduleUpdate)
    scheduleUpdate()
    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      window.removeEventListener('hashchange', scheduleUpdate)
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [])

  const refreshActiveSection = () => setActiveSection(getCurrentSection())

  return (
    <div className="portfolio-shell">
      <Navbar activeSection={activeSection} onOpen={refreshActiveSection} />

      <main id="main-content">
        <Hero />
        <TrustStrip />
        <ServicesSection />
        <AboutSection />
        <ProcessSection />
        <ClientSegments />
        <ComplianceSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
