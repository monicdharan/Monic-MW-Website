import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { PublicationItem, ReviewScreenshot, DoctorTestimonial, JournalArticleItem, FaqItem } from '../types';
import { publicationsData as initialPublications } from '../data/publications';
import { googleReviews, whatsappReviews, doctorTestimonials as initialDoctorReviews } from '../data/testimonials';
import { journalArticlesData as initialArticles } from '../data/articles';
import { faqsData as initialFaqs } from '../data/faqs';

export interface BlogCategory {
  id: string;
  name: string;
}

export interface BlogAuthor {
  id: string;
  name: string;
  role: string;
  avatar?: string;
}

export interface VisualContentState {
  heroBadge: string;
  heroTitle: string;
  heroLead: string;
  phone: string;
  email: string;
}

export interface AdminDataContextType {
  // Publications
  publications: PublicationItem[];
  addPublication: (item: Omit<PublicationItem, 'id'>) => void;
  deletePublication: (id: string) => void;
  updatePublication: (id: string, updated: Partial<PublicationItem>) => void;

  // Testimonial Screenshots
  testimonials: ReviewScreenshot[];
  addTestimonial: (item: Omit<ReviewScreenshot, 'id'>) => void;
  deleteTestimonial: (id: string) => void;

  // Doctor Text Reviews
  doctorReviews: DoctorTestimonial[];
  addDoctorReview: (item: Omit<DoctorTestimonial, 'id'>) => void;
  deleteDoctorReview: (id: string) => void;

  // Blog Posts
  articles: JournalArticleItem[];
  addArticle: (item: Omit<JournalArticleItem, 'id'>) => void;
  updateArticle: (id: string, updated: Partial<JournalArticleItem>) => void;
  deleteArticle: (id: string) => void;

  // Categories & Authors
  blogCategories: string[];
  addCategory: (cat: string) => void;
  deleteCategory: (cat: string) => void;
  authors: BlogAuthor[];
  addAuthor: (author: BlogAuthor) => void;
  deleteAuthor: (id: string) => void;

  // Visual content
  visualContent: VisualContentState;
  updateVisualContent: (updated: Partial<VisualContentState>) => void;

  // FAQs
  faqs: FaqItem[];
  addFaq: (faq: { question: string; answer: string; category?: any }) => void;
  deleteFaq: (id: string) => void;

  // Reset
  resetToDefaults: () => void;
}

const STORAGE_KEY = 'medzen_admin_data_v3';

const initialCategories = [
  'Research Batch Publications',
  'Original Research',
  'Case Reports',
  'Systematic Reviews',
  'Thesis Conversions',
  'Publishing Strategy',
  'Manuscript Writing',
  'Evidence Synthesis',
  'Biostatistics',
  'Clinical Reporting',
];

const initialAuthorsList: BlogAuthor[] = [
  { id: 'auth-1', name: 'Dr. Ananya Sharma', role: 'Lead Medical Editor & Writer', avatar: '/assets/images/team_doctor_1.jpg' },
  { id: 'auth-2', name: 'Dr. Rajesh Kumar', role: 'Senior Biostatistician', avatar: '/assets/images/team_doctor_2.jpg' },
  { id: 'auth-3', name: 'MedZen Research Editorial Team', role: 'Scientific Editorial Board' },
];

const initialVisualContent: VisualContentState = {
  heroBadge: 'Medical Research & Publication Support',
  heroTitle: 'Turn Complex Medical Research Into Clear, Publication-Ready Work',
  heroLead: 'Medical writing, biostatistics, and publication support for clinicians, postgraduate doctors, researchers, and medical faculty — delivered with academic integrity and confidentiality.',
  phone: '+91 88079 09503',
  email: 'support@medzenwrites.com',
};

const combinedInitialTestimonials: ReviewScreenshot[] = [
  ...googleReviews,
  ...whatsappReviews,
];

const AdminDataContext = createContext<AdminDataContextType | undefined>(undefined);

// Helper to safely read from localStorage
const getStored = <T,>(key: string, fallback: T): T => {
  try {
    const item = localStorage.getItem(`${STORAGE_KEY}_${key}`);
    return item ? JSON.parse(item) : fallback;
  } catch {
    return fallback;
  }
};

// Helper to safely write to localStorage and notify other tabs
const setStored = <T,>(key: string, value: T) => {
  try {
    localStorage.setItem(`${STORAGE_KEY}_${key}`, JSON.stringify(value));
    // Trigger custom event for same-tab updates
    window.dispatchEvent(new CustomEvent('medzen_local_sync', { detail: { key, value } }));
  } catch (e) {
    console.warn(`LocalStorage write error for ${key}:`, e);
  }
};

export const AdminDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [publications, setPublications] = useState<PublicationItem[]>(() => getStored('pubs', initialPublications));
  const [testimonials, setTestimonials] = useState<ReviewScreenshot[]>(() => getStored('testimonials', combinedInitialTestimonials));
  const [doctorReviews, setDoctorReviews] = useState<DoctorTestimonial[]>(() => getStored('doctor_reviews', initialDoctorReviews));
  const [articles, setArticles] = useState<JournalArticleItem[]>(() => getStored('articles', initialArticles));
  const [blogCategories, setBlogCategories] = useState<string[]>(() => getStored('categories', initialCategories));
  const [authors, setAuthors] = useState<BlogAuthor[]>(() => getStored('authors', initialAuthorsList));
  const [visualContent, setVisualContent] = useState<VisualContentState>(() => getStored('visual', initialVisualContent));
  const [faqs, setFaqs] = useState<FaqItem[]>(() => getStored('faqs', initialFaqs));

  // Reload all states from localStorage
  const syncFromStorage = useCallback(() => {
    setPublications(getStored('pubs', initialPublications));
    setTestimonials(getStored('testimonials', combinedInitialTestimonials));
    setDoctorReviews(getStored('doctor_reviews', initialDoctorReviews));
    setArticles(getStored('articles', initialArticles));
    setBlogCategories(getStored('categories', initialCategories));
    setAuthors(getStored('authors', initialAuthorsList));
    setVisualContent(getStored('visual', initialVisualContent));
    setFaqs(getStored('faqs', initialFaqs));
  }, []);

  // Listen for storage events across tabs & local window sync
  useEffect(() => {
    const handleStorageEvent = (e: StorageEvent) => {
      if (e.key && e.key.startsWith(STORAGE_KEY)) {
        syncFromStorage();
      }
    };

    const handleLocalSync = () => {
      syncFromStorage();
    };

    window.addEventListener('storage', handleStorageEvent);
    window.addEventListener('medzen_local_sync', handleLocalSync);

    // Setup BroadcastChannel for modern zero-latency tab sync
    let bc: BroadcastChannel | null = null;
    try {
      if (typeof BroadcastChannel !== 'undefined') {
        bc = new BroadcastChannel('medzen_admin_channel');
        bc.onmessage = () => {
          syncFromStorage();
        };
      }
    } catch {}

    return () => {
      window.removeEventListener('storage', handleStorageEvent);
      window.removeEventListener('medzen_local_sync', handleLocalSync);
      if (bc) bc.close();
    };
  }, [syncFromStorage]);

  const notifyAllTabs = () => {
    try {
      if (typeof BroadcastChannel !== 'undefined') {
        const bc = new BroadcastChannel('medzen_admin_channel');
        bc.postMessage({ type: 'sync', timestamp: Date.now() });
        bc.close();
      }
    } catch {}
  };

  // Publications
  const addPublication = (item: Omit<PublicationItem, 'id'>) => {
    const newItem: PublicationItem = {
      ...item,
      id: `pub-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
    };
    setPublications((prev) => {
      const next = [newItem, ...prev];
      setStored('pubs', next);
      notifyAllTabs();
      return next;
    });
  };

  const deletePublication = (id: string) => {
    setPublications((prev) => {
      const next = prev.filter((p) => p.id !== id);
      setStored('pubs', next);
      notifyAllTabs();
      return next;
    });
  };

  const updatePublication = (id: string, updated: Partial<PublicationItem>) => {
    setPublications((prev) => {
      const next = prev.map((p) => (p.id === id ? { ...p, ...updated } : p));
      setStored('pubs', next);
      notifyAllTabs();
      return next;
    });
  };

  // Testimonials
  const addTestimonial = (item: Omit<ReviewScreenshot, 'id'>) => {
    const newItem: ReviewScreenshot = {
      ...item,
      id: `testi-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
    };
    setTestimonials((prev) => {
      const next = [newItem, ...prev];
      setStored('testimonials', next);
      notifyAllTabs();
      return next;
    });
  };

  const deleteTestimonial = (id: string) => {
    setTestimonials((prev) => {
      const next = prev.filter((t) => t.id !== id);
      setStored('testimonials', next);
      notifyAllTabs();
      return next;
    });
  };

  // Doctor Reviews
  const addDoctorReview = (item: Omit<DoctorTestimonial, 'id'>) => {
    const newItem: DoctorTestimonial = {
      ...item,
      id: `doc-rev-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
    };
    setDoctorReviews((prev) => {
      const next = [newItem, ...prev];
      setStored('doctor_reviews', next);
      notifyAllTabs();
      return next;
    });
  };

  const deleteDoctorReview = (id: string) => {
    setDoctorReviews((prev) => {
      const next = prev.filter((r) => r.id !== id);
      setStored('doctor_reviews', next);
      notifyAllTabs();
      return next;
    });
  };

  // Articles
  const addArticle = (item: Omit<JournalArticleItem, 'id'>) => {
    const newItem: JournalArticleItem = {
      ...item,
      id: `art-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
    };
    setArticles((prev) => {
      const next = [newItem, ...prev];
      setStored('articles', next);
      notifyAllTabs();
      return next;
    });
  };

  const updateArticle = (id: string, updated: Partial<JournalArticleItem>) => {
    setArticles((prev) => {
      const next = prev.map((a) => (a.id === id ? { ...a, ...updated } : a));
      setStored('articles', next);
      notifyAllTabs();
      return next;
    });
  };

  const deleteArticle = (id: string) => {
    setArticles((prev) => {
      const next = prev.filter((a) => a.id !== id);
      setStored('articles', next);
      notifyAllTabs();
      return next;
    });
  };

  // Categories & Authors
  const addCategory = (cat: string) => {
    if (cat.trim() && !blogCategories.includes(cat.trim())) {
      setBlogCategories((prev) => {
        const next = [...prev, cat.trim()];
        setStored('categories', next);
        notifyAllTabs();
        return next;
      });
    }
  };

  const deleteCategory = (cat: string) => {
    setBlogCategories((prev) => {
      const next = prev.filter((c) => c !== cat);
      setStored('categories', next);
      notifyAllTabs();
      return next;
    });
  };

  const addAuthor = (author: BlogAuthor) => {
    setAuthors((prev) => {
      const next = [...prev, author];
      setStored('authors', next);
      notifyAllTabs();
      return next;
    });
  };

  const deleteAuthor = (id: string) => {
    setAuthors((prev) => {
      const next = prev.filter((a) => a.id !== id);
      setStored('authors', next);
      notifyAllTabs();
      return next;
    });
  };

  // Visual content
  const updateVisualContent = (updated: Partial<VisualContentState>) => {
    setVisualContent((prev) => {
      const next = { ...prev, ...updated };
      setStored('visual', next);
      notifyAllTabs();
      return next;
    });
  };

  // FAQs
  const addFaq = (faq: { question: string; answer: string; category?: any }) => {
    const newFaq: FaqItem = {
      id: `faq-${Date.now()}`,
      ...faq,
    };
    setFaqs((prev) => {
      const next = [...prev, newFaq];
      setStored('faqs', next);
      notifyAllTabs();
      return next;
    });
  };

  const deleteFaq = (id: string) => {
    setFaqs((prev) => {
      const next = prev.filter((f) => f.id !== id);
      setStored('faqs', next);
      notifyAllTabs();
      return next;
    });
  };

  // Reset to Defaults
  const resetToDefaults = () => {
    setPublications(initialPublications);
    setTestimonials(combinedInitialTestimonials);
    setDoctorReviews(initialDoctorReviews);
    setArticles(initialArticles);
    setBlogCategories(initialCategories);
    setAuthors(initialAuthorsList);
    setVisualContent(initialVisualContent);
    setFaqs(initialFaqs);

    localStorage.removeItem(`${STORAGE_KEY}_pubs`);
    localStorage.removeItem(`${STORAGE_KEY}_testimonials`);
    localStorage.removeItem(`${STORAGE_KEY}_doctor_reviews`);
    localStorage.removeItem(`${STORAGE_KEY}_articles`);
    localStorage.removeItem(`${STORAGE_KEY}_categories`);
    localStorage.removeItem(`${STORAGE_KEY}_authors`);
    localStorage.removeItem(`${STORAGE_KEY}_visual`);
    localStorage.removeItem(`${STORAGE_KEY}_faqs`);
    notifyAllTabs();
  };

  return (
    <AdminDataContext.Provider
      value={{
        publications,
        addPublication,
        deletePublication,
        updatePublication,
        testimonials,
        addTestimonial,
        deleteTestimonial,
        doctorReviews,
        addDoctorReview,
        deleteDoctorReview,
        articles,
        addArticle,
        updateArticle,
        deleteArticle,
        blogCategories,
        addCategory,
        deleteCategory,
        authors,
        addAuthor,
        deleteAuthor,
        visualContent,
        updateVisualContent,
        faqs,
        addFaq,
        deleteFaq,
        resetToDefaults,
      }}
    >
      {children}
    </AdminDataContext.Provider>
  );
};

export const useAdminData = (): AdminDataContextType => {
  const context = useContext(AdminDataContext);
  if (!context) {
    throw new Error('useAdminData must be used within an AdminDataProvider');
  }
  return context;
};
