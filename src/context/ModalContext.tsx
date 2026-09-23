import React, { createContext, useContext, useState, useEffect } from 'react';

interface LightboxState {
  isOpen: boolean;
  imageUrl: string;
  altText: string;
  caption?: string;
  articleUrl?: string;
}

interface ModalContextType {
  isConsultationOpen: boolean;
  openConsultation: (prefilledService?: string) => void;
  closeConsultation: () => void;
  selectedService: string;
  lightbox: LightboxState;
  openLightbox: (imageUrl: string, altText: string, caption?: string, articleUrl?: string) => void;
  closeLightbox: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [lightbox, setLightbox] = useState<LightboxState>({
    isOpen: false,
    imageUrl: '',
    altText: '',
    caption: '',
    articleUrl: '',
  });

  const openConsultation = (prefilledService?: string) => {
    if (prefilledService) {
      setSelectedService(prefilledService);
    }
    setIsConsultationOpen(true);
  };

  const closeConsultation = () => {
    setIsConsultationOpen(false);
  };

  const openLightbox = (imageUrl: string, altText: string, caption?: string, articleUrl?: string) => {
    setLightbox({
      isOpen: true,
      imageUrl,
      altText,
      caption,
      articleUrl,
    });
  };

  const closeLightbox = () => {
    setLightbox(prev => ({ ...prev, isOpen: false }));
  };

  // Lock body scroll when any modal is open & listen for ESC key
  useEffect(() => {
    const isAnyOpen = isConsultationOpen || lightbox.isOpen;
    if (isAnyOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightbox.isOpen) closeLightbox();
        if (isConsultationOpen) closeConsultation();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isConsultationOpen, lightbox.isOpen]);

  return (
    <ModalContext.Provider
      value={{
        isConsultationOpen,
        openConsultation,
        closeConsultation,
        selectedService,
        lightbox,
        openLightbox,
        closeLightbox,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
