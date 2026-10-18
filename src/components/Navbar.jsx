import { useState, useEffect } from 'react'
import { personalInfo } from '../data/portfolioData'

export function Navbar({ activeSection = 'home', onOpen }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Track window scroll for elevated backdrop blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  const navLinks = [
    { href: '#services', label: 'Services', id: 'services' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#process', label: 'Process', id: 'process' },
    { href: '#clients', label: 'Who I Support', id: 'clients' },
    { href: '#compliance', label: 'Compliance', id: 'compliance' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ]

  return (
    <>
      <header className={`topbar ${isScrolled ? 'topbar-scrolled' : ''}`}>
        {/* Brand / Logo — left side */}
        <a href="#home" className="brand-block" onClick={handleLinkClick} aria-label={`${personalInfo.name} - Home`}>
          <div className="brand-mark" aria-hidden="true">
            <span>{personalInfo.initials}</span>
          </div>
          <div className="brand-text">
            <span className="brand-name">{personalInfo.name.toUpperCase()}</span>
            <span className="brand-tag">MEDICAL BILLING &amp; RCM</span>
          </div>
        </a>

        {/* Desktop Navigation — right side */}
        <div className="nav-actions">
          <nav className="desktop-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.label}
                {activeSection === link.id && <span className="active-dot" aria-hidden="true" />}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => {
              if (!mobileMenuOpen) {
                onOpen?.()
              }
              setMobileMenuOpen(!mobileMenuOpen)
            }}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-drawer"
          >
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer & Backdrop */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-backdrop" onClick={() => setMobileMenuOpen(false)}>
          <div
            id="mobile-drawer"
            className="mobile-drawer"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="drawer-header">
              <div className="brand-block">
                <div className="brand-mark" aria-hidden="true">
                  <span>{personalInfo.initials}</span>
                </div>
                <div className="brand-text">
                  <span className="brand-name">{personalInfo.name.toUpperCase()}</span>
                  <span className="brand-tag">MEDICAL BILLING &amp; RCM</span>
                </div>
              </div>
              <button
                type="button"
                className="drawer-close-button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <nav className="mobile-nav" aria-label="Mobile menu links">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={handleLinkClick}
                >
                  <span>{link.label}</span>
                  <span className="arrow" aria-hidden="true">→</span>
                </a>
              ))}
            </nav>

            <div className="drawer-footer">
              <p className="drawer-note">
                Specialized U.S. Healthcare Revenue Cycle &amp; Credentialing Support
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
