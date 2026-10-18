import { clientSegments } from '../data/portfolioData'
import { CheckCircleIcon } from './Icons'

export function ClientSegments() {
  return (
    <section className="section alt-section" id="clients" aria-labelledby="clients-heading">
      <div className="section-heading narrow-heading">
        <span className="section-eyebrow">Who I Support</span>
        <h2 id="clients-heading">Healthcare organizations that need dependable billing and credentialing support.</h2>
        <p className="section-intro">
          Flexible, high-accountability support tailored to practice size, specialty, and revenue-cycle complexity.
        </p>
      </div>

      <div className="client-grid">
        {clientSegments.map((segment) => (
          <div key={segment.name} className="client-card">
            <div className="client-card-top">
              <CheckCircleIcon size={18} className="client-check-icon" />
              <h3 className="client-title">{segment.name}</h3>
            </div>
            <p className="client-desc">{segment.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
