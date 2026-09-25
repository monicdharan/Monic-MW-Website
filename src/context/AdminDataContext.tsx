import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { PublicationItem, ReviewScreenshot, DoctorTestimonial, JournalArticleItem, FaqItem } from '../types';
import { publicationsData as initialPublications } from '../data/publications';
import { googleReviews, whatsappReviews, doctorTestimonials as initialDoctorReviews } from '../data/testimonials';
import { journalArticlesData as initialArticles } from '../data/articles';
import { faqsData as initialFaqs } from '../data/faqs';
import { HeaderTagItem, initialHeaderTags } from '../data/headerTags';
import defaultPersistedData from '../data/persistedContent.json';
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
  heroLead: 'Medical writing, biostatistics, and publication support for clinicians, postgraduate doctors, researchers, and medical faculty — delivered with research integrity and confidentiality.',
  phone: '+91 91763 65161',
  email: 'support@medzenwrites.com',
};

const combinedInitialTestimonials: ReviewScreenshot[] = [
  ...googleReviews,
  ...whatsappReviews,
];

// Generate unique session tab identifier to prevent echo loops
const TAB_INSTANCE_ID = `tab_${Math.random().toString(36).substring(2, 9)}_${Date.now()}`;

// Helper to merge stored header tags with system defaults
function mergeHeaderTags(stored: HeaderTagItem[] = []): HeaderTagItem[] {
  const map = new Map<string, HeaderTagItem>();
  initialHeaderTags.forEach((item) => map.set(item.id, { ...item }));
  stored.forEach((item) => {
    const existing = map.get(item.id);
    map.set(item.id, {
      ...existing,
      ...item,
      defaultText: existing?.defaultText || item.defaultText || item.text,
      defaultSubtext: existing?.defaultSubtext || item.defaultSubtext,
    });
  });
  return Array.from(map.values());
}

const AdminDataContext = createContext<AdminDataContextType | undefined>(undefined);

export const AdminDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Static disk fallback data
  const staticData: any = defaultPersistedData || {};

  const [publications, setPublications] = useState<PublicationItem[]>(() =>
    localGet('pubs', staticData.publications || initialPublications)
  );
  const [testimonials, setTestimonials] = useState<ReviewScreenshot[]>(() =>
    localGet('testimonials', staticData.testimonials || combinedInitialTestimonials)
  );
  const [doctorReviews, setDoctorReviews] = useState<DoctorTestimonial[]>(() =>
    localGet('doctor_reviews', staticData.doctorReviews || initialDoctorReviews)
  );
  const [articles, setArticles] = useState<JournalArticleItem[]>(() =>
    localGet('articles', staticData.articles || initialArticles)
  );
  const [blogCategories, setBlogCategories] = useState<string[]>(() =>
    localGet('categories', staticData.blogCategories || initialCategories)
  );
  const [authors, setAuthors] = useState<BlogAuthor[]>(() =>
    localGet('authors', staticData.authors || initialAuthorsList)
  );
  const [visualContent, setVisualContent] = useState<VisualContentState>(() =>
    localGet('visual', staticData.visualContent || initialVisualContent)
  );
  const [faqs, setFaqs] = useState<FaqItem[]>(() =>
    localGet('faqs', staticData.faqs || initialFaqs)
  );
  const [headerTags, setHeaderTags] = useState<HeaderTagItem[]>(() => {
    const cached = localGet<HeaderTagItem[]>('headers', staticData.headerTags || initialHeaderTags);
    return mergeHeaderTags(cached);
  });

  const [isSaving, setIsSaving] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [lastSavedTime, setLastSavedTime] = useState<string | null>(() =>
    localGet('last_saved', staticData.lastSavedTime || null)
  );

  // Guards against circular loops and double renders
  const isInitialMount = useRef(true);
  const isInternalSyncRef = useRef(false);
  const autoSaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const channelRef = useRef<BroadcastChannel | null>(null);

  // --------------------------------------------------------------------------
  // BROADCAST CHANNEL SETUP (Single instance, loop-protected)
  // --------------------------------------------------------------------------
  const notifyAllTabs = useCallback((payload: any) => {
    try {
      if (channelRef.current) {
        channelRef.current.postMessage({
          type: 'full_sync',
          senderId: TAB_INSTANCE_ID,
          payload,
        });
      }
    } catch {}
  }, []);

  const applyFullState = useCallback((p: any) => {
    if (!p || typeof p !== 'object') return;
    isInternalSyncRef.current = true;

    if (p.publications) setPublications(p.publications);
    if (p.testimonials) setTestimonials(p.testimonials);
    if (p.doctorReviews) setDoctorReviews(p.doctorReviews);
    if (p.articles) setArticles(p.articles);
    if (p.blogCategories) setBlogCategories(p.blogCategories);
    if (p.authors) setAuthors(p.authors);
    if (p.visualContent) setVisualContent(p.visualContent);
    if (p.faqs) setFaqs(p.faqs);
    if (p.headerTags) setHeaderTags(mergeHeaderTags(p.headerTags));
    if (p.lastSavedTime) setLastSavedTime(p.lastSavedTime);
    setHasUnsavedChanges(false);
  }, []);

  useEffect(() => {
    if (typeof BroadcastChannel !== 'undefined') {
      try {
        const bc = new BroadcastChannel('medzen_admin_channel_v5');
        channelRef.current = bc;
        bc.onmessage = (event) => {
          // Ignore own messages to prevent echo loop
          if (event.data?.senderId === TAB_INSTANCE_ID) return;
          if (event.data?.type === 'full_sync' && event.data?.payload) {
            applyFullState(event.data.payload);
          }
        };
      } catch (err) {
        console.warn('[AdminDataContext] BroadcastChannel init error:', err);
      }
    }

    return () => {
      if (channelRef.current) {
        channelRef.current.close();
        channelRef.current = null;
      }
    };
  }, [applyFullState]);

  // --------------------------------------------------------------------------
  // ASYNC BOOTSTRAP (Runs once on mount)
  // --------------------------------------------------------------------------
  useEffect(() => {
    let isMounted = true;

    async function loadBootstrapData() {
      try {
        const localSavedAt = localGet<string | null>('saved_at', null);
        const localTime = localSavedAt ? new Date(localSavedAt).getTime() : 0;

        const diskState = await loadStateFromDisk();
        const diskTime = diskState?.savedAt ? new Date(diskState.savedAt).getTime() : 0;

        const idbState = await idbGet<any>('medzen_full_state');
        const idbTime = idbState?.savedAt ? new Date(idbState.savedAt).getTime() : 0;

        // Apply newest source
        if (diskState && diskTime >= localTime && diskTime >= idbTime) {
          if (!isMounted) return;
          applyFullState(diskState);
        } else if (idbState && idbTime > diskTime && idbTime >= localTime) {
          if (!isMounted) return;
          applyFullState(idbState);
        }
      } catch (err) {
        console.warn('[AdminDataContext] Bootstrap error:', err);
      }
    }

    loadBootstrapData();

    return () => {
      isMounted = false;
    };
  }, [applyFullState]);

  // --------------------------------------------------------------------------
  // AUTOMATED REAL-TIME DISK SAVING WITH 600MS DEBOUNCE (LOOP SAFE)
  // --------------------------------------------------------------------------
  useEffect(() => {
    // Skip initial mount
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    // Skip if state update was caused by incoming sync or bootstrap
    if (isInternalSyncRef.current) {
      isInternalSyncRef.current = false;
      return;
    }

    const nowIso = new Date().toISOString();
    const nowDisplay = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const payload = {
      publications,
      testimonials,
      doctorReviews,
      articles,
      blogCategories,
      authors,
      visualContent,
      faqs,
      headerTags,
      lastSavedTime: nowDisplay,
      savedAt: nowIso,
    };

    // 1. Synchronous ultra-fast local storage cache
    localSet('pubs', publications);
    localSet('testimonials', testimonials);
    localSet('doctor_reviews', doctorReviews);
    localSet('articles', articles);
    localSet('categories', blogCategories);
    localSet('authors', authors);
    localSet('visual', visualContent);
    localSet('faqs', faqs);
    localSet('headers', headerTags);
    localSet('last_saved', nowDisplay);
    localSet('saved_at', nowIso);

    // 2. Background IndexedDB save
    idbSet('medzen_full_state', payload);

    // 3. Notify other tabs
    notifyAllTabs(payload);

    setHasUnsavedChanges(true);

    // 4. Debounced disk save
    if (autoSaveTimerRef.current) {
      clearTimeout(autoSaveTimerRef.current);
    }

    autoSaveTimerRef.current = setTimeout(async () => {
      setIsSaving(true);
      try {
        const diskRes = await saveStateToDisk(payload);
        if (diskRes.success) {
          setLastSavedTime(nowDisplay);
          setHasUnsavedChanges(false);
        }
      } catch (err) {
        console.warn('[AdminDataContext] Auto-save disk error:', err);
      } finally {
        setIsSaving(false);
      }
    }, 600);

    return () => {
      if (autoSaveTimerRef.current) {
        clearTimeout(autoSaveTimerRef.current);
      }
    };
  }, [publications, testimonials, doctorReviews, articles, blogCategories, authors, visualContent, faqs, headerTags, notifyAllTabs]);

  // --------------------------------------------------------------------------
  // EXPLICIT SAVE ALL TO DISK (FLUSHES IMMEDIATELY)
  // --------------------------------------------------------------------------
  const saveAllToDisk = useCallback(async (): Promise<{ success: boolean; message: string }> => {
    if (autoSaveTimerRef.current) {
      clearTimeout(autoSaveTimerRef.current);
    }
    setIsSaving(true);
    const nowDisplay = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const nowIso = new Date().toISOString();

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
      lastSavedTime: nowDisplay,
      savedAt: nowIso,
    };

    try {
      localSet('pubs', publications);
      localSet('testimonials', testimonials);
      localSet('doctor_reviews', doctorReviews);
      localSet('articles', articles);
      localSet('categories', blogCategories);
      localSet('authors', authors);
      localSet('visual', visualContent);
      localSet('faqs', faqs);
      localSet('headers', headerTags);
      localSet('last_saved', nowDisplay);
      localSet('saved_at', nowIso);

      await idbSet('medzen_full_state', fullState);
      const diskRes = await saveStateToDisk(fullState);

      setLastSavedTime(nowDisplay);
      setHasUnsavedChanges(false);
      setIsSaving(false);

      notifyAllTabs(fullState);

      return {
        success: true,
        message: diskRes.success
          ? `All changes permanently written to disk at ${nowDisplay}!`
          : `Saved to browser storage & cache at ${nowDisplay}!`,
      };
    } catch (err: any) {
      setIsSaving(false);
      return {
        success: false,
        message: `Save error: ${err?.message || 'Failed to write to disk'}`,
      };
    }
  }, [publications, testimonials, doctorReviews, articles, blogCategories, authors, visualContent, faqs, headerTags, notifyAllTabs]);

  // --------------------------------------------------------------------------
  // HEADER TAGS & EYEBROWS HELPERS
  // --------------------------------------------------------------------------
  const getHeader = useCallback(
    (id: string, defaultFallback?: string): string => {
      const match = headerTags.find((h) => h.id === id);
      if (match && match.text !== undefined && match.text !== null) {
        return match.text;
      }
      return defaultFallback || '';
    },
    [headerTags]
  );

  const getHeaderSubtext = useCallback(
    (id: string, defaultFallback?: string): string => {
      const match = headerTags.find((h) => h.id === id);
      if (match && match.subtext !== undefined && match.subtext !== null) {
        return match.subtext;
      }
      return defaultFallback || '';
    },
    [headerTags]
  );

  const getEyebrow = useCallback(
    (id: string, defaultFallback?: string): string => {
      const match = headerTags.find((h) => h.id === id);
      if (match && match.text !== undefined && match.text !== null) {
        return match.text;
      }
      return defaultFallback || '';
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
          if (json.headerTags) setHeaderTags(mergeHeaderTags(json.headerTags));

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
