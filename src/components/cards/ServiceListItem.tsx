import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceItem } from '../../types';

export const ServiceListItem: React.FC<{ service: ServiceItem }> = ({ service }) => {
  return (
    <Link to={`/services/${service.slug}`} className="service-list-row" title={`View ${service.title} details`}>
      <div className="service-list-num">{service.number}</div>
      <div className="service-list-title">{service.title}</div>
      <p className="service-list-desc">{service.shortDesc}</p>
      <div className="service-list-action">
        <span className="editorial-link">
          <span>View service</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </span>
      </div>
    </Link>
  );
};
