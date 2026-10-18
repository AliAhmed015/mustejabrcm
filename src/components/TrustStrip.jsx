import { trustHighlights } from '../data/portfolioData'
import { ShieldCheckIcon } from './Icons'

export function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Core operational competencies">
      <div className="trust-strip-inner">
        {trustHighlights.map((highlight) => (
          <div key={highlight} className="trust-item">
            <ShieldCheckIcon size={16} className="trust-icon" />
            <span>{highlight}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
