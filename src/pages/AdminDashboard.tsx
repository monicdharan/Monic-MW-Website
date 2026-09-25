import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminData } from '../context/AdminDataContext';
import { TagLevel, PageKey } from '../data/headerTags';
import '../styles/admin.css';

type AdminTab =
  | 'header-tags'
  | 'home-content'
  | 'about-content'
  | 'services-content'
  | 'publications'
  | 'testimonials'
  | 'blog-posts'
  | 'blog-categories'
  | 'authors'
  | 'contact-content'
  | 'faq-content'
  | 'legal-content'
  | 'global-content';

export const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const {
    publications,
    addPublication,
    deletePublication,
    testimonials,
    addTestimonial,
    deleteTestimonial,
    articles,
    addArticle,
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
    isSaving,
    hasUnsavedChanges,
    lastSavedTime,
    saveAllToDisk,
    exportBackup,
    importBackup,
    resetToDefaults,
  } = useAdminData();

  const [activeTab, setActiveTab] = useState<AdminTab>('header-tags');
  const [successToast, setSuccessToast] = useState<string | null>(null);
  const fileImportRef = useRef<HTMLInputElement>(null);

  const showToast = (msg: string) => {
    setSuccessToast(msg);
    setTimeout(() => setSuccessToast(null), 3500);
  };

  // --------------------------------------------------------------------------
  // GLOBAL SAVE HANDLER & SHORTCUT (CTRL + S)
  // --------------------------------------------------------------------------
  const handleSaveAll = async () => {
    const res = await saveAllToDisk();
    showToast(res.message);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        handleSaveAll();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleSaveAll]);

  // --------------------------------------------------------------------------
  // HEADER TAGS & EYEBROWS FILTER & SEARCH
  // --------------------------------------------------------------------------
  const [tagFilter, setTagFilter] = useState<TagLevel | 'all'>('all');
  const [pageFilter, setPageFilter] = useState<PageKey | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddTagModal, setShowAddTagModal] = useState(false);

  // New Tag Form State
  const [newTagPage, setNewTagPage] = useState<PageKey>('home');
  const [newTagLevel, setNewTagLevel] = useState<TagLevel>('h2');
  const [newTagSection, setNewTagSection] = useState('');
  const [newTagLabel, setNewTagLabel] = useState('');
  const [newTagText, setNewTagText] = useState('');
  const [newTagSubtext, setNewTagSubtext] = useState('');

  const handleAddCustomTag = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTagText.trim() || !newTagLabel.trim()) {
      alert('Please fill in both Tag Label and Content Text.');
      return;
    }
    addHeaderTag({
      page: newTagPage,
      tagType: newTagLevel,
      section: newTagSection.trim() || 'Custom Section',
      label: newTagLabel.trim(),
      text: newTagText.trim(),
      subtext: newTagSubtext.trim() || undefined,
      defaultText: newTagText.trim(),
    });
    setNewTagSection('');
    setNewTagLabel('');
    setNewTagText('');
    setNewTagSubtext('');
    setShowAddTagModal(false);
    showToast('New header tag added successfully!');
  };

  const filteredHeaderTags = headerTags.filter((item) => {
    if (tagFilter !== 'all' && item.tagType !== tagFilter) return false;
    if (pageFilter !== 'all' && item.page !== pageFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        item.label.toLowerCase().includes(q) ||
        item.text.toLowerCase().includes(q) ||
        item.section.toLowerCase().includes(q) ||
        item.page.toLowerCase().includes(q) ||
        item.tagType.toLowerCase().includes(q) ||
        (item.subtext && item.subtext.toLowerCase().includes(q))
      );
    }
    return true;
  });

  // Helper for rendering a quick tag editor block
  const renderTagEditorCard = (tagId: string, title: string, hasSubtext = true, subtextLabel = 'Subtitle / Description') => {
    const tag = headerTags.find((t) => t.id === tagId);
    if (!tag) return null;
    return (
      <div key={tagId} style={{ background: '#f8fafc', padding: '16px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <strong style={{ fontSize: '0.92rem', color: '#1e293b' }}>{title}</strong>
          <span style={{ fontSize: '0.72rem', background: '#e2e8f0', color: '#475569', padding: '2px 6px', borderRadius: '4px', textTransform: 'uppercase', fontWeight: 700 }}>
            {tag.tagType}
          </span>
        </div>
        <div style={{ marginBottom: hasSubtext ? '8px' : 0 }}>
          <label className="admin-label">Heading / Text</label>
          <input
            type="text"
            className="admin-input"
            value={tag.text}
            onChange={(e) => updateHeaderTag(tagId, { text: e.target.value })}
          />
        </div>
        {hasSubtext && (
          <div>
            <label className="admin-label">{subtextLabel}</label>
            <textarea
              className="admin-textarea"
              rows={2}
              value={tag.subtext || ''}
              onChange={(e) => updateHeaderTag(tagId, { subtext: e.target.value })}
            />
          </div>
        )}
      </div>
    );
  };

  // --------------------------------------------------------------------------
  // PUBLICATIONS STATE
  // --------------------------------------------------------------------------
  const [pubTitle, setPubTitle] = useState('');
  const [pubUrl, setPubUrl] = useState('');
  const [pubCategory, setPubCategory] = useState('Original Research');
  const [pubImage, setPubImage] = useState<string | null>(null);
  const pubFileInputRef = useRef<HTMLInputElement>(null);

  const handlePubFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPubImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePubUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pubImage) {
      alert('Please choose or paste an image first.');
      return;
    }

    addPublication({
      title: pubTitle.trim() || 'Research Publication Record',
      articleUrl: pubUrl.trim() || undefined,
      category: (pubCategory.toLowerCase().includes('case') ? 'case' : pubCategory.toLowerCase().includes('review') ? 'review' : 'original') as any,
      image: pubImage,
      specialty: pubCategory,
      type: 'Original Research',
      year: `${new Date().getFullYear()}`,
      journalOrIndexing: 'Peer-Reviewed / Indexed Journal',
    });

    setPubTitle('');
    setPubUrl('');
    setPubImage(null);
    if (pubFileInputRef.current) pubFileInputRef.current.value = '';
    showToast('Publication uploaded successfully!');
  };

  // --------------------------------------------------------------------------
  // TESTIMONIALS STATE
  // --------------------------------------------------------------------------
  const [testiImage, setTestiImage] = useState<string | null>(null);
  const [testiAuthor, setTestiAuthor] = useState('');
  const [testiCaption, setTestiCaption] = useState('');
  const testiFileInputRef = useRef<HTMLInputElement>(null);

  const handleTestiFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTestiImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTestiUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testiImage) {
      alert('Please choose an image screenshot to upload.');
      return;
    }

    addTestimonial({
      image: testiImage,
      authorName: testiAuthor.trim() || 'Verified Doctor / Client',
      caption: testiCaption.trim() || 'Verified feedback on research and thesis service.',
      type: 'google',
      stars: 5,
    });

    setTestiImage(null);
    setTestiAuthor('');
    setTestiCaption('');
    if (testiFileInputRef.current) testiFileInputRef.current.value = '';
    showToast('Testimonial screenshot uploaded successfully!');
  };

  // --------------------------------------------------------------------------
  // BLOG POSTS STATE
  // --------------------------------------------------------------------------
  const [postTitle, setPostTitle] = useState('');
  const [postExcerpt, setPostExcerpt] = useState('');
  const [postCategory, setPostCategory] = useState(blogCategories[0] || 'Medical Research');
  const [postReadTime, setPostReadTime] = useState('5 min read');
  const [postContent, setPostContent] = useState('');

  const handlePostUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postTitle || !postExcerpt) {
      alert('Post Title and Excerpt are required.');
      return;
    }

    const slug = postTitle
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    addArticle({
      slug,
      title: postTitle,
      category: postCategory,
      topic: postCategory,
      readTime: postReadTime,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      summary: postExcerpt,
      content: [postContent || postExcerpt],
    });

    setPostTitle('');
    setPostExcerpt('');
    setPostContent('');
    showToast('Blog article created successfully!');
  };

  // --------------------------------------------------------------------------
  // CATEGORIES & AUTHORS STATE
  // --------------------------------------------------------------------------
  const [newCatName, setNewCatName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorRole, setAuthorRole] = useState('');

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCatName.trim()) return;
    addCategory(newCatName.trim());
    setNewCatName('');
    showToast('Category added!');
  };

  const handleAddAuthor = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim()) return;
    addAuthor({
      id: `auth-${Date.now()}`,
      name: authorName.trim(),
      role: authorRole.trim() || 'Medical Writer & Consultant',
    });
    setAuthorName('');
    setAuthorRole('');
    showToast('Author added!');
  };

  // --------------------------------------------------------------------------
  // FAQ STATE
  // --------------------------------------------------------------------------
  const [newFaqQuestion, setNewFaqQuestion] = useState('');
  const [newFaqAnswer, setNewFaqAnswer] = useState('');

  const handleAddFaq = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFaqQuestion.trim() || !newFaqAnswer.trim()) {
      alert('Please fill in both Question and Answer.');
      return;
    }
    addFaq({
      question: newFaqQuestion.trim(),
      answer: newFaqAnswer.trim(),
    });
    setNewFaqQuestion('');
    setNewFaqAnswer('');
    showToast('FAQ added successfully!');
  };

  return (
    <div className="admin-layout">
      {/* Hidden File Input for Backup Import */}
      <input
        ref={fileImportRef}
        type="file"
        accept=".json"
        style={{ display: 'none' }}
        onChange={async (e) => {
          const file = e.target.files?.[0];
          if (file) {
            const success = await importBackup(file);
            if (success) {
              showToast('Backup restored successfully!');
            } else {
              alert('Invalid backup JSON file.');
            }
          }
        }}
      />

      {/* =====================================================================
          SIDEBAR NAVIGATION
          ===================================================================== */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="material-symbols-outlined" style={{ color: '#0d9488', fontSize: '26px' }}>
              dashboard_customize
            </span>
            <span className="admin-brand">MedZen Studio</span>
          </div>
          <span className="admin-badge">Admin Pro</span>
        </div>

        <nav className="admin-nav">
          <div className="admin-nav-divider">CORE SYSTEM</div>

          <button
            type="button"
            className={`admin-nav-item ${activeTab === 'header-tags' ? 'active' : ''}`}
            onClick={() => setActiveTab('header-tags')}
            style={activeTab === 'header-tags' ? { background: '#fdf4ff', color: '#a21caf', borderColor: '#f0abfc' } : {}}
          >
            <span className="material-symbols-outlined admin-nav-icon" style={{ color: activeTab === 'header-tags' ? '#a21caf' : undefined }}>
              format_size
            </span>
            <span style={{ fontWeight: 700 }}>Headers &amp; Eyebrows (H1-H6)</span>
          </button>

          <div className="admin-nav-divider">PAGE STUDIOS (ALL PAGES)</div>

          <button
            type="button"
            className={`admin-nav-item ${activeTab === 'home-content' ? 'active' : ''}`}
            onClick={() => setActiveTab('home-content')}
          >
            <span className="material-symbols-outlined admin-nav-icon">home</span>
            <span>Home Page Content</span>
          </button>

          <button
            type="button"
            className={`admin-nav-item ${activeTab === 'about-content' ? 'active' : ''}`}
            onClick={() => setActiveTab('about-content')}
          >
            <span className="material-symbols-outlined admin-nav-icon">info</span>
            <span>About Page Content</span>
          </button>

          <button
            type="button"
            className={`admin-nav-item ${activeTab === 'services-content' ? 'active' : ''}`}
            onClick={() => setActiveTab('services-content')}
          >
            <span className="material-symbols-outlined admin-nav-icon">medical_services</span>
            <span>Services Page Content</span>
          </button>

          <button
            type="button"
            className={`admin-nav-item ${activeTab === 'publications' ? 'active' : ''}`}
            onClick={() => setActiveTab('publications')}
          >
            <span className="material-symbols-outlined admin-nav-icon">menu_book</span>
            <span>Publications Portfolio</span>
          </button>

          <button
            type="button"
            className={`admin-nav-item ${activeTab === 'testimonials' ? 'active' : ''}`}
            onClick={() => setActiveTab('testimonials')}
          >
            <span className="material-symbols-outlined admin-nav-icon">rate_review</span>
            <span>Reviews &amp; Screenshots</span>
          </button>

          <button
            type="button"
            className={`admin-nav-item ${activeTab === 'blog-posts' ? 'active' : ''}`}
            onClick={() => setActiveTab('blog-posts')}
          >
            <span className="material-symbols-outlined admin-nav-icon">post_add</span>
            <span>Blog &amp; Journal Posts</span>
          </button>

          <button
            type="button"
            className={`admin-nav-item ${activeTab === 'contact-content' ? 'active' : ''}`}
            onClick={() => setActiveTab('contact-content')}
          >
            <span className="material-symbols-outlined admin-nav-icon">call</span>
            <span>Contact Page Content</span>
          </button>

          <button
            type="button"
            className={`admin-nav-item ${activeTab === 'faq-content' ? 'active' : ''}`}
            onClick={() => setActiveTab('faq-content')}
          >
            <span className="material-symbols-outlined admin-nav-icon">help_outline</span>
            <span>FAQ Page Content</span>
          </button>

          <button
            type="button"
            className={`admin-nav-item ${activeTab === 'legal-content' ? 'active' : ''}`}
            onClick={() => setActiveTab('legal-content')}
          >
            <span className="material-symbols-outlined admin-nav-icon">policy</span>
            <span>Legal &amp; Policy Pages</span>
          </button>

          <button
            type="button"
            className={`admin-nav-item ${activeTab === 'global-content' ? 'active' : ''}`}
            onClick={() => setActiveTab('global-content')}
          >
            <span className="material-symbols-outlined admin-nav-icon">public</span>
            <span>Global CTA &amp; Footer</span>
          </button>

          <div className="admin-nav-divider">TAXONOMY &amp; TEAM</div>

          <button
            type="button"
            className={`admin-nav-item ${activeTab === 'blog-categories' ? 'active' : ''}`}
            onClick={() => setActiveTab('blog-categories')}
          >
            <span className="material-symbols-outlined admin-nav-icon">category</span>
            <span>Blog Categories</span>
          </button>

          <button
            type="button"
            className={`admin-nav-item ${activeTab === 'authors' ? 'active' : ''}`}
            onClick={() => setActiveTab('authors')}
          >
            <span className="material-symbols-outlined admin-nav-icon">group</span>
            <span>Authors &amp; Editors</span>
          </button>
        </nav>

        <div className="admin-sidebar-footer">
          <button
            type="button"
            className="admin-logout-btn"
            onClick={() => {
              navigate('/');
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>logout</span>
            <span>View Public Website</span>
          </button>
        </div>
      </aside>

      {/* =====================================================================
          MAIN DASHBOARD BODY & PERSISTENT STICKY TOP BAR
          ===================================================================== */}
      <main className="admin-main">
        {/* TOP STATUS & SAVE BAR */}
        <div className="admin-top-bar">
          <div className="admin-top-left">
            {isSaving ? (
              <span className="admin-save-badge saving">
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>sync</span>
                <span>Writing to Disk...</span>
              </span>
            ) : hasUnsavedChanges ? (
              <span className="admin-save-badge unsaved">
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>edit_note</span>
                <span>Syncing Changes to Disk...</span>
              </span>
            ) : (
              <span className="admin-save-badge saved">
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>check_circle</span>
                <span>Saved Permanently to Disk {lastSavedTime ? `(${lastSavedTime})` : ''}</span>
              </span>
            )}
          </div>

          <div className="admin-top-right">
            {/* Primary Save Button */}
            <button
              type="button"
              className="admin-btn-save-main"
              onClick={handleSaveAll}
              disabled={isSaving}
              title="Save all changes to disk permanently (Ctrl + S)"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>save</span>
              <span>{isSaving ? 'Saving...' : 'Save All Changes to Disk'}</span>
            </button>

            {/* Export JSON Backup */}
            <button
              type="button"
              className="admin-btn-secondary-action"
              onClick={exportBackup}
              title="Download full content backup JSON"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>download</span>
              <span>Export Backup</span>
            </button>

            {/* Import JSON Backup */}
            <button
              type="button"
              className="admin-btn-secondary-action"
              onClick={() => fileImportRef.current?.click()}
              title="Restore content from a backup JSON file"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>upload_file</span>
              <span>Restore Backup</span>
            </button>

            {/* Reset to Defaults */}
            <button
              type="button"
              className="admin-btn-secondary-action"
              style={{ color: '#ef4444' }}
              onClick={() => {
                if (window.confirm('Reset all website customizations back to original defaults?')) {
                  resetToDefaults();
                  showToast('Reset to original defaults!');
                }
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>restart_alt</span>
              <span>Reset Defaults</span>
            </button>
          </div>
        </div>

        {/* TOAST FEEDBACK */}
        {successToast && (
          <div className="admin-toast-banner">
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>task_alt</span>
            <span>{successToast}</span>
          </div>
        )}

        {/* ===================================================================
            TAB 1: HEADER TAGS & EYEBROWS (H1-H6 MASTER TABLE)
            =================================================================== */}
        {activeTab === 'header-tags' && (
          <section>
            <div className="admin-page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <h1 className="admin-page-title">Website Headers &amp; Eyebrows Editor</h1>
                <p className="admin-page-subtitle">
                  Directly customize all H1, H2, H3, H4, H5, H6 headings, subtitles, and badges across all pages of the website.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  type="button"
                  className="admin-btn-save-main"
                  style={{ background: '#2563eb' }}
                  onClick={() => setShowAddTagModal(true)}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span>
                  <span>Add Custom Header Tag</span>
                </button>
                <button
                  type="button"
                  className="admin-btn-secondary-action"
                  onClick={() => {
                    if (window.confirm('Reset all header tags to original text?')) {
                      resetHeaderTags();
                      showToast('Headers reset to defaults!');
                    }
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>restore</span>
                  <span>Reset All Headers</span>
                </button>
              </div>
            </div>

            {/* FILTERING & SEARCH TOOLBAR */}
            <div className="admin-filter-bar">
              {/* Tag Level Filter */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#475569' }}>Tag Type:</span>
                <div className="admin-filter-pills">
                  {(['all', 'eyebrow', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const).map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      className={`admin-filter-pill ${tagFilter === lvl ? 'active' : ''}`}
                      onClick={() => setTagFilter(lvl)}
                    >
                      {lvl === 'all' ? 'All Tags' : lvl === 'eyebrow' ? 'Eyebrows / Badges' : lvl.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Page Filter */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#475569' }}>Page:</span>
                <div className="admin-filter-pills">
                  {(['all', 'home', 'about', 'services', 'publications', 'testimonials', 'journal', 'contact', 'global', 'legal'] as const).map((p) => (
                    <button
                      key={p}
                      type="button"
                      className={`admin-filter-pill ${pageFilter === p ? 'active' : ''}`}
                      onClick={() => setPageFilter(p)}
                    >
                      {p === 'all' ? 'All Pages' : p.charAt(0).toUpperCase() + p.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Search Box */}
              <div style={{ position: 'relative', width: '100%', maxWidth: '360px' }}>
                <input
                  type="text"
                  className="admin-input"
                  style={{ paddingLeft: '36px' }}
                  placeholder="Search headings, labels, sections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <span
                  className="material-symbols-outlined"
                  style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', fontSize: '18px' }}
                >
                  search
                </span>
              </div>
            </div>

            {/* RESULTS STATS */}
            <div style={{ margin: '14px 0', fontSize: '0.84rem', color: '#64748b', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Showing <strong>{filteredHeaderTags.length}</strong> of {headerTags.length} total header entries</span>
              {(tagFilter !== 'all' || pageFilter !== 'all' || searchQuery) && (
                <button
                  type="button"
                  className="admin-btn-secondary-action"
                  style={{ padding: '2px 8px', fontSize: '0.78rem' }}
                  onClick={() => {
                    setTagFilter('all');
                    setPageFilter('all');
                    setSearchQuery('');
                  }}
                >
                  Clear Filters
                </button>
              )}
            </div>

            {/* HEADER TAGS CARDS GRID */}
            <div className="admin-headers-grid">
              {filteredHeaderTags.map((tag) => (
                <div key={tag.id} className="admin-header-card">
                  <div className="admin-header-card-top">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      <span className={`admin-tag-badge badge-${tag.tagType}`}>
                        {tag.tagType === 'eyebrow' ? 'EYEBROW' : tag.tagType.toUpperCase()}
                      </span>
                      <span className="admin-page-badge">{tag.page}</span>
                      <span className="admin-section-name">{tag.section}</span>
                    </div>

                    <button
                      type="button"
                      className="admin-btn-secondary-action"
                      style={{ padding: '2px 8px', fontSize: '0.75rem' }}
                      onClick={() => {
                        updateHeaderTag(tag.id, { text: tag.defaultText, subtext: tag.defaultSubtext });
                        showToast(`Reset "${tag.label}" to default.`);
                      }}
                      title="Reset to default text"
                    >
                      Default
                    </button>
                    {tag.id.startsWith('custom-') && (
                      <button
                        type="button"
                        className="admin-btn-secondary-action"
                        style={{ padding: '2px 8px', fontSize: '0.75rem', color: '#ef4444' }}
                        onClick={() => {
                          if (window.confirm(`Delete custom tag "${tag.label}"?`)) {
                            deleteHeaderTag(tag.id);
                            showToast('Custom tag deleted.');
                          }
                        }}
                        title="Delete custom tag"
                      >
                        Delete
                      </button>
                    )}
                  </div>

                  <div className="admin-header-label">{tag.label}</div>

                  <div className="admin-form-group" style={{ marginBottom: '10px' }}>
                    <label className="admin-label" style={{ fontSize: '0.78rem' }}>Heading / Title Text</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={tag.text}
                      onChange={(e) => updateHeaderTag(tag.id, { text: e.target.value })}
                    />
                  </div>

                  {tag.subtext !== undefined && (
                    <div className="admin-form-group" style={{ marginBottom: 0 }}>
                      <label className="admin-label" style={{ fontSize: '0.78rem' }}>Subtitle / Accompanying Paragraph</label>
                      <textarea
                        className="admin-textarea"
                        rows={2}
                        value={tag.subtext}
                        onChange={(e) => updateHeaderTag(tag.id, { subtext: e.target.value })}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ===================================================================
            TAB 2: HOME PAGE CONTENT STUDIO
            =================================================================== */}
        {activeTab === 'home-content' && (
          <section>
            <div className="admin-page-header">
              <h1 className="admin-page-title">Home Page Content Studio</h1>
              <p className="admin-page-subtitle">Configure all sections, headlines, timelines, challenges, and previews across the Home page.</p>
            </div>

            {/* 1. Hero Section */}
            <div className="admin-card" style={{ marginBottom: '24px' }}>
              <div className="admin-card-header">
                <h3 className="admin-card-title">1. Hero Section &amp; Trust Indicators</h3>
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Hero Eyebrow Pill Badge</label>
                <input
                  type="text"
                  className="admin-input"
                  value={visualContent.heroBadge}
                  onChange={(e) => {
                    updateVisualContent({ heroBadge: e.target.value });
                    updateHeaderTag('home-hero-eyebrow', { text: e.target.value });
                  }}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-label">Hero Title (H1)</label>
                <input
                  type="text"
                  className="admin-input"
                  value={visualContent.heroTitle}
                  onChange={(e) => {
                    updateVisualContent({ heroTitle: e.target.value });
                    updateHeaderTag('home-hero-h1', { text: e.target.value });
                  }}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-label">Hero Lead Paragraph</label>
                <textarea
                  className="admin-textarea"
                  rows={3}
                  value={visualContent.heroLead}
                  onChange={(e) => {
                    updateVisualContent({ heroLead: e.target.value });
                    updateHeaderTag('home-hero-h1', { subtext: e.target.value });
                  }}
                />
              </div>

              <div style={{ marginTop: '16px' }}>
                <strong style={{ fontSize: '0.88rem', color: '#1e293b', display: 'block', marginBottom: '8px' }}>3 Hero Trust Indicators</strong>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
                  {['home-trust-item1-h4', 'home-trust-item2-h4', 'home-trust-item3-h4'].map((id, idx) => {
                    const tag = headerTags.find((t) => t.id === id);
                    if (!tag) return null;
                    return (
                      <div key={id}>
                        <label className="admin-label">Trust Item {idx + 1}</label>
                        <input
                          type="text"
                          className="admin-input"
                          value={tag.text}
                          onChange={(e) => updateHeaderTag(id, { text: e.target.value })}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 2. Services Overview Section */}
            <div className="admin-card" style={{ marginBottom: '24px' }}>
              <div className="admin-card-header">
                <h3 className="admin-card-title">2. Services Catalog Overview Section</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                {renderTagEditorCard('home-services-eyebrow', 'Section Eyebrow', false)}
                {renderTagEditorCard('home-services-h2', 'Section Title (H2) & Subtitle')}
              </div>
              <strong style={{ fontSize: '0.88rem', color: '#1e293b', display: 'block', marginBottom: '8px' }}>Featured Service Card Titles</strong>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
                {['home-service1-h3', 'home-service2-h3', 'home-service3-h3'].map((id, idx) => renderTagEditorCard(id, `Service Card ${idx + 1} Title`, false))}
              </div>
            </div>

            {/* 3. 4-Step Process Workflow */}
            <div className="admin-card" style={{ marginBottom: '24px' }}>
              <div className="admin-card-header">
                <h3 className="admin-card-title">3. 4-Step Editorial Workflow (Process Timeline)</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                {renderTagEditorCard('process-timeline-eyebrow', 'Section Eyebrow', false)}
                {renderTagEditorCard('process-timeline-h2', 'Section Title (H2) & Subtitle')}
              </div>
              <strong style={{ fontSize: '0.88rem', color: '#1e293b', display: 'block', marginBottom: '8px' }}>Workflow Steps (01 to 04)</strong>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                {['process-step1-h3', 'process-step2-h3', 'process-step3-h3', 'process-step4-h3'].map((id, idx) =>
                  renderTagEditorCard(id, `Step 0${idx + 1}`, true, 'Step Description')
                )}
              </div>
            </div>

            {/* 4. Problem vs Solution Section */}
            <div className="admin-card" style={{ marginBottom: '24px' }}>
              <div className="admin-card-header">
                <h3 className="admin-card-title">4. Challenges vs. Solutions (Why Choose Us)</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                {/* Problem Column */}
                <div style={{ background: '#fff7ed', padding: '16px', borderRadius: '8px', border: '1px solid #fed7aa' }}>
                  <h4 style={{ color: '#c2410c', margin: '0 0 12px' }}>The Challenge Column</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {renderTagEditorCard('home-problem-eyebrow', 'Challenge Eyebrow', false)}
                    {renderTagEditorCard('home-problem-h2', 'Challenge Title & Lead')}
                    {renderTagEditorCard('home-problem-pt1', 'Challenge Point 1', false)}
                    {renderTagEditorCard('home-problem-pt2', 'Challenge Point 2', false)}
                    {renderTagEditorCard('home-problem-pt3', 'Challenge Point 3', false)}
                  </div>
                </div>

                {/* Solution Column */}
                <div style={{ background: '#f0fdf4', padding: '16px', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
                  <h4 style={{ color: '#15803d', margin: '0 0 12px' }}>The Solution Column</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {renderTagEditorCard('home-solution-eyebrow', 'Solution Eyebrow', false)}
                    {renderTagEditorCard('home-solution-h2', 'Solution Title & Lead')}
                    {renderTagEditorCard('home-solution-pt1', 'Solution Point 1', false)}
                    {renderTagEditorCard('home-solution-pt2', 'Solution Point 2', false)}
                    {renderTagEditorCard('home-solution-pt3', 'Solution Point 3', false)}
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Target Journals & Previews */}
            <div className="admin-card" style={{ marginBottom: '24px' }}>
              <div className="admin-card-header">
                <h3 className="admin-card-title">5. Indexed Venues &amp; Section Previews</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
                {renderTagEditorCard('home-journals-h2', 'Target Indexed Journals Section')}
                {renderTagEditorCard('home-pubs-h2', 'Publications Section Preview')}
                {renderTagEditorCard('home-reviews-h2', 'Doctor Reviews Section Preview')}
                {renderTagEditorCard('home-faqs-h2', 'FAQ Section Preview')}
              </div>
            </div>

            <button type="button" className="admin-btn-save-main" onClick={handleSaveAll}>
              Save Home Page Changes to Disk
            </button>
          </section>
        )}

        {/* ===================================================================
            TAB 3: ABOUT PAGE CONTENT STUDIO
            =================================================================== */}
        {activeTab === 'about-content' && (
          <section>
            <div className="admin-page-header">
              <h1 className="admin-page-title">About Page Content Studio</h1>
              <p className="admin-page-subtitle">Edit company mission, purpose story, integrity callout, and 4 core principles.</p>
            </div>

            {/* 1. About Hero */}
            <div className="admin-card" style={{ marginBottom: '24px' }}>
              <div className="admin-card-header">
                <h3 className="admin-card-title">1. About Hero Section</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '16px' }}>
                {renderTagEditorCard('about-hero-eyebrow', 'Hero Eyebrow', false)}
                {renderTagEditorCard('about-hero-h1', 'Hero Title (H1) & Subtext')}
              </div>
            </div>

            {/* 2. Our Purpose & 4 Story Paragraphs */}
            <div className="admin-card" style={{ marginBottom: '24px' }}>
              <div className="admin-card-header">
                <h3 className="admin-card-title">2. Our Purpose &amp; Story</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '16px', marginBottom: '16px' }}>
                {renderTagEditorCard('about-purpose-eyebrow', 'Purpose Eyebrow', false)}
                {renderTagEditorCard('about-purpose-h2', 'Purpose Headline (H2)', false)}
              </div>

              <strong style={{ fontSize: '0.88rem', color: '#1e293b', display: 'block', marginBottom: '8px' }}>Story Paragraphs (1 to 4)</strong>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['about-purpose-p1', 'about-purpose-p2', 'about-purpose-p3', 'about-purpose-p4'].map((id, idx) => (
                  <div key={id}>
                    <label className="admin-label">Paragraph {idx + 1}</label>
                    <textarea
                      className="admin-textarea"
                      rows={2}
                      value={headerTags.find((t) => t.id === id)?.text || ''}
                      onChange={(e) => updateHeaderTag(id, { text: e.target.value })}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Research Integrity Box */}
            <div className="admin-card" style={{ marginBottom: '24px' }}>
              <div className="admin-card-header">
                <h3 className="admin-card-title">3. Research Integrity Callout Box</h3>
              </div>
              {renderTagEditorCard('about-integrity-h4', 'Research Integrity Box', true, 'Integrity Assurance Body')}
            </div>

            {/* 4. Four Core Principles */}
            <div className="admin-card" style={{ marginBottom: '24px' }}>
              <div className="admin-card-header">
                <h3 className="admin-card-title">4. Four Core Editorial Principles</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '16px', marginBottom: '16px' }}>
                {renderTagEditorCard('about-principles-eyebrow', 'Section Eyebrow', false)}
                {renderTagEditorCard('about-principles-h2', 'Section Title & Subtitle')}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                {['about-principle1-h3', 'about-principle2-h3', 'about-principle3-h3', 'about-principle4-h3'].map((id) =>
                  renderTagEditorCard(id, headerTags.find((t) => t.id === id)?.label || 'Principle Card')
                )}
              </div>
            </div>

            <button type="button" className="admin-btn-save-main" onClick={handleSaveAll}>
              Save About Page Changes to Disk
            </button>
          </section>
        )}

        {/* ===================================================================
            TAB 4: SERVICES PAGE CONTENT STUDIO
            ========================================================================= */}
        {activeTab === 'services-content' && (
          <section>
            <div className="admin-page-header">
              <h1 className="admin-page-title">Services Page Content Studio</h1>
              <p className="admin-page-subtitle">Customize services hero, catalog headlines, and 4 quality guarantee badges.</p>
            </div>

            {/* 1. Services Hero */}
            <div className="admin-card" style={{ marginBottom: '24px' }}>
              <div className="admin-card-header">
                <h3 className="admin-card-title">1. Services Hero &amp; Catalog Heading</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '16px', marginBottom: '16px' }}>
                {renderTagEditorCard('services-hero-eyebrow', 'Hero Eyebrow', false)}
                {renderTagEditorCard('services-hero-h1', 'Hero Title (H1) & Subtext')}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '16px' }}>
                {renderTagEditorCard('services-list-eyebrow', 'Catalog Eyebrow', false)}
                {renderTagEditorCard('services-list-h2', 'Catalog Title (H2) & Subtext')}
              </div>
            </div>

            {/* 2. Four Quality Guarantee Badges */}
            <div className="admin-card" style={{ marginBottom: '24px' }}>
              <div className="admin-card-header">
                <h3 className="admin-card-title">2. Four Quality Guarantees &amp; Standards</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                {['services-feat1-h4', 'services-feat2-h4', 'services-feat3-h4', 'services-feat4-h4'].map((id) =>
                  renderTagEditorCard(id, headerTags.find((t) => t.id === id)?.label || 'Guarantee Card')
                )}
              </div>
            </div>

            <button type="button" className="admin-btn-save-main" onClick={handleSaveAll}>
              Save Services Changes to Disk
            </button>
          </section>
        )}

        {/* ===================================================================
            TAB 5: PUBLICATIONS PORTFOLIO
            =================================================================== */}
        {activeTab === 'publications' && (
          <section>
            <div className="admin-page-header">
              <h1 className="admin-page-title">Publications Portfolio</h1>
              <p className="admin-page-subtitle">Manage published papers, clinical case studies, and verification records.</p>
            </div>

            {/* Page Header Editor */}
            <div className="admin-card" style={{ marginBottom: '24px' }}>
              <div className="admin-card-header">
                <h3 className="admin-card-title">Page Headings &amp; Archive Labels</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                {renderTagEditorCard('pubs-hero-eyebrow', 'Hero Eyebrow', false)}
                {renderTagEditorCard('pubs-hero-h1', 'Hero Title (H1) & Subtext')}
                {renderTagEditorCard('pubs-grid-h2', 'Archive Grid Title', false)}
                {renderTagEditorCard('pubs-indexing-h4', 'Indexing Headline', false)}
              </div>
            </div>

            {/* Upload Publication */}
            <div className="admin-card" style={{ marginBottom: '24px' }}>
              <div className="admin-card-header">
                <h3 className="admin-card-title">Add New Publication Record</h3>
              </div>
              <form onSubmit={handlePubUpload}>
                <div className="admin-grid-2">
                  <div className="admin-form-group">
                    <label className="admin-label">Publication Title</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder="e.g. Clinical Outcome Study in Laparoscopic Surgery"
                      value={pubTitle}
                      onChange={(e) => setPubTitle(e.target.value)}
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">Category / Domain</label>
                    <select
                      className="admin-select"
                      value={pubCategory}
                      onChange={(e) => setPubCategory(e.target.value)}
                    >
                      <option value="Original Research">Original Research</option>
                      <option value="Systematic Review">Systematic Review &amp; Meta-Analysis</option>
                      <option value="Case Report">Case Report / Series</option>
                      <option value="Clinical Biostatistics">Clinical Biostatistics</option>
                    </select>
                  </div>
                </div>

                <div className="admin-grid-2">
                  <div className="admin-form-group">
                    <label className="admin-label">Article / DOI URL (Optional)</label>
                    <input
                      type="url"
                      className="admin-input"
                      placeholder="https://doi.org/10.1016/..."
                      value={pubUrl}
                      onChange={(e) => setPubUrl(e.target.value)}
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">Publication Screenshot / Certificate</label>
                    <input
                      ref={pubFileInputRef}
                      type="file"
                      accept="image/*"
                      className="admin-input"
                      onChange={handlePubFileChange}
                    />
                  </div>
                </div>

                <button type="submit" className="admin-btn-save-main">
                  Upload Publication
                </button>
              </form>
            </div>

            {/* List Publications */}
            <div className="admin-card">
              <div className="admin-card-header">
                <h3 className="admin-card-title">All Publications ({publications.length})</h3>
              </div>
              <div className="admin-grid-cards">
                {publications.map((p) => (
                  <div key={p.id} className="admin-item-card">
                    <div style={{ height: '140px', overflow: 'hidden', background: '#f1f5f9', borderRadius: '6px', marginBottom: '10px' }}>
                      <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <h4 style={{ margin: '0 0 4px', fontSize: '0.94rem', color: '#0f172a' }}>{p.title}</h4>
                    <span style={{ fontSize: '0.78rem', color: '#64748b' }}>{p.specialty} • {p.year}</span>
                    <div style={{ marginTop: '10px' }}>
                      <button
                        type="button"
                        className="admin-btn-secondary-action"
                        style={{ color: '#ef4444', padding: '4px 8px' }}
                        onClick={() => deletePublication(p.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ===================================================================
            TAB 6: REVIEWS & TESTIMONIALS
            =================================================================== */}
        {activeTab === 'testimonials' && (
          <section>
            <div className="admin-page-header">
              <h1 className="admin-page-title">Doctor Reviews &amp; Testimonials</h1>
              <p className="admin-page-subtitle">Upload authentic Google Reviews and WhatsApp screenshot conversations.</p>
            </div>

            {/* Page Header Editor */}
            <div className="admin-card" style={{ marginBottom: '24px' }}>
              <div className="admin-card-header">
                <h3 className="admin-card-title">Testimonials Page Headings</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                {renderTagEditorCard('testi-hero-eyebrow', 'Hero Eyebrow', false)}
                {renderTagEditorCard('testi-hero-h1', 'Hero Title (H1) & Subtext')}
                {renderTagEditorCard('testi-screens-h2', 'Google Reviews Section')}
                {renderTagEditorCard('testi-whatsapp-h2', 'WhatsApp Conversations Section')}
              </div>
            </div>

            {/* Upload Review */}
            <div className="admin-card" style={{ marginBottom: '24px' }}>
              <div className="admin-card-header">
                <h3 className="admin-card-title">Upload Review Screenshot</h3>
              </div>
              <form onSubmit={handleTestiUpload}>
                <div className="admin-grid-2">
                  <div className="admin-form-group">
                    <label className="admin-label">Doctor / Author Name</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder="e.g. Dr. K. Ramanathan, MD"
                      value={testiAuthor}
                      onChange={(e) => setTestiAuthor(e.target.value)}
                    />
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-label">Review Screenshot Image</label>
                    <input
                      ref={testiFileInputRef}
                      type="file"
                      accept="image/*"
                      className="admin-input"
                      onChange={handleTestiFileChange}
                    />
                  </div>
                </div>

                <div className="admin-form-group">
                  <label className="admin-label">Feedback Caption / Summary</label>
                  <textarea
                    className="admin-textarea"
                    rows={2}
                    placeholder="Brief description of the consultation and outcome..."
                    value={testiCaption}
                    onChange={(e) => setTestiCaption(e.target.value)}
                  />
                </div>

                <button type="submit" className="admin-btn-save-main">
                  Upload Testimonial
                </button>
              </form>
            </div>

            {/* List Reviews */}
            <div className="admin-card">
              <div className="admin-card-header">
                <h3 className="admin-card-title">All Review Cards ({testimonials.length})</h3>
              </div>
              <div className="admin-grid-cards">
                {testimonials.map((t) => (
                  <div key={t.id} className="admin-item-card">
                    <div style={{ height: '160px', overflow: 'hidden', background: '#f1f5f9', borderRadius: '6px', marginBottom: '10px' }}>
                      <img src={t.image} alt={t.authorName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <h4 style={{ margin: '0 0 4px', fontSize: '0.94rem', color: '#0f172a' }}>{t.authorName}</h4>
                    <p style={{ margin: 0, fontSize: '0.82rem', color: '#64748b' }}>{t.caption}</p>
                    <div style={{ marginTop: '10px' }}>
                      <button
                        type="button"
                        className="admin-btn-secondary-action"
                        style={{ color: '#ef4444', padding: '4px 8px' }}
                        onClick={() => deleteTestimonial(t.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ===================================================================
            TAB 7: BLOG & JOURNAL POSTS
            =================================================================== */}
        {activeTab === 'blog-posts' && (
          <section>
            <div className="admin-page-header">
              <h1 className="admin-page-title">Blog &amp; Journal Posts</h1>
              <p className="admin-page-subtitle">Publish clinical research guides, biostatistics tutorials, and manuscript insights.</p>
            </div>

            {/* Page Header Editor */}
            <div className="admin-card" style={{ marginBottom: '24px' }}>
              <div className="admin-card-header">
                <h3 className="admin-card-title">Journal Page Headings</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                {renderTagEditorCard('journal-hero-eyebrow', 'Hero Eyebrow', false)}
                {renderTagEditorCard('journal-hero-h1', 'Hero Title (H1) & Subtext')}
                {renderTagEditorCard('journal-list-h2', 'Articles Feed Title', false)}
              </div>
            </div>

            {/* Create Post */}
            <div className="admin-card" style={{ marginBottom: '24px' }}>
              <div className="admin-card-header">
                <h3 className="admin-card-title">Create New Journal Post</h3>
              </div>
              <form onSubmit={handlePostUpload}>
                <div className="admin-grid-2">
                  <div className="admin-form-group">
                    <label className="admin-label">Post Title</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder="e.g. Navigating STROBE Guidelines for Observational Studies"
                      value={postTitle}
                      onChange={(e) => setPostTitle(e.target.value)}
                    />
                  </div>
                  <div className="admin-grid-2">
                    <div className="admin-form-group">
                      <label className="admin-label">Category</label>
                      <select
                        className="admin-select"
                        value={postCategory}
                        onChange={(e) => setPostCategory(e.target.value)}
                      >
                        {blogCategories.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="admin-form-group">
                      <label className="admin-label">Read Time</label>
                      <input
                        type="text"
                        className="admin-input"
                        placeholder="e.g. 5 min read"
                        value={postReadTime}
                        onChange={(e) => setPostReadTime(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="admin-form-group">
                  <label className="admin-label">Short Summary / Excerpt</label>
                  <textarea
                    className="admin-textarea"
                    rows={2}
                    placeholder="Brief overview of the article..."
                    value={postExcerpt}
                    onChange={(e) => setPostExcerpt(e.target.value)}
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-label">Full Article Body</label>
                  <textarea
                    className="admin-textarea"
                    rows={5}
                    placeholder="Full article content..."
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                  />
                </div>

                <button type="submit" className="admin-btn-save-main">
                  Publish Post
                </button>
              </form>
            </div>

            {/* List Posts */}
            <div className="admin-card">
              <div className="admin-card-header">
                <h3 className="admin-card-title">All Articles ({articles.length})</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {articles.map((a) => (
                  <div key={a.slug} className="admin-item-card" style={{ padding: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <h4 style={{ margin: '0 0 4px 0', fontSize: '1rem', color: '#0f172a' }}>{a.title}</h4>
                        <span style={{ fontSize: '0.8rem', color: '#64748b' }}>{a.category} • {a.date}</span>
                      </div>
                      <button
                        type="button"
                        className="admin-btn-secondary-action"
                        style={{ color: '#ef4444', padding: '4px 8px' }}
                        onClick={() => deleteArticle(a.slug)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ===================================================================
            TAB 8: CONTACT PAGE CONTENT STUDIO
            =================================================================== */}
        {activeTab === 'contact-content' && (
          <section>
            <div className="admin-page-header">
              <h1 className="admin-page-title">Contact Page Content Studio</h1>
              <p className="admin-page-subtitle">
                Customize contact channels, response times, coordinator notes, working hours, and form headers.
              </p>
            </div>

            {/* 1. Hero & Form Header */}
            <div className="admin-card" style={{ marginBottom: '24px' }}>
              <div className="admin-card-header">
                <h3 className="admin-card-title">1. Contact Hero &amp; Consultation Form Header</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '16px', marginBottom: '16px' }}>
                {renderTagEditorCard('contact-hero-eyebrow', 'Hero Eyebrow', false)}
                {renderTagEditorCard('contact-hero-h1', 'Hero Title (H1) & Subtext')}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '16px' }}>
                {renderTagEditorCard('contact-form-eyebrow', 'Form Eyebrow', false)}
                {renderTagEditorCard('contact-form-h2', 'Form Heading (H2) & Subtext')}
              </div>
            </div>

            {/* 2. Direct Contact Cards */}
            <div className="admin-card" style={{ marginBottom: '24px' }}>
              <div className="admin-card-header">
                <h3 className="admin-card-title">2. Direct Communication Cards &amp; Sub-Notes</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                {renderTagEditorCard('contact-email-h4', 'Email Inquiries Card', true, 'Response Time Note')}
                {renderTagEditorCard('contact-phone-h4', 'WhatsApp / Phone Card', true, 'Direct Line Note')}
                {renderTagEditorCard('contact-hours-h4', 'Working Hours Card', true, 'Schedule Times')}
                {renderTagEditorCard('contact-office-h4', 'Consultation Office Card', false)}
              </div>

              <div style={{ marginTop: '12px' }}>
                {renderTagEditorCard('contact-nda-h6', 'Non-Disclosure Assurance Clause', false)}
              </div>
            </div>

            <button type="button" className="admin-btn-save-main" onClick={handleSaveAll}>
              Save Contact Changes to Disk
            </button>
          </section>
        )}

        {/* ===================================================================
            TAB 9: FAQ PAGE CONTENT STUDIO
            =================================================================== */}
        {activeTab === 'faq-content' && (
          <section>
            <div className="admin-page-header">
              <h1 className="admin-page-title">Frequently Asked Questions Studio</h1>
              <p className="admin-page-subtitle">Manage client question and answer accordions across the website.</p>
            </div>

            {/* Add FAQ */}
            <div className="admin-card" style={{ marginBottom: '24px' }}>
              <div className="admin-card-header">
                <h3 className="admin-card-title">Add New FAQ Item</h3>
              </div>
              <form onSubmit={handleAddFaq}>
                <div className="admin-form-group">
                  <label className="admin-label">Question</label>
                  <input
                    type="text"
                    className="admin-input"
                    placeholder="e.g. How do you protect patient confidentiality in medical case reports?"
                    value={newFaqQuestion}
                    onChange={(e) => setNewFaqQuestion(e.target.value)}
                  />
                </div>
                <div className="admin-form-group">
                  <label className="admin-label">Answer</label>
                  <textarea
                    className="admin-textarea"
                    rows={3}
                    placeholder="Provide a clear, detailed explanation..."
                    value={newFaqAnswer}
                    onChange={(e) => setNewFaqAnswer(e.target.value)}
                  />
                </div>
                <button type="submit" className="admin-btn-save-main">
                  Add FAQ
                </button>
              </form>
            </div>

            {/* List FAQs */}
            <div className="admin-card">
              <div className="admin-card-header">
                <h3 className="admin-card-title">All FAQs ({faqs.length})</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {faqs.map((f) => (
                  <div key={f.id} className="admin-item-card" style={{ padding: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <h4 style={{ margin: '0 0 6px 0', fontSize: '0.98rem', color: '#0f172a' }}>{f.question}</h4>
                      <button
                        type="button"
                        className="admin-btn-secondary-action"
                        style={{ color: '#ef4444', padding: '4px 8px' }}
                        onClick={() => deleteFaq(f.id)}
                      >
                        Delete
                      </button>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.88rem', color: '#475569', lineHeight: 1.5 }}>{f.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ===================================================================
            TAB 10: LEGAL & POLICY TERMS
            =================================================================== */}
        {activeTab === 'legal-content' && (
          <section>
            <div className="admin-page-header">
              <h1 className="admin-page-title">Legal &amp; Policy Pages</h1>
              <p className="admin-page-subtitle">Configure editorial governance, policy terms, and compliance notices.</p>
            </div>

            <div className="admin-card" style={{ marginBottom: '24px' }}>
              <div className="admin-card-header">
                <h3 className="admin-card-title">Policy Governance Headers</h3>
              </div>
              {renderTagEditorCard('legal-overview-h4', 'Legal Overview Header', false)}
            </div>

            <div className="admin-card">
              <div className="admin-card-header">
                <h3 className="admin-card-title">Legal Pages Directory</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                {[
                  { name: 'Privacy Policy', path: '/privacy-policy' },
                  { name: 'Terms & Conditions', path: '/terms-conditions' },
                  { name: 'Refund Policy', path: '/refund-policy' },
                  { name: 'Shipping Policy', path: '/shipping-policy' },
                ].map((l) => (
                  <div key={l.name} style={{ background: '#f8fafc', padding: '16px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <h4 style={{ margin: '0 0 6px', fontSize: '0.96rem' }}>{l.name}</h4>
                    <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Live URL: {l.path}</span>
                    <div style={{ marginTop: '10px' }}>
                      <a href={l.path} target="_blank" rel="noreferrer" className="admin-btn-secondary-action" style={{ display: 'inline-flex', padding: '4px 8px' }}>
                        Preview Live
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ===================================================================
            TAB 11: GLOBAL CTA & FOOTER STUDIO
            =================================================================== */}
        {activeTab === 'global-content' && (
          <section>
            <div className="admin-page-header">
              <h1 className="admin-page-title">Global CTA Banner &amp; Footer Studio</h1>
              <p className="admin-page-subtitle">Configure site-wide call-to-action banners, brand statement, phone, and footer details.</p>
            </div>

            {/* Global CTA Banner */}
            <div className="admin-card" style={{ marginBottom: '24px' }}>
              <div className="admin-card-header">
                <h3 className="admin-card-title">Global CTA Banner</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '16px' }}>
                {renderTagEditorCard('global-cta-eyebrow', 'CTA Eyebrow', false)}
                {renderTagEditorCard('global-cta-h2', 'CTA Main Headline (H2) & Lead Subtext')}
              </div>
            </div>

            {/* Footer Details */}
            <div className="admin-card" style={{ marginBottom: '24px' }}>
              <div className="admin-card-header">
                <h3 className="admin-card-title">Footer Brand Statement &amp; Contacts</h3>
              </div>
              <div style={{ marginBottom: '16px' }}>
                {renderTagEditorCard('footer-brand-blurb', 'Footer Brand Statement', false)}
              </div>

              <div className="admin-grid-2">
                <div className="admin-form-group">
                  <label className="admin-label">Global Phone / WhatsApp</label>
                  <input
                    type="text"
                    className="admin-input"
                    value={visualContent.phone}
                    onChange={(e) => updateVisualContent({ phone: e.target.value })}
                  />
                </div>
                <div className="admin-form-group">
                  <label className="admin-label">Global Support Email</label>
                  <input
                    type="email"
                    className="admin-input"
                    value={visualContent.email}
                    onChange={(e) => updateVisualContent({ email: e.target.value })}
                  />
                </div>
              </div>
            </div>

            <button type="button" className="admin-btn-save-main" onClick={handleSaveAll}>
              Save Global Changes to Disk
            </button>
          </section>
        )}

        {/* ===================================================================
            TAB 12: BLOG CATEGORIES
            =================================================================== */}
        {activeTab === 'blog-categories' && (
          <section>
            <div className="admin-page-header">
              <h1 className="admin-page-title">Blog Categories</h1>
              <p className="admin-page-subtitle">Manage taxonomy topics for the research journal.</p>
            </div>

            <div className="admin-card" style={{ marginBottom: '24px' }}>
              <div className="admin-card-header">
                <h3 className="admin-card-title">Add Category</h3>
              </div>
              <form onSubmit={handleAddCategory} style={{ display: 'flex', gap: '10px' }}>
                <input
                  type="text"
                  className="admin-input"
                  placeholder="e.g. Clinical Trial Protocols"
                  value={newCatName}
                  onChange={(e) => setNewCatName(e.target.value)}
                />
                <button type="submit" className="admin-btn-save-main" style={{ whiteSpace: 'nowrap' }}>
                  Add Category
                </button>
              </form>
            </div>

            <div className="admin-card">
              <div className="admin-card-header">
                <h3 className="admin-card-title">Active Categories ({blogCategories.length})</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {blogCategories.map((c) => (
                  <div key={c} className="admin-category-tag">
                    <span>{c}</span>
                    <button
                      type="button"
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ef4444', padding: 0 }}
                      onClick={() => deleteCategory(c)}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>close</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ===================================================================
            TAB 13: AUTHORS & EDITORS
            =================================================================== */}
        {activeTab === 'authors' && (
          <section>
            <div className="admin-page-header">
              <h1 className="admin-page-title">Authors &amp; Editorial Team</h1>
              <p className="admin-page-subtitle">Manage medical writers and biostatisticians credited on publications.</p>
            </div>

            <div className="admin-card" style={{ marginBottom: '24px' }}>
              <div className="admin-card-header">
                <h3 className="admin-card-title">Add Author / Editor</h3>
              </div>
              <form onSubmit={handleAddAuthor}>
                <div className="admin-grid-2">
                  <div className="admin-form-group">
                    <label className="admin-label">Full Name</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder="e.g. Dr. Priya Venkatesh, MD"
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                    />
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-label">Designation / Role</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder="e.g. Senior Medical Writer"
                      value={authorRole}
                      onChange={(e) => setAuthorRole(e.target.value)}
                    />
                  </div>
                </div>
                <button type="submit" className="admin-btn-save-main">
                  Add Team Member
                </button>
              </form>
            </div>

            <div className="admin-card">
              <div className="admin-card-header">
                <h3 className="admin-card-title">Editorial Team ({authors.length})</h3>
              </div>
              <div className="admin-grid-cards">
                {authors.map((a) => (
                  <div key={a.id} className="admin-item-card" style={{ padding: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <strong style={{ display: 'block', fontSize: '0.96rem', color: '#0f172a' }}>{a.name}</strong>
                        <span style={{ fontSize: '0.82rem', color: '#64748b' }}>{a.role}</span>
                      </div>
                      <button
                        type="button"
                        className="admin-btn-secondary-action"
                        style={{ color: '#ef4444', padding: '4px 8px' }}
                        onClick={() => deleteAuthor(a.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* MODAL: ADD CUSTOM HEADER TAG */}
        {showAddTagModal && (
          <div className="admin-modal-backdrop" onClick={() => setShowAddTagModal(false)}>
            <div className="admin-modal-card" onClick={(e) => e.stopPropagation()}>
              <div className="admin-modal-header">
                <h3 style={{ margin: 0, fontSize: '1.15rem' }}>Add Custom Header / Eyebrow Tag</h3>
                <button
                  type="button"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}
                  onClick={() => setShowAddTagModal(false)}
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <form onSubmit={handleAddCustomTag} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div className="admin-grid-2">
                  <div className="admin-form-group">
                    <label className="admin-label">Page</label>
                    <select
                      className="admin-select"
                      value={newTagPage}
                      onChange={(e) => setNewTagPage(e.target.value as PageKey)}
                    >
                      <option value="home">Home</option>
                      <option value="about">About</option>
                      <option value="services">Services</option>
                      <option value="publications">Publications</option>
                      <option value="testimonials">Testimonials</option>
                      <option value="journal">Journal</option>
                      <option value="contact">Contact</option>
                      <option value="global">Global</option>
                      <option value="legal">Legal</option>
                    </select>
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">Tag Level</label>
                    <select
                      className="admin-select"
                      value={newTagLevel}
                      onChange={(e) => setNewTagLevel(e.target.value as TagLevel)}
                    >
                      <option value="eyebrow">Eyebrow Badge</option>
                      <option value="h1">H1 (Main Headline)</option>
                      <option value="h2">H2 (Section Header)</option>
                      <option value="h3">H3 (Card / Block Title)</option>
                      <option value="h4">H4 (Sub-Heading)</option>
                      <option value="h5">H5 (Detail Header)</option>
                      <option value="h6">H6 (Footnote / Disclaimer)</option>
                    </select>
                  </div>
                </div>

                <div className="admin-form-group">
                  <label className="admin-label">Section Name</label>
                  <input
                    type="text"
                    className="admin-input"
                    placeholder="e.g. Hero Section, Method Grid"
                    value={newTagSection}
                    onChange={(e) => setNewTagSection(e.target.value)}
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-label">Tag Descriptive Label</label>
                  <input
                    type="text"
                    className="admin-input"
                    placeholder="e.g. Working Hours Title (H4)"
                    value={newTagLabel}
                    onChange={(e) => setNewTagLabel(e.target.value)}
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-label">Content Text</label>
                  <input
                    type="text"
                    className="admin-input"
                    placeholder="Heading or text..."
                    value={newTagText}
                    onChange={(e) => setNewTagText(e.target.value)}
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-label">Accompanying Subtitle / Paragraph (Optional)</label>
                  <textarea
                    className="admin-textarea"
                    rows={2}
                    placeholder="Optional subtext..."
                    value={newTagSubtext}
                    onChange={(e) => setNewTagSubtext(e.target.value)}
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
                  <button
                    type="button"
                    className="admin-btn-secondary-action"
                    onClick={() => setShowAddTagModal(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="admin-btn-save-main">
                    Create Tag
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* FLOATING SAVE BAR IF UNSAVED CHANGES */}
        {hasUnsavedChanges && (
          <div className="admin-floating-save-bar">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="material-symbols-outlined" style={{ color: '#fbbf24', fontSize: '20px' }}>
                pending
              </span>
              <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>You have unsaved changes!</span>
            </div>
            <button
              type="button"
              className="admin-btn-save-main"
              onClick={handleSaveAll}
              style={{ padding: '6px 16px', fontSize: '0.88rem' }}
            >
              Save to Disk (Ctrl + S)
            </button>
          </div>
        )}
      </main>
    </div>
  );
};
