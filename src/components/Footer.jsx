import { personalInfo } from '../data/portfolioData'
import { ChevronUpIcon, ShieldCheckIcon } from './Icons'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="brand-block">
          <div className="brand-mark" aria-hidden="true">
            <span>{personalInfo.initials}</span>
          </div>
          <div>
            <div className="brand-name">{personalInfo.name.toUpperCase()}</div>
            <div className="brand-tag">MEDICAL BILLING &amp; RCM SPECIALIST</div>
          </div>
        </div>

        <p className="footer-summary">
          Dedicated Medical Billing &amp; Revenue Cycle Management support for U.S. healthcare practices, clinics, and provider groups.
        </p>

        <button
          type="button"
          className="back-to-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll back to top of page"
          title="Back to top"
        >
          <span>Back to Top</span>
          <ChevronUpIcon size={18} />
        </button>
      </div>

      <div className="footer-bottom">
        <div className="footer-meta">
          <ShieldCheckIcon size={16} className="footer-shield" />
          <span>Strict HIPAA Privacy &amp; Data Security Standards</span>
        </div>
        <p className="copyright">
          &copy; {currentYear}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
