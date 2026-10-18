import { personalInfo, principles } from '../data/portfolioData'
import { AwardIcon, ShieldCheckIcon, UsersIcon, CheckCircleIcon } from './Icons'

export function AboutSection() {
  const credentials = [
    {
      icon: <AwardIcon size={20} className="cred-icon" />,
      title: '4+ Years U.S. Healthcare',
      detail: 'Deep expertise in end-to-end billing workflows, claim lifecycles, and payer guidelines.',
    },
    {
      icon: <UsersIcon size={20} className="cred-icon" />,
      title: 'Team Lead Experience',
      detail: 'Proven capability in coordinating daily work queues, QA audits, and operational training.',
    },
    {
      icon: <ShieldCheckIcon size={20} className="cred-icon" />,
      title: 'HIPAA & Compliance Focus',
      detail: 'Uncompromising dedication to patient privacy, PHI security, and CMS regulatory standards.',
    },
  ]

  return (
    <section className="section alt-section" id="about" aria-labelledby="about-heading">
      <div className="section-heading narrow-heading">
        <span className="section-eyebrow">About Me</span>
        <h2 id="about-heading">Trusted support for the details that shape reimbursement.</h2>
      </div>

      <div className="about-grid">
        <div className="about-copy">
          {personalInfo.bio.map((paragraph, index) => (
            <p key={index} className="about-text">
              {paragraph}
            </p>
          ))}

          {/* Core Strengths Strip */}
          <div className="credentials-row" aria-label="Professional highlights">
            {credentials.map((cred) => (
              <div key={cred.title} className="cred-card">
                <div className="cred-icon-wrap">{cred.icon}</div>
                <div>
                  <h4 className="cred-title">{cred.title}</h4>
                  <p className="cred-desc">{cred.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="principles-card">
          <div className="principles-card-header">
            <span className="principles-badge">Core Pillars</span>
            <h3 className="principles-heading">My Professional Approach</h3>
            <p className="principles-sub">
              Every practice workflow is built upon three non-negotiable operational standards.
            </p>
          </div>

          <div className="principles-list">
            {principles.map((principle) => (
              <div key={principle.title} className="principle-item">
                <div className="principle-top">
                  <CheckCircleIcon size={18} className="principle-icon" />
                  <div>
                    <h4 className="principle-title">{principle.title}</h4>
                    <span className="principle-tagline">{principle.tagline}</span>
                  </div>
                </div>
                <p className="principle-text">{principle.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
