import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceItem } from '../../types';

export const ServiceListItem: React.FC<{ service: ServiceItem }> = ({ service }) => {
  return (
    <Link to={`/services/${service.slug}`} className="service-card-square" title={`View ${service.title} details`}>
      <div className="service-square-top">
        <span className="service-square-num">{service.number}</span>
        {service.iconName && (
          <div className="service-square-icon-box">
            <span className="material-symbols-outlined">{service.iconName}</span>
          </div>
        )}
      </div>

      <div className="service-square-content">
        <h3 className="service-square-title">{service.title}</h3>
        <p className="service-square-desc">{service.shortDesc}</p>
      </div>

      <div className="service-square-action">
        <span className="editorial-link">
          <span>View service details</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </span>
      </div>
    </Link>
  );
};
