import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { servicesData } from '../data/services';
import { useModal } from '../context/ModalContext';
import { Button } from '../components/buttons/Button';
import { CtaBanner } from '../components/sections/CtaBanner';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openConsultation } = useModal();

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="page-service-detail">
      {/* Service Hero */}
      <section className="editorial-hero" aria-label={`${service.title} Overview`}>
        <div className="site-container">
          <div style={{ maxWidth: '840px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <Link to="/services" style={{ color: 'var(--color-mint)', fontSize: '0.88rem', fontWeight: 600 }}>
                Services
              </Link>
              <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>/</span>
              <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.88rem' }}>
                Service {service.number}
              </span>
            </div>

            <h1 className="hero-title">{service.title}</h1>
            <p className="hero-lead">{service.heroSubtitle}</p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <Button variant="mint" size="lg" onClick={() => openConsultation(service.title)}>
                Request Consultation for this Service
              </Button>
              {service.turnaroundTime && (
                <span style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.72)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--color-mint)' }}>schedule</span>
                  <span>Typical Timeline: {service.turnaroundTime}</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body with Sidebar Layout */}
      <section className="editorial-section section-bg-white" aria-labelledby="service-spec-heading">
        <div className="site-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'flex-start' }}>
            {/* Main Content Column */}
            <div>
              {/* Section 1: Who it is for */}
              <div style={{ marginBottom: '48px' }}>
                <span className="section-header-eyebrow">Audience &amp; Scope</span>
                <h2 id="service-spec-heading" style={{ fontSize: '1.75rem', marginBottom: '16px' }}>
                  Who This Service Is For
                </h2>
                <ul className="editorial-point-list">
                  {service.whoItsFor.map((item, i) => (
                    <li key={i} className="editorial-point-item">
                      <span className="material-symbols-outlined point-icon-check">person</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 2: What is included */}
              <div style={{ marginBottom: '48px', padding: '32px', background: 'var(--color-paper)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-line)' }}>
                <span className="section-header-eyebrow">Deliverables &amp; Inclusions</span>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '16px' }}>
                  What Is Included
                </h2>
                <ul className="editorial-point-list">
                  {service.includes.map((item, i) => (
                    <li key={i} className="editorial-point-item">
                      <span className="material-symbols-outlined point-icon-check">check_circle</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 3: What the client provides */}
              <div style={{ marginBottom: '48px' }}>
                <span className="section-header-eyebrow">Prerequisites</span>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '16px' }}>
                  What You Provide
                </h2>
                <p style={{ fontSize: '0.94rem', color: 'var(--color-ink-soft)', marginBottom: '16px' }}>
                  To ensure smooth execution and ethical compliance, we request the following source materials at project kick-off:
                </p>
                <ul className="editorial-point-list">
                  {service.clientProvides.map((item, i) => (
                    <li key={i} className="editorial-point-item">
                      <span className="material-symbols-outlined point-icon-check">folder</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 4: Process */}
              <div style={{ marginBottom: '48px' }}>
                <span className="section-header-eyebrow">Methodology</span>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '20px' }}>
                  Working Process
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {service.process.map((p) => (
                    <div
                      key={p.step}
                      style={{ display: 'flex', gap: '20px', padding: '20px', background: 'var(--color-white)', border: '1px solid var(--color-line)', borderRadius: 'var(--radius-sm)' }}
                    >
                      <span style={{ fontFamily: 'var(--font-family-heading)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-teal)' }}>
                        0{p.step}
                      </span>
                      <div>
                        <h4 style={{ fontSize: '1.05rem', color: 'var(--color-ink)', marginBottom: '4px' }}>
                          {p.title}
                        </h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-soft)', margin: 0 }}>
                          {p.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 5: Deliverables Summary */}
              <div style={{ padding: '28px', background: 'var(--color-mint-soft)', borderRadius: 'var(--radius-md)', border: '1px solid #cce8e2', marginBottom: '32px' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-teal-dark)', marginBottom: '12px' }}>
                  Final Deliverables Package
                </h3>
                <ul className="editorial-point-list">
                  {service.deliverables.map((d, i) => (
                    <li key={i} className="editorial-point-item">
                      <span className="material-symbols-outlined point-icon-check">task_alt</span>
                      <span style={{ fontWeight: 500 }}>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar Column: Services Directory & Consultation Widget */}
            <aside style={{ position: 'sticky', top: '96px' }}>
              <div style={{ background: 'var(--color-paper)', border: '1px solid var(--color-line)', borderRadius: 'var(--radius-md)', padding: '24px', marginBottom: '24px' }}>
                <h4 style={{ fontSize: '1rem', color: 'var(--color-ink)', marginBottom: '14px', borderBottom: '1px solid var(--color-line)', paddingBottom: '8px' }}>
                  All Services
                </h4>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {servicesData.map((s) => (
                    <Link
                      key={s.id}
                      to={`/services/${s.slug}`}
                      style={{
                        fontSize: '0.88rem',
                        padding: '6px 10px',
                        borderRadius: 'var(--radius-xs)',
                        textDecoration: 'none',
                        color: s.slug === slug ? 'var(--color-teal)' : 'var(--color-ink-soft)',
                        background: s.slug === slug ? 'var(--color-white)' : 'transparent',
                        fontWeight: s.slug === slug ? 600 : 400,
                        border: s.slug === slug ? '1px solid var(--color-line)' : '1px solid transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span>{s.title}</span>
                      {s.slug === slug && <span style={{ fontSize: '0.75rem', color: 'var(--color-mint)' }}>●</span>}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Consultation Card Widget */}
              <div style={{ background: 'var(--color-teal-dark)', color: 'var(--color-white)', borderRadius: 'var(--radius-md)', padding: '24px' }}>
                <h4 style={{ color: 'var(--color-white)', fontSize: '1.1rem', marginBottom: '8px' }}>
                  Need Guidance?
                </h4>
                <p style={{ fontSize: '0.86rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.5', marginBottom: '18px' }}>
                  Our academic coordinators can review your study protocol and provide a milestone roadmap.
                </p>
                <Button variant="mint" size="sm" onClick={() => openConsultation(service.title)} style={{ width: '100%' }}>
                  Book Consultation
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaBanner
        title={`Ready to start your ${service.title.toLowerCase()} project?`}
        subtitle="Book a confidential consultation to review your study timeline and deliverables roadmap."
      />
    </div>
  );
};
