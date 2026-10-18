import { stats } from '../data/portfolioData'
import { RevenueCycleWidget } from './RevenueCycleWidget'

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <div className="eyebrow-badge">
          <span className="pulse-indicator" aria-hidden="true" />
          <span>Medical Billing &amp; Revenue Cycle Management</span>
        </div>

        <h1 id="hero-heading">
          Less billing friction.<br />
          <span className="text-gradient">More clarity</span> across your revenue cycle.
        </h1>

        <p className="lede">
          Medical billing, denial management, AR follow-up, and provider credentialing support for healthcare practices.
        </p>

        <div className="cta-row">
          <a href="#services" className="button button-primary">
            Explore services
          </a>
          <a href="#contact" className="button button-secondary">
            Let&apos;s discuss your needs
          </a>
        </div>

        <div className="stats-grid" aria-label="Professional experience and operational focus">
          {stats.map((item) => (
            <div key={item.label} className="stat-card">
              <strong className="stat-value">{item.value}</strong>
              <span className="stat-label">{item.label}</span>
              <span className="stat-sublabel">{item.sublabel}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-widget-col">
        <RevenueCycleWidget />
      </div>
    </section>
  )
}
