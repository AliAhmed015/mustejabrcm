import { useState } from 'react'
import { serviceGroups } from '../data/portfolioData'
import { FileCheckIcon, ClipboardCheckIcon, UsersIcon, TrendingUpIcon } from './Icons'

export function ServicesSection() {
  const [activeFamily, setActiveFamily] = useState(serviceGroups[0].id)
  const currentGroup = serviceGroups.find((g) => g.id === activeFamily) || serviceGroups[0]

  const handleTabKeyDown = (event, index) => {
    let nextIndex
    if (event.key === 'ArrowRight') {
      nextIndex = (index + 1) % serviceGroups.length
    } else if (event.key === 'ArrowLeft') {
      nextIndex = (index - 1 + serviceGroups.length) % serviceGroups.length
    } else if (event.key === 'Home') {
      nextIndex = 0
    } else if (event.key === 'End') {
      nextIndex = serviceGroups.length - 1
    } else {
      return
    }

    event.preventDefault()
    const nextGroup = serviceGroups[nextIndex]
    setActiveFamily(nextGroup.id)
    document.getElementById(`tab-${nextGroup.id}`)?.focus()
  }

  // Map category to an appropriate icon
  const getCategoryIcon = (id) => {
    switch (id) {
      case 'billing':
        return <FileCheckIcon size={20} className="category-icon" />
      case 'rcm':
        return <TrendingUpIcon size={20} className="category-icon" />
      case 'credentialing':
        return <ClipboardCheckIcon size={20} className="category-icon" />
      case 'leadership':
        return <UsersIcon size={20} className="category-icon" />
      default:
        return <FileCheckIcon size={20} className="category-icon" />
    }
  }

  return (
    <section className="section" id="services" aria-labelledby="services-heading">
      <div className="section-heading">
        <span className="section-eyebrow">Service Portfolio</span>
        <h2 id="services-heading">Built for the real flow of healthcare revenue operations.</h2>
        <p className="section-intro">
          Targeted support across claims submission, reimbursement recovery, enrollment, and operational workflows.
        </p>
      </div>

      <div className="service-explorer">
        {/* Category Tabs */}
        <div className="service-tabs" role="tablist" aria-label="Service categories">
          {serviceGroups.map((group, index) => {
            const isActive = activeFamily === group.id
            return (
              <button
                key={group.id}
                type="button"
                className={`tab ${isActive ? 'active' : ''}`}
                onClick={() => setActiveFamily(group.id)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
                role="tab"
                id={`tab-${group.id}`}
                aria-selected={isActive}
                aria-controls={`tabpanel-${group.id}`}
                tabIndex={isActive ? 0 : -1}
              >
                <div className="tab-label-wrap">
                  {getCategoryIcon(group.id)}
                  <span className="tab-title">{group.name}</span>
                </div>
                <span className="tab-count">{group.services.length}</span>
              </button>
            )
          })}
        </div>

        {/* Active Panel Content */}
        <div
          className="service-panel"
          role="tabpanel"
          id={`tabpanel-${currentGroup.id}`}
          aria-labelledby={`tab-${currentGroup.id}`}
        >
          <div className="service-panel-header">
            <div className="panel-badge-row">
              <span className="panel-badge">{currentGroup.name}</span>
              <span className="panel-count">{currentGroup.services.length} Specialized Services</span>
            </div>
            <h3 className="panel-tagline">{currentGroup.tagline}</h3>
            <p className="panel-desc">{currentGroup.description}</p>
          </div>

          <div className="service-grid">
            {currentGroup.services.map((service, index) => (
              <article key={service.title} className="service-card">
                <div className="service-card-top">
                  <span className="service-index-badge">{String(index + 1).padStart(2, '0')}</span>
                  <div className="service-dot" aria-hidden="true" />
                </div>
                <h4 className="service-title">{service.title}</h4>
                <p className="service-desc">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
