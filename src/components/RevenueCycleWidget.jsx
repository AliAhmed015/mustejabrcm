import { useState } from 'react'
import { workflowStages } from '../data/portfolioData'

export function RevenueCycleWidget() {
  const [activeStage, setActiveStage] = useState(0)
  const current = workflowStages[activeStage]

  const handlePrev = () => {
    setActiveStage((prev) => (prev > 0 ? prev - 1 : workflowStages.length - 1))
  }

  const handleNext = () => {
    setActiveStage((prev) => (prev < workflowStages.length - 1 ? prev + 1 : 0))
  }

  return (
    <div className="hero-visual" aria-label="Revenue cycle interactive workflow panel">
      <div className="visual-header">
        <div className="visual-badge">
          <span className="status-dot" aria-hidden="true" />
          <span>Interactive Workflow</span>
        </div>
        <span className="cycle-counter">Step {activeStage + 1} of {workflowStages.length}</span>
      </div>

      <div className="visual-grid" role="group" aria-label="Revenue cycle stages">
        {workflowStages.map((stage, index) => {
          const isActive = activeStage === index
          return (
            <button
              key={stage.title}
              type="button"
              className={`journey-node ${isActive ? 'active' : ''}`}
              onClick={() => setActiveStage(index)}
              aria-pressed={isActive}
            >
              <span className="node-num" aria-hidden="true">{stage.step}</span>
              <div className="node-text">
                <strong>{stage.title}</strong>
              </div>
            </button>
          )
        })}
      </div>

      <div className="journey-copy" role="region" aria-live="polite">
        <div className="journey-copy-header">
          <span className="copy-label">{current.tagline}</span>
          <div className="step-stepper" aria-label="Step navigation">
            <button
              type="button"
              className="stepper-btn"
              onClick={handlePrev}
              aria-label="Previous workflow step"
            >
              ←
            </button>
            <button
              type="button"
              className="stepper-btn"
              onClick={handleNext}
              aria-label="Next workflow step"
            >
              →
            </button>
          </div>
        </div>

        <h3 className="journey-title">{current.title}</h3>
        <p className="journey-detail">{current.detail}</p>
      </div>
    </div>
  )
}
