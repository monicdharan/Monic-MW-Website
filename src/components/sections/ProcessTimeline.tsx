import React from 'react';
import { SectionHeading } from '../layout/SectionHeading';
import { useAdminData } from '../../context/AdminDataContext';

export const ProcessTimeline: React.FC = () => {
  const { getHeader, getHeaderSubtext, getEyebrow } = useAdminData();

  const steps = [
    {
      number: "01",
      title: getHeader('process-step1-h3', 'Understand the Research Question'),
      desc: getHeaderSubtext('process-step1-h3', 'We review your clinical data sheet, study protocol, ethics approval, and target journal requirements to evaluate methodological completeness.'),
    },
    {
      number: "02",
      title: getHeader('process-step2-h3', 'Plan Methodology & Analysis'),
      desc: getHeaderSubtext('process-step2-h3', 'Our medical statisticians audit variable distributions, execute hypothesis testing, and generate publication-standard data tables.'),
    },
    {
      number: "03",
      title: getHeader('process-step3-h3', 'Write, Edit & Format'),
      desc: getHeaderSubtext('process-step3-h3', 'Our medical writing specialists draft the complete manuscript in strict accordance with reporting standards (STROBE, PRISMA, CARE, CONSORT).'),
    },
    {
      number: "04",
      title: getHeader('process-step4-h3', 'Prepare for Submission & Revisions'),
      desc: getHeaderSubtext('process-step4-h3', 'We assemble the complete submission package (Cover Letter, Declarations, Checklist) and provide support addressing peer-reviewer comments.'),
    },
  ];

  return (
    <section className="editorial-section section-bg-paper section-border-top" aria-labelledby="process-heading">
      <div className="site-container">
        <SectionHeading
          eyebrow={getEyebrow('process-timeline-eyebrow', 'Our Working Method')}
          title={getHeader('process-timeline-h2', 'A Structured 4-Step Editorial Workflow')}
          subtitle={getHeaderSubtext('process-timeline-h2', 'Clear milestones from initial protocol evaluation to journal submission readiness.')}
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
