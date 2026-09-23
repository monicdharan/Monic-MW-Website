import React, { createContext, useContext, useState, useEffect } from 'react';
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
  faqs: typeof initialFaqs;
  addFaq: (faq: { question: string; answer: string; category?: any }) => void;
  deleteFaq: (id: string) => void;

  // Reset
  resetToDefaults: () => void;
}

const STORAGE_KEY = 'medzen_admin_data_v2';

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

const AdminDataContext = createContext<AdminDataContextType | undefined>(undefined);

export const AdminDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Combine all initial testimonials
  const combinedInitialTestimonials: ReviewScreenshot[] = [
    ...googleReviews,
    ...whatsappReviews,
  ];

  const [publications, setPublications] = useState<PublicationItem[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_pubs`);
      return saved ? JSON.parse(saved) : initialPublications;
    } catch {
      return initialPublications;
    }
  });

  const [testimonials, setTestimonials] = useState<ReviewScreenshot[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_testimonials`);
      return saved ? JSON.parse(saved) : combinedInitialTestimonials;
    } catch {
      return combinedInitialTestimonials;
    }
  });

  const [doctorReviews, setDoctorReviews] = useState<DoctorTestimonial[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_doctor_reviews`);
      return saved ? JSON.parse(saved) : initialDoctorReviews;
    } catch {
      return initialDoctorReviews;
    }
  });

  const [articles, setArticles] = useState<JournalArticleItem[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_articles`);
      return saved ? JSON.parse(saved) : initialArticles;
    } catch {
      return initialArticles;
    }
  });

  const [blogCategories, setBlogCategories] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_categories`);
      return saved ? JSON.parse(saved) : initialCategories;
    } catch {
      return initialCategories;
    }
  });

  const [authors, setAuthors] = useState<BlogAuthor[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_authors`);
      return saved ? JSON.parse(saved) : initialAuthorsList;
    } catch {
      return initialAuthorsList;
    }
  });

  const [visualContent, setVisualContent] = useState<VisualContentState>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_visual`);
      return saved ? JSON.parse(saved) : initialVisualContent;
    } catch {
      return initialVisualContent;
    }
  });

  const [faqs, setFaqs] = useState<FaqItem[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_faqs`);
      return saved ? JSON.parse(saved) : initialFaqs;
    } catch {
      return initialFaqs;
    }
  });

  // Save to localStorage upon change
  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_pubs`, JSON.stringify(publications));
    } catch (e) {
      console.warn('LocalStorage limit reached for publications', e);
    }
  }, [publications]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_testimonials`, JSON.stringify(testimonials));
    } catch (e) {
      console.warn('LocalStorage limit reached for testimonials', e);
    }
  }, [testimonials]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_doctor_reviews`, JSON.stringify(doctorReviews));
    } catch (e) {
      console.warn('LocalStorage limit reached for doctor reviews', e);
    }
  }, [doctorReviews]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_articles`, JSON.stringify(articles));
    } catch (e) {
      console.warn('LocalStorage limit reached for articles', e);
    }
  }, [articles]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_categories`, JSON.stringify(blogCategories));
    } catch (e) {}
  }, [blogCategories]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_authors`, JSON.stringify(authors));
    } catch (e) {}
  }, [authors]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_visual`, JSON.stringify(visualContent));
    } catch (e) {}
  }, [visualContent]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_faqs`, JSON.stringify(faqs));
    } catch (e) {}
  }, [faqs]);

  // Methods
  const addPublication = (item: Omit<PublicationItem, 'id'>) => {
    const newItem: PublicationItem = {
      ...item,
      id: `pub-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
    };
    setPublications((prev) => [newItem, ...prev]);
  };

  const deletePublication = (id: string) => {
    setPublications((prev) => prev.filter((p) => p.id !== id));
  };

  const updatePublication = (id: string, updated: Partial<PublicationItem>) => {
    setPublications((prev) => prev.map((p) => (p.id === id ? { ...p, ...updated } : p)));
  };

  const addTestimonial = (item: Omit<ReviewScreenshot, 'id'>) => {
    const newItem: ReviewScreenshot = {
      ...item,
      id: `testi-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
    };
    setTestimonials((prev) => [newItem, ...prev]);
  };

  const deleteTestimonial = (id: string) => {
    setTestimonials((prev) => prev.filter((t) => t.id !== id));
  };

  const addDoctorReview = (item: Omit<DoctorTestimonial, 'id'>) => {
    const newItem: DoctorTestimonial = {
      ...item,
      id: `doc-rev-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
    };
    setDoctorReviews((prev) => [newItem, ...prev]);
  };

  const deleteDoctorReview = (id: string) => {
    setDoctorReviews((prev) => prev.filter((r) => r.id !== id));
  };

  const addArticle = (item: Omit<JournalArticleItem, 'id'>) => {
    const newItem: JournalArticleItem = {
      ...item,
      id: `art-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
    };
    setArticles((prev) => [newItem, ...prev]);
  };

  const updateArticle = (id: string, updated: Partial<JournalArticleItem>) => {
    setArticles((prev) => prev.map((a) => (a.id === id ? { ...a, ...updated } : a)));
  };

  const deleteArticle = (id: string) => {
    setArticles((prev) => prev.filter((a) => a.id !== id));
  };

  const addCategory = (cat: string) => {
    if (cat.trim() && !blogCategories.includes(cat.trim())) {
      setBlogCategories((prev) => [...prev, cat.trim()]);
    }
  };

  const deleteCategory = (cat: string) => {
    setBlogCategories((prev) => prev.filter((c) => c !== cat));
  };

  const addAuthor = (author: BlogAuthor) => {
    setAuthors((prev) => [...prev, author]);
  };

  const deleteAuthor = (id: string) => {
    setAuthors((prev) => prev.filter((a) => a.id !== id));
  };

  const updateVisualContent = (updated: Partial<VisualContentState>) => {
    setVisualContent((prev) => ({ ...prev, ...updated }));
  };

  const addFaq = (faq: { question: string; answer: string; category?: any }) => {
    const newFaq = {
      id: `faq-${Date.now()}`,
      ...faq,
    };
    setFaqs((prev) => [...prev, newFaq]);
  };

  const deleteFaq = (id: string) => {
    setFaqs((prev) => prev.filter((f) => f.id !== id));
  };

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
