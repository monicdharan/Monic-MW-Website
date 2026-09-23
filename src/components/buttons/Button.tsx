import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'mint' | 'secondary' | 'white';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  icon?: string;
  style?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  icon,
  style,
}) => {
  const sizeClass = size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : '';
  const variantClass = `btn-${variant}`;
  const combinedClass = `btn ${variantClass} ${sizeClass} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClass} onClick={onClick} style={style}>
        {icon && <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{icon}</span>}
        <span>{children}</span>
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClass} target="_blank" rel="noopener noreferrer" onClick={onClick} style={style}>
        {icon && <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button type={type} className={combinedClass} onClick={onClick} disabled={disabled} style={style}>
      {icon && <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
