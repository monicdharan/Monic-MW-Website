import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Services } from '../pages/Services';
import { ServiceDetail } from '../pages/ServiceDetail';
import { Publications } from '../pages/Publications';
import { Testimonials } from '../pages/Testimonials';
import { Journal } from '../pages/Journal';
import { JournalArticle } from '../pages/JournalArticle';
import { Contact } from '../pages/Contact';
import { LegalPage } from '../pages/LegalPage';
import { Sitemap } from '../pages/Sitemap';
import { NotFound } from '../pages/NotFound';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:slug" element={<ServiceDetail />} />
      <Route path="/publications" element={<Publications />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/journal" element={<Journal />} />
      <Route path="/journal/:slug" element={<JournalArticle />} />
      <Route path="/contact" element={<Contact />} />
      
      {/* Legal & Policy Routes */}
      <Route path="/privacy-policy" element={<LegalPage pageSlug="privacy-policy" />} />
      <Route path="/refund-policy" element={<LegalPage pageSlug="refund-policy" />} />
      <Route path="/terms-conditions" element={<LegalPage pageSlug="terms-conditions" />} />
      <Route path="/shipping-policy" element={<LegalPage pageSlug="shipping-policy" />} />
      <Route path="/sitemap" element={<Sitemap />} />

      {/* Fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
