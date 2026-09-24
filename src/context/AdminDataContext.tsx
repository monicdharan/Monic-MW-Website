import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { PublicationItem, ReviewScreenshot, DoctorTestimonial, JournalArticleItem, FaqItem } from '../types';
import { publicationsData as initialPublications } from '../data/publications';
import { googleReviews, whatsappReviews, doctorTestimonials as initialDoctorReviews } from '../data/testimonials';
import { journalArticlesData as initialArticles } from '../data/articles';
import { faqsData as initialFaqs } from '../data/faqs';
import { HeaderTagItem, initialHeaderTags } from '../data/headerTags';
import {
  idbGet,
  idbSet,
  localGet,
  localSet,
  saveStateToDisk,
  loadStateFromDisk,
  exportStateAsJsonFile,
} from '../utils/storage';

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

  // Header Tags & Eyebrows
  headerTags: HeaderTagItem[];
  updateHeaderTag: (id: string, updated: Partial<HeaderTagItem>) => void;
  addHeaderTag: (item: Omit<HeaderTagItem, 'id'>) => void;
  deleteHeaderTag: (id: string) => void;
  resetHeaderTags: () => void;
  getHeader: (id: string, defaultFallback?: string) => string;
  getHeaderSubtext: (id: string, defaultFallback?: string) => string;
  getEyebrow: (id: string, defaultFallback?: string) => string;

  // Persistence & Disk Sync
  isSaving: boolean;
  hasUnsavedChanges: boolean;
  lastSavedTime: string | null;
  saveAllToDisk: () => Promise<{ success: boolean; message: string }>;
  exportBackup: () => void;
  importBackup: (file: File) => Promise<boolean>;
  resetToDefaults: () => void;
}

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

export const AdminDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [publications, setPublications] = useState<PublicationItem[]>(() => localGet('pubs', initialPublications));
  const [testimonials, setTestimonials] = useState<ReviewScreenshot[]>(() => localGet('testimonials', combinedInitialTestimonials));
  const [doctorReviews, setDoctorReviews] = useState<DoctorTestimonial[]>(() => localGet('doctor_reviews', initialDoctorReviews));
  const [articles, setArticles] = useState<JournalArticleItem[]>(() => localGet('articles', initialArticles));
  const [blogCategories, setBlogCategories] = useState<string[]>(() => localGet('categories', initialCategories));
  const [authors, setAuthors] = useState<BlogAuthor[]>(() => localGet('authors', initialAuthorsList));
  const [visualContent, setVisualContent] = useState<VisualContentState>(() => localGet('visual', initialVisualContent));
  const [faqs, setFaqs] = useState<FaqItem[]>(() => localGet('faqs', initialFaqs));
  const [headerTags, setHeaderTags] = useState<HeaderTagItem[]>(() => localGet('headers', initialHeaderTags));

  const [isSaving, setIsSaving] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [lastSavedTime, setLastSavedTime] = useState<string | null>(() => localGet('last_saved', null));
  const isInitialMount = useRef(true);

  // --------------------------------------------------------------------------
  // ASYNC INITIALIZATION FROM DISK & INDEXEDDB
  // --------------------------------------------------------------------------
  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      try {
        // 1. First try loading directly from disk API
        const diskState = await loadStateFromDisk();
        if (diskState && typeof diskState === 'object') {
          if (!isMounted) return;
          if (diskState.publications) setPublications(diskState.publications);
          if (diskState.testimonials) setTestimonials(diskState.testimonials);
          if (diskState.doctorReviews) setDoctorReviews(diskState.doctorReviews);
          if (diskState.articles) setArticles(diskState.articles);
          if (diskState.blogCategories) setBlogCategories(diskState.blogCategories);
          if (diskState.authors) setAuthors(diskState.authors);
          if (diskState.visualContent) setVisualContent(diskState.visualContent);
          if (diskState.faqs) setFaqs(diskState.faqs);
          if (diskState.headerTags) setHeaderTags(diskState.headerTags);
          if (diskState.lastSavedTime) setLastSavedTime(diskState.lastSavedTime);
          return;
        }

        // 2. Otherwise load from IndexedDB
        const idbState = await idbGet<any>('medzen_full_state');
        if (idbState && isMounted) {
          if (idbState.publications) setPublications(idbState.publications);
          if (idbState.testimonials) setTestimonials(idbState.testimonials);
          if (idbState.doctorReviews) setDoctorReviews(idbState.doctorReviews);
          if (idbState.articles) setArticles(idbState.articles);
          if (idbState.blogCategories) setBlogCategories(idbState.blogCategories);
          if (idbState.authors) setAuthors(idbState.authors);
          if (idbState.visualContent) setVisualContent(idbState.visualContent);
          if (idbState.faqs) setFaqs(idbState.faqs);
          if (idbState.headerTags) setHeaderTags(idbState.headerTags);
        }
      } catch (err) {
        console.warn('[AdminDataContext] Load error:', err);
      }
    }

    loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  // --------------------------------------------------------------------------
  // SYNC & TAB BROADCAST LISTENER
  // --------------------------------------------------------------------------
  useEffect(() => {
    let bc: BroadcastChannel | null = null;
    try {
      if (typeof BroadcastChannel !== 'undefined') {
        bc = new BroadcastChannel('medzen_admin_channel_v4');
        bc.onmessage = (event) => {
          if (event.data?.type === 'full_sync' && event.data?.payload) {
            const p = event.data.payload;
            if (p.publications) setPublications(p.publications);
            if (p.testimonials) setTestimonials(p.testimonials);
            if (p.doctorReviews) setDoctorReviews(p.doctorReviews);
            if (p.articles) setArticles(p.articles);
            if (p.blogCategories) setBlogCategories(p.blogCategories);
            if (p.authors) setAuthors(p.authors);
            if (p.visualContent) setVisualContent(p.visualContent);
            if (p.faqs) setFaqs(p.faqs);
            if (p.headerTags) setHeaderTags(p.headerTags);
            if (p.lastSavedTime) setLastSavedTime(p.lastSavedTime);
            setHasUnsavedChanges(false);
          }
        };
      }
    } catch {}

    return () => {
      if (bc) bc.close();
    };
  }, []);

  const notifyAllTabs = (fullPayload: any) => {
    try {
      if (typeof BroadcastChannel !== 'undefined') {
        const bc = new BroadcastChannel('medzen_admin_channel_v4');
        bc.postMessage({ type: 'full_sync', payload: fullPayload });
        bc.close();
      }
    } catch {}
  };

  // --------------------------------------------------------------------------
  // SAVE ALL TO DISK (DISK + INDEXEDDB + LOCALSTORAGE)
  // --------------------------------------------------------------------------
  const saveAllToDisk = useCallback(async (): Promise<{ success: boolean; message: string }> => {
    setIsSaving(true);
    const nowStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const fullState = {
      publications,
      testimonials,
      doctorReviews,
      articles,
      blogCategories,
      authors,
      visualContent,
      faqs,
      headerTags,
      lastSavedTime: nowStr,
      savedAt: new Date().toISOString(),
    };

    try {
      // 1. LocalStorage
      localSet('pubs', publications);
      localSet('testimonials', testimonials);
      localSet('doctor_reviews', doctorReviews);
      localSet('articles', articles);
      localSet('categories', blogCategories);
      localSet('authors', authors);
      localSet('visual', visualContent);
      localSet('faqs', faqs);
      localSet('headers', headerTags);
      localSet('last_saved', nowStr);

      // 2. IndexedDB
      await idbSet('medzen_full_state', fullState);

      // 3. Disk File API
      const diskRes = await saveStateToDisk(fullState);

      setLastSavedTime(nowStr);
      setHasUnsavedChanges(false);
      setIsSaving(false);

      // 4. Notify all other open tabs
      notifyAllTabs(fullState);

      return {
        success: true,
        message: diskRes.success
          ? `All changes permanently saved to disk at ${nowStr}!`
          : `Saved to browser storage & cache at ${nowStr}!`,
      };
    } catch (err: any) {
      setIsSaving(false);
      return {
        success: false,
        message: `Save error: ${err?.message || 'Failed to save'}`,
      };
    }
  }, [publications, testimonials, doctorReviews, articles, blogCategories, authors, visualContent, faqs, headerTags]);

  // Mark unsaved changes on state modifications (skipping initial mount)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    setHasUnsavedChanges(true);

    // Save fast cache to local storage
    localSet('pubs', publications);
    localSet('testimonials', testimonials);
    localSet('doctor_reviews', doctorReviews);
    localSet('articles', articles);
    localSet('categories', blogCategories);
    localSet('authors', authors);
    localSet('visual', visualContent);
    localSet('faqs', faqs);
    localSet('headers', headerTags);

    // Auto-sync to IndexedDB
    idbSet('medzen_full_state', {
      publications,
      testimonials,
      doctorReviews,
      articles,
      blogCategories,
      authors,
      visualContent,
      faqs,
      headerTags,
      lastSavedTime,
    });
  }, [publications, testimonials, doctorReviews, articles, blogCategories, authors, visualContent, faqs, headerTags]);

  // --------------------------------------------------------------------------
  // HEADER TAGS & EYEBROWS HELPERS
  // --------------------------------------------------------------------------
  const getHeader = useCallback(
    (id: string, defaultFallback?: string): string => {
      const match = headerTags.find((h) => h.id === id);
      return match?.text || defaultFallback || '';
    },
    [headerTags]
  );

  const getHeaderSubtext = useCallback(
    (id: string, defaultFallback?: string): string => {
      const match = headerTags.find((h) => h.id === id);
      return match?.subtext || defaultFallback || '';
    },
    [headerTags]
  );

  const getEyebrow = useCallback(
    (id: string, defaultFallback?: string): string => {
      const match = headerTags.find((h) => h.id === id);
      return match?.text || defaultFallback || '';
    },
    [headerTags]
  );

  const updateHeaderTag = (id: string, updated: Partial<HeaderTagItem>) => {
    setHeaderTags((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updated } : item))
    );
  };

  const addHeaderTag = (item: Omit<HeaderTagItem, 'id'>) => {
    const newItem: HeaderTagItem = {
      ...item,
      id: `custom-hdr-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      defaultText: item.defaultText || item.text,
    };
    setHeaderTags((prev) => [newItem, ...prev]);
  };

  const deleteHeaderTag = (id: string) => {
    setHeaderTags((prev) => prev.filter((item) => item.id !== id));
  };

  const resetHeaderTags = () => {
    setHeaderTags(initialHeaderTags);
  };

  // --------------------------------------------------------------------------
  // ENTITY MUTATIONS
  // --------------------------------------------------------------------------
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
    const newFaq: FaqItem = {
      id: `faq-${Date.now()}`,
      ...faq,
    };
    setFaqs((prev) => [...prev, newFaq]);
  };

  const deleteFaq = (id: string) => {
    setFaqs((prev) => prev.filter((f) => f.id !== id));
  };

  // --------------------------------------------------------------------------
  // BACKUP EXPORT & IMPORT
  // --------------------------------------------------------------------------
  const exportBackup = () => {
    exportStateAsJsonFile({
      publications,
      testimonials,
      doctorReviews,
      articles,
      blogCategories,
      authors,
      visualContent,
      faqs,
      headerTags,
      exportedAt: new Date().toISOString(),
    });
  };

  const importBackup = async (file: File): Promise<boolean> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const json = JSON.parse(e.target?.result as string);
          if (json.publications) setPublications(json.publications);
          if (json.testimonials) setTestimonials(json.testimonials);
          if (json.doctorReviews) setDoctorReviews(json.doctorReviews);
          if (json.articles) setArticles(json.articles);
          if (json.blogCategories) setBlogCategories(json.blogCategories);
          if (json.authors) setAuthors(json.authors);
          if (json.visualContent) setVisualContent(json.visualContent);
          if (json.faqs) setFaqs(json.faqs);
          if (json.headerTags) setHeaderTags(json.headerTags);

          await saveAllToDisk();
          resolve(true);
        } catch (err) {
          console.error('[Import] Failed to parse backup:', err);
          resolve(false);
        }
      };
      reader.readAsText(file);
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
    setHeaderTags(initialHeaderTags);
    setHasUnsavedChanges(true);
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
        headerTags,
        updateHeaderTag,
        addHeaderTag,
        deleteHeaderTag,
        resetHeaderTags,
        getHeader,
        getHeaderSubtext,
        getEyebrow,
        isSaving,
        hasUnsavedChanges,
        lastSavedTime,
        saveAllToDisk,
        exportBackup,
        importBackup,
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
