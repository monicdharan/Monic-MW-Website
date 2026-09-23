import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
  wide?: boolean;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  className = '',
  narrow = false,
  wide = false,
}) => {
  const widthClass = narrow ? 'site-container-narrow' : wide ? 'site-container-wide' : '';
  return (
    <div className={`site-container ${widthClass} ${className}`}>
      {children}
    </div>
  );
};
