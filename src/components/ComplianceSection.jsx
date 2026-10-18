import { compliancePoints } from '../data/portfolioData'
import { ShieldCheckIcon, CheckCircleIcon } from './Icons'

export function ComplianceSection() {
  return (
    <section className="section compliance-section" id="compliance" aria-labelledby="compliance-heading">
      <div className="compliance-box">
        <div className="compliance-intro">
          <div className="compliance-badge">
            <ShieldCheckIcon size={18} className="shield-icon" />
            <span>Healthcare Standards</span>
          </div>
          <span className="section-eyebrow">Compliance &amp; Confidentiality</span>
          <h2 id="compliance-heading">Professional support built around accuracy, communication, and responsibility.</h2>
          <p className="compliance-lede">
            Safeguarding Protected Health Information (PHI) and maintaining flawless billing integrity are the absolute foundations of every workflow I manage.
          </p>
        </div>

        <div className="compliance-grid">
          {compliancePoints.map((point) => (
            <div key={point.title} className="compliance-item">
              <div className="compliance-icon-wrap">
                <CheckCircleIcon size={20} className="compliance-check" />
              </div>
              <div className="compliance-text">
                <h4 className="compliance-item-title">{point.title}</h4>
                <p className="compliance-item-desc">{point.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
