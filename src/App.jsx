import { useState } from 'react'
import './App.css'

const stats = [
  { value: '4+', label: 'Years of experience' },
  { value: '12', label: 'Service areas' },
  { value: 'RCM', label: 'End-to-end focus' },
]

const serviceGroups = [
  {
    id: 'billing',
    name: 'Medical Billing',
    description: 'Claims, payment flow, denial resolution, follow-up, and billing accuracy support.',
    services: [
      'Claims Submission & Management',
      'Payment Posting & EOB/ERA Review',
      'Denial Management & Appeals Support',
      'Accounts Receivable Follow-Up',
      'Insurance Eligibility & Benefits Verification',
      'Claim Rejection Resolution & Corrected Claims',
    ],
  },
  {
    id: 'rcm',
    name: 'RCM Operations',
    description: 'Operational workflow support, reconciliation, and underpayment review.',
    services: [
      'Underpayment Analysis & Payment Reconciliation',
      'Medical Billing Workflow & RCM Support',
    ],
  },
  {
    id: 'credentialing',
    name: 'Credentialing & Enrollment',
    description: 'Provider credentialing, payer enrollment, and CAQH maintenance support.',
    services: [
      'Provider Credentialing',
      'Insurance Payer Enrollment',
      'CAQH Profile Management',
      'Credentialing Follow-Up & Documentation Management',
    ],
  },
  {
    id: 'leadership',
    name: 'Leadership & Team Support',
    description: 'Workflow guidance, quality monitoring, and team coordination for billing operations.',
    services: [
      'Team Coordination & Daily Billing Workflow Support',
      'Quality Monitoring & Process Improvement',
    ],
  },
]

const workflowStages = [
  {
    title: 'Eligibility Check',
    detail: 'Verifying insurance coverage, benefits, and payer requirements before services are rendered.',
  },
  {
    title: 'Claim Submission',
    detail: 'Reviewing claim data, preparing submissions, and identifying missing or incorrect information.',
  },
  {
    title: 'Payment Posting',
    detail: 'Reviewing EOBs and ERAs, posting payments, and identifying patient responsibility or discrepancies.',
  },
  {
    title: 'Denial Management',
    detail: 'Analyzing denials, investigating root causes, and preparing corrective action or appeal support.',
  },
  {
    title: 'AR Follow-Up',
    detail: 'Tracking outstanding claims, navigating payer responses, and maintaining account follow-up workflows.',
  },
  {
    title: 'Reconciliation',
    detail: 'Ensuring balances are accurate, updates are documented, and revenue-cycle issues are addressed promptly.',
  },
]

const principles = [
  {
    title: 'Accuracy',
    text: 'Maintaining attention to detail throughout billing, claim review, payment posting, and account follow-up.',
  },
  {
    title: 'Accountability',
    text: 'Tracking outstanding issues, identifying the next corrective action, and following through consistently.',
  },
  {
    title: 'Continuous Improvement',
    text: 'Reviewing denial patterns, operational bottlenecks, and recurring billing issues to strengthen workflows.',
  },
]

const clientSegments = [
  'Independent physicians and healthcare providers',
  'Primary care and specialty practices',
  'Physician groups and group practices',
  'Medical billing companies',
  'Healthcare startups and growing practices',
  'Organizations needing claims, denials, AR, or credentialing support',
]

const processSteps = [
  { number: '01', title: 'Understand the need', text: 'Review the practice’s current workflow, pain points, payer mix, and revenue-cycle priorities.' },
  { number: '02', title: 'Define the scope', text: 'Clarify which services are needed and which billing, AR, or credentialing tasks require support.' },
  { number: '03', title: 'Organize the workflow', text: 'Set up worklists, follow-up timelines, documentation practices, and operational coordination.' },
  { number: '04', title: 'Maintain follow-up', text: 'Track outstanding issues, monitor progress, and communicate updates with clarity and consistency.' },
]

const compliancePoints = [
  'Responsible handling of healthcare and provider information',
  'Attention to HIPAA-related privacy and security practices',
  'Clear communication about work status and follow-up actions',
  'Support for accurate documentation and payer requirements',
]

function App() {
  const [activeFamily, setActiveFamily] = useState(serviceGroups[0].id)
  const [activeStage, setActiveStage] = useState(0)
  const [submitState, setSubmitState] = useState('idle')
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    service: 'Medical Billing',
    message: '',
  })

  const currentFamily = serviceGroups.find((group) => group.id === activeFamily) || serviceGroups[0]

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitState('success')
  }

  return (
    <div className="portfolio-shell">
      <header className="topbar">
        <div className="brand-block">
          <div className="brand-mark">SM</div>
          <div>
            <div className="brand-name">SYED MUSTEJAB</div>
            <div className="brand-tag">MEDICAL BILLING & RCM</div>
          </div>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="button button-primary">Let&apos;s discuss</a>
      </header>

      <main>
        <section className="hero section-dark" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Medical Billing &amp; Revenue Cycle Management</p>
            <h1>Less billing friction. More clarity across your revenue cycle.</h1>
            <p className="lede">
              Medical billing, denial management, AR follow-up, and provider credentialing support for healthcare practices.
            </p>

            <div className="cta-row">
              <a href="#services" className="button button-primary">Explore services</a>
              <a href="#contact" className="button button-secondary">Let&apos;s discuss your needs</a>
            </div>

            <div className="stats-grid" aria-label="Professional experience and service overview">
              {stats.map((item) => (
                <div key={item.label} className="stat-card">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-label="Revenue cycle overview panel">
            <div className="visual-header">
              <span className="status-dot" aria-hidden="true" />
              Revenue Cycle Overview
            </div>

            <div className="visual-grid">
              {workflowStages.map((stage, index) => (
                <button
                  key={stage.title}
                  type="button"
                  className={`journey-node ${activeStage === index ? 'active' : ''}`}
                  onClick={() => setActiveStage(index)}
                  aria-pressed={activeStage === index}
                >
                  <span>{index + 1}</span>
                  <strong>{stage.title}</strong>
                </button>
              ))}
            </div>

            <div className="journey-copy">
              <p className="copy-label">Current focus</p>
              <h3>{workflowStages[activeStage].title}</h3>
              <p>{workflowStages[activeStage].detail}</p>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Business service highlights">
          <div>Medical Billing</div>
          <div>RCM Operations</div>
          <div>Claims &amp; Denials</div>
          <div>Credentialing</div>
          <div>AR Follow-Up</div>
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <p className="eyebrow eyebrow-dark">Service Portfolio</p>
            <h2>Built for the real flow of healthcare revenue operations.</h2>
          </div>

          <div className="service-explorer">
            <div className="service-tabs" role="tablist" aria-label="Service categories">
              {serviceGroups.map((group) => (
                <button
                  key={group.id}
                  type="button"
                  className={activeFamily === group.id ? 'tab active' : 'tab'}
                  onClick={() => setActiveFamily(group.id)}
                  role="tab"
                  aria-selected={activeFamily === group.id}
                >
                  {group.name}
                </button>
              ))}
            </div>

            <div className="service-panel">
              <div className="service-panel-header">
                <span>{currentFamily.name}</span>
                <p>{currentFamily.description}</p>
              </div>

              <div className="service-list">
                {currentFamily.services.map((service) => (
                  <article key={service} className="service-item">
                    <div className="service-index">•</div>
                    <div>
                      <h3>{service}</h3>
                      <p>
                        {service === 'Claims Submission & Management' &&
                          'Claim preparation, billing accuracy checks, submission support, rejection identification, and follow-up on pending claims.'}
                        {service === 'Payment Posting & EOB/ERA Review' &&
                          'Posting insurance payments, reviewing EOBs and ERAs, identifying patient responsibility, and supporting reconciliation.'}
                        {service === 'Denial Management & Appeals Support' &&
                          'Reviewing denial reasons, assessing adjustment codes, investigating root causes, and preparing support for appeals.'}
                        {service === 'Accounts Receivable Follow-Up' &&
                          'Reviewing aging accounts, checking claim statuses, and prioritizing outstanding balances and payer follow-ups.'}
                        {service === 'Insurance Eligibility & Benefits Verification' &&
                          'Confirming active coverage, benefits, copays, deductibles, and coverage dates before services are rendered.'}
                        {service === 'Claim Rejection Resolution & Corrected Claims' &&
                          'Reviewing rejection messages, correcting claim data, and resubmitting claims efficiently.'}
                        {service === 'Underpayment Analysis & Payment Reconciliation' &&
                          'Reviewing payment discrepancies, identifying underpayments, and supporting reconciliation workflows.'}
                        {service === 'Medical Billing Workflow & RCM Support' &&
                          'Organizing worklists, prioritizing follow-up, and supporting better operational consistency across billing tasks.'}
                        {service === 'Provider Credentialing' &&
                          'Assisting with application completion, required documentation, status tracking, and recredentialing workflow support.'}
                        {service === 'Insurance Payer Enrollment' &&
                          'Supporting payer enrollment applications, tracking progress, and managing enrollment-related follow-up.'}
                        {service === 'CAQH Profile Management' &&
                          'Maintaining demographic, professional, and document information to keep profiles accurate and current.'}
                        {service === 'Credentialing Follow-Up & Documentation Management' &&
                          'Monitoring application progress, organizing records, and supporting documentation and payer communications.'}
                        {service === 'Team Coordination & Daily Billing Workflow Support' &&
                          'Helping coordinate daily work queues, monitor productivity, and address operational challenges with consistent follow-through.'}
                        {service === 'Quality Monitoring & Process Improvement' &&
                          'Reviewing completed work, identifying recurring issues, and helping strengthen billing process quality and consistency.'}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section alt-section" id="about">
          <div className="section-heading narrow-heading">
            <p className="eyebrow eyebrow-dark">About</p>
            <h2>Trusted support for the details that shape reimbursement.</h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                I am a dedicated Medical Billing and Revenue Cycle Management (RCM) Specialist with over 4 years of experience in the U.S. healthcare industry, helping healthcare organizations manage billing operations, improve claims processing efficiency, address reimbursement challenges, and maintain a more organized revenue cycle.
              </p>
              <p>
                As a Team Lead, I combine technical billing knowledge, analytical problem-solving, workflow management, and team leadership skills to support practices, groups, and billing operations that need steady, detail-driven follow-through.
              </p>
              <p>
                My goal is to help healthcare providers streamline their revenue cycle processes while reducing administrative burdens and supporting consistent, timely reimbursements.
              </p>
            </div>

            <div className="principles-card">
              <h3>My professional approach</h3>
              <div className="principles-list">
                {principles.map((principle) => (
                  <div key={principle.title} className="principle-item">
                    <span>{principle.title}</span>
                    <p>{principle.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="process">
          <div className="section-heading">
            <p className="eyebrow eyebrow-dark">How I work</p>
            <h2>A clear and organized process for billing support.</h2>
          </div>

          <div className="process-grid">
            {processSteps.map((step) => (
              <article key={step.number} className="step-card">
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section alt-section">
          <div className="section-heading narrow-heading">
            <p className="eyebrow eyebrow-dark">Who I support</p>
            <h2>Healthcare organizations that need dependable billing and credentialing support.</h2>
          </div>

          <div className="client-grid">
            {clientSegments.map((segment) => (
              <div key={segment} className="client-pill">
                {segment}
              </div>
            ))}
          </div>
        </section>

        <section className="section compliance-section">
          <div className="compliance-box">
            <div>
              <p className="eyebrow eyebrow-dark">Compliance &amp; Confidentiality</p>
              <h2>Professional support built around accuracy, communication, and responsibility.</h2>
            </div>

            <ul className="compliance-list">
              {compliancePoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-copy">
            <p className="eyebrow eyebrow-dark">Let&apos;s work together</p>
            <h2>Tell me what you need help with.</h2>
            <p>
              Whether you need assistance with day-to-day medical billing, denial management, AR follow-up, payment posting, or provider credentialing, I am ready to discuss how my experience can support your organization.
            </p>
            <div className="contact-details">
              <div>
                <strong>Focus</strong>
                <span>Medical Billing | RCM | Credentialing</span>
              </div>
              <div>
                <strong>Experience</strong>
                <span>4+ years in U.S. healthcare operations</span>
              </div>
              <div>
                <strong>Role</strong>
                <span>Medical Billing &amp; RCM Specialist | Team Lead</span>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                Name
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              </label>
              <label>
                Company
                <input type="text" name="company" value={formData.company} onChange={handleChange} required />
              </label>
            </div>

            <div className="form-row">
              <label>
                Email
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </label>
              <label>
                Service Needed
                <select name="service" value={formData.service} onChange={handleChange}>
                  <option>Medical Billing</option>
                  <option>RCM Operations</option>
                  <option>Denial Management</option>
                  <option>AR Follow-Up</option>
                  <option>Credentialing &amp; Enrollment</option>
                  <option>General Support</option>
                </select>
              </label>
            </div>

            <label>
              How can I help?
              <textarea name="message" value={formData.message} onChange={handleChange} rows="5" required />
            </label>

            <button type="submit" className="button button-primary form-button">Send inquiry</button>

            {submitState === 'success' && (
              <p className="success-message">Thank you. Your inquiry has been prepared and is ready to be sent to the professional contact workflow.</p>
            )}
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="brand-block">
          <div className="brand-mark">SM</div>
          <div>
            <div className="brand-name">SYED MUSTEJAB</div>
            <div className="brand-tag">MEDICAL BILLING &amp; RCM</div>
          </div>
        </div>

        <p>Medical Billing &amp; RCM Specialist | Team Lead | 4+ Years of Experience</p>
      </footer>
    </div>
  )
}

export default App
