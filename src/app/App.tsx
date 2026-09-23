import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from '../context/ModalContext';
import { SiteHeader } from '../components/layout/SiteHeader';
import { SiteFooter } from '../components/layout/SiteFooter';
import { ConsultationModal } from '../components/modals/ConsultationModal';
import { LightboxModal } from '../components/modals/LightboxModal';
import { ScrollToTop } from '../components/common/ScrollToTop';
import { FloatingWhatsApp } from '../components/common/FloatingWhatsApp';
import { AppRoutes } from './routes';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ModalProvider>
        <ScrollToTop />
        <div className="site-layout" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <SiteHeader />
          <main id="main-content" style={{ flexGrow: 1 }}>
            <AppRoutes />
          </main>
          <SiteFooter />
        </div>

        {/* Global Accessible Modals & Floating Tools */}
        <ConsultationModal />
        <LightboxModal />
        <FloatingWhatsApp />
      </ModalProvider>
    </BrowserRouter>
  );
};
