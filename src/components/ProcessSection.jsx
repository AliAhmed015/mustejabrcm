import { processSteps } from '../data/portfolioData'

export function ProcessSection() {
  return (
    <section className="section" id="process" aria-labelledby="process-heading">
      <div className="section-heading">
        <span className="section-eyebrow">How I Work</span>
        <h2 id="process-heading">A clear and organized process for billing support.</h2>
        <p className="section-intro">
          Systematic onboarding and structured execution designed to bring predictable cash flow to healthcare practices.
        </p>
      </div>

      <div className="process-grid">
        {processSteps.map((step, idx) => (
          <article key={step.number} className="step-card">
            <div className="step-card-header">
              <span className="step-number" aria-hidden="true">{step.number}</span>
              <span className="step-badge">Phase {idx + 1}</span>
            </div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-text">{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
