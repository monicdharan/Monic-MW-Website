import React, { useState } from 'react';
import { FaqItem } from '../../types';

export const FaqAccordion: React.FC<{ items: FaqItem[] }> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <div className="faq-accordion" role="region" aria-label="Frequently Asked Questions">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const triggerId = `faq-trigger-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div key={item.id} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
            <button
              id={triggerId}
              type="button"
              className="faq-trigger"
              onClick={() => toggleFaq(item.id)}
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span>{item.question}</span>
              <span className="material-symbols-outlined faq-icon">expand_more</span>
            </button>

            {isOpen && (
              <div id={panelId} className="faq-content" role="region" aria-labelledby={triggerId}>
                <p style={{ margin: 0, fontSize: '0.98rem' }}>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
