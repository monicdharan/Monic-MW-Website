import React from 'react';
import { SectionHeading } from '../layout/SectionHeading';

const steps = [
  {
    number: "01",
    title: "Understand the Research Question",
    desc: "We review your clinical data sheet, study protocol, ethics approval, and target journal requirements to evaluate methodological completeness.",
  },
  {
    number: "02",
    title: "Plan Methodology & Analysis",
    desc: "Our medical statisticians audit variable distributions, execute hypothesis testing, and generate publication-standard data tables.",
  },
  {
    number: "03",
    title: "Write, Edit & Format",
    desc: "Our medical writing specialists draft the complete manuscript in strict accordance with reporting standards (STROBE, PRISMA, CARE, CONSORT).",
  },
  {
    number: "04",
    title: "Prepare for Submission & Revisions",
    desc: "We assemble the complete submission package (Cover Letter, Declarations, Checklist) and provide support addressing peer-reviewer comments.",
  },
];

export const ProcessTimeline: React.FC = () => {
  return (
    <section className="editorial-section section-bg-paper section-border-top" aria-labelledby="process-heading">
      <div className="site-container">
        <SectionHeading
          eyebrow="Our Working Method"
          title="A Structured 4-Step Academic Workflow"
          subtitle="Clear milestones from initial protocol evaluation to journal submission readiness."
        />

        <div className="process-grid">
          {steps.map((step) => (
            <div key={step.number} className="process-step-card">
              <div className="process-step-badge">{step.number}</div>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
