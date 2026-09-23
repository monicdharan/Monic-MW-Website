import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  centered = false,
  className = '',
}) => {
  return (
    <div className={`section-header ${centered ? 'text-center' : ''} ${className}`}>
      {eyebrow && <span className="section-header-eyebrow">{eyebrow}</span>}
      <h2 className="section-header-title">{title}</h2>
      {subtitle && <p className="section-header-subtitle">{subtitle}</p>}
    </div>
  );
};
