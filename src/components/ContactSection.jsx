import { personalInfo } from '../data/portfolioData'
import { MailIcon, LinkedInIcon, ArrowUpRightIcon, CheckCircleIcon } from './Icons'

const email = personalInfo.email.trim()
const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
const directMailHref = isValidEmail
  ? `mailto:${email}?subject=Medical%20Billing%20%26%20RCM%20Inquiry`
  : null

const linkedinUrl = (() => {
  const profile = personalInfo.linkedin.trim()
  if (!profile) return null

  try {
    const url = new URL(/^[a-z][a-z\d+.-]*:/i.test(profile) ? profile : `https://${profile}`)
    const hostname = url.hostname.toLowerCase()
    const isLinkedIn = hostname === 'linkedin.com' || hostname === 'www.linkedin.com'
    const isProfilePath = /^\/(?:in|company)\/[A-Za-z0-9_%.-]+\/?$/i.test(url.pathname)
    return url.protocol === 'https:' && isLinkedIn && isProfilePath && !url.search && !url.hash
      ? url.href
      : null
  } catch {
    return null
  }
})()

const whatICanHelpWith = [
  'Medical Billing & Claims Submission',
  'Denial Management & AR Follow-Up',
  'Payment Posting & Reconciliation',
  'Provider Credentialing & Enrollment',
  'Revenue Cycle Audits & Reporting',
  'Team Lead & Workflow Support',
]

export function ContactSection() {
  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-heading">
      {/* Left column — a clear, provider-focused invitation */}
      <div className="contact-copy">
        <span className="section-eyebrow">Let&apos;s Work Together</span>
        <h2 id="contact-heading">Need dependable support for your revenue cycle?</h2>
        <p className="contact-lede">
          Get hands-on help with billing, denial follow-up, payment posting, and provider credentialing.
          Let&apos;s discuss the support your practice needs to keep revenue operations moving.
        </p>
      </div>

      {/* Right column — email contact and existing service strengths */}
      <div className="contact-card-col">
        <div className="contact-card">
          <div className="contact-card-heading">
            <span className="section-eyebrow">How I can help</span>
            <h3>Practical support for your team</h3>
          </div>

          <ul className="contact-help-list" aria-label="Areas I can help with">
            {whatICanHelpWith.map((item) => (
              <li key={item} className="contact-help-item">
                <CheckCircleIcon size={16} className="contact-help-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="contact-card-divider" />

          {directMailHref ? (
            <a
              href={directMailHref}
              className="contact-detail-link"
              aria-label={`Email ${personalInfo.name}`}
              title={email}
            >
              <span className="contact-detail-icon" aria-hidden="true">
                <MailIcon size={20} />
              </span>
              <span className="contact-detail-info">
                <span className="contact-detail-label">Email</span>
                <span className="contact-detail-value">{email}</span>
              </span>
              <ArrowUpRightIcon size={18} className="contact-detail-arrow" />
            </a>
          ) : (
            <div className="contact-detail-link contact-detail-link-unavailable">
              <span className="contact-detail-icon" aria-hidden="true">
                <MailIcon size={20} />
              </span>
              <span className="contact-detail-info">
                <span className="contact-detail-label">Email</span>
                <span className="contact-detail-value">Email address not configured yet</span>
              </span>
            </div>
          )}

          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-detail-link"
              aria-label="Visit LinkedIn profile"
              title={linkedinUrl}
            >
              <span className="contact-detail-icon" aria-hidden="true">
                <LinkedInIcon size={20} />
              </span>
              <span className="contact-detail-info">
                <span className="contact-detail-label">LinkedIn</span>
                <span className="contact-detail-value">View profile</span>
              </span>
              <ArrowUpRightIcon size={18} className="contact-detail-arrow" />
            </a>
          )}

          <p className="contact-response-note">I typically respond within one business day.</p>
        </div>
      </div>
    </section>
  )
}
