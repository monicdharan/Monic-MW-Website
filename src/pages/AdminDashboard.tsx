import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminData } from '../context/AdminDataContext';
import { TagLevel, PageKey } from '../data/headerTags';
import '../styles/admin.css';

type AdminTab =
  | 'header-tags'
  | 'publications'
  | 'testimonials'
  | 'blog-categories'
  | 'authors'
  | 'blog-posts'
  | 'home-content'
  | 'faq-content'
  | 'about-content';

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

  // --------------------------------------------------------------------------
  // PUBLICATIONS STATE
  // --------------------------------------------------------------------------
  const [pubTitle, setPubTitle] = useState('');
  const [pubUrl, setPubUrl] = useState('');
  const [pubCategory, setPubCategory] = useState('Research Batch Publications');
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
  const postFileInputRef = useRef<HTMLInputElement>(null);

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
    if (postFileInputRef.current) postFileInputRef.current.value = '';
    showToast('Blog article published successfully!');
  };

  // --------------------------------------------------------------------------
  // CATEGORIES & AUTHORS STATE
  // --------------------------------------------------------------------------
  const [newCatName, setNewCatName] = useState('');
  const [newAuthorName, setNewAuthorName] = useState('');
  const [newAuthorRole, setNewAuthorRole] = useState('');

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCatName.trim()) {
      addCategory(newCatName.trim());
      setNewCatName('');
      showToast('Category added!');
    }
  };

  const handleAddAuthor = (e: React.FormEvent) => {
    e.preventDefault();
    if (newAuthorName.trim() && newAuthorRole.trim()) {
      addAuthor({
        id: `auth-${Date.now()}`,
        name: newAuthorName.trim(),
        role: newAuthorRole.trim(),
        avatar: '/assets/images/team_doctor_1.jpg',
      });
      setNewAuthorName('');
      setNewAuthorRole('');
      showToast('Author added!');
    }
  };

  // --------------------------------------------------------------------------
  // BACKUP IMPORT HANDLER
  // --------------------------------------------------------------------------
  const handleImportFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const ok = await importBackup(file);
      if (ok) {
        showToast('Backup restored and saved to disk successfully!');
      } else {
        alert('Failed to restore backup file. Please make sure it is a valid JSON backup.');
      }
      if (fileImportRef.current) fileImportRef.current.value = '';
    }
  };

  return (
    <div className="admin-layout">
      {/* Hidden File Input for Backup Restore */}
      <input
        type="file"
        ref={fileImportRef}
        style={{ display: 'none' }}
        accept=".json"
        onChange={handleImportFile}
      />

      {/* =====================================================================
          SIDEBAR NAVIGATION
          ===================================================================== */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-header">
          <div className="admin-sidebar-logo">
            <span className="material-symbols-outlined" style={{ color: '#2563eb', fontSize: '24px' }}>
              admin_panel_settings
            </span>
            <span>MedZen Admin</span>
          </div>
        </div>

        <nav className="admin-sidebar-nav">
          <div className="admin-nav-divider">CORE CONTENT EDITORS</div>

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

          <button
            type="button"
            className={`admin-nav-item ${activeTab === 'publications' ? 'active' : ''}`}
            onClick={() => setActiveTab('publications')}
          >
            <span className="material-symbols-outlined admin-nav-icon">menu_book</span>
            <span>Publications</span>
          </button>

          <button
            type="button"
            className={`admin-nav-item ${activeTab === 'testimonials' ? 'active' : ''}`}
            onClick={() => setActiveTab('testimonials')}
          >
            <span className="material-symbols-outlined admin-nav-icon">rate_review</span>
            <span>Testimonial Screenshots</span>
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

          <div className="admin-nav-divider">PAGE CONTENT</div>

          <button
            type="button"
            className={`admin-nav-item ${activeTab === 'home-content' ? 'active' : ''}`}
            onClick={() => setActiveTab('home-content')}
          >
            <span className="material-symbols-outlined admin-nav-icon">web</span>
            <span>Home Page Content</span>
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
            className={`admin-nav-item ${activeTab === 'about-content' ? 'active' : ''}`}
            onClick={() => setActiveTab('about-content')}
          >
            <span className="material-symbols-outlined admin-nav-icon">info</span>
            <span>About Page Content</span>
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
            {hasUnsavedChanges ? (
              <span className="admin-save-badge unsaved">
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>warning</span>
                <span>Unsaved Changes Detected</span>
              </span>
            ) : isSaving ? (
              <span className="admin-save-badge saving">
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>sync</span>
                <span>Saving to Disk...</span>
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
            TAB 1: HEADER TAGS & EYEBROWS (H1, H2, H3, H4, H5, H6 & EYEBROWS)
            =================================================================== */}
        {activeTab === 'header-tags' && (
          <section>
            <div className="admin-page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <h1 className="admin-page-title">Website Headers &amp; Eyebrows Editor</h1>
                <p className="admin-page-subtitle">
                  Directly customize all H1, H2, H3, H4, H5, H6 headings and eyebrow badges across all pages of the website.
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
                      {p.charAt(0).toUpperCase() + p.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Search Bar */}
              <div className="admin-search-input-wrap">
                <span className="material-symbols-outlined admin-search-icon">search</span>
                <input
                  type="text"
                  className="admin-search-input"
                  placeholder="Search headings, eyebrows, labels..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* TAGS LIST */}
            <div style={{ marginTop: '16px' }}>
              {filteredHeaderTags.length === 0 ? (
                <div className="admin-empty-state">
                  <span className="material-symbols-outlined" style={{ fontSize: '36px', color: '#94a3b8' }}>search_off</span>
                  <p>No header tags match the selected filters or search query.</p>
                </div>
              ) : (
                filteredHeaderTags.map((item) => (
                  <div key={item.id} className="header-tag-card">
                    <div className="header-tag-meta">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span className={`tag-badge ${item.tagType}`}>
                          {item.tagType === 'eyebrow' ? 'EYEBROW' : item.tagType.toUpperCase()}
                        </span>
                        <span className="header-tag-page-badge">{item.page}</span>
                        <span className="header-tag-location">
                          <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_forward</span>
                          <span>{item.section}</span>
                        </span>
                      </div>

                      <div style={{ display: 'flex', gap: '6px' }}>
                        {item.text !== item.defaultText && (
                          <button
                            type="button"
                            className="admin-btn-secondary-action"
                            style={{ padding: '4px 8px', fontSize: '0.78rem' }}
                            onClick={() => {
                              updateHeaderTag(item.id, { text: item.defaultText, subtext: item.defaultSubtext });
                              showToast(`Reset "${item.label}" to default.`);
                            }}
                          >
                            Reset
                          </button>
                        )}
                        {item.id.startsWith('custom-') && (
                          <button
                            type="button"
                            className="admin-btn-secondary-action"
                            style={{ padding: '4px 8px', fontSize: '0.78rem', color: '#ef4444' }}
                            onClick={() => {
                              if (window.confirm(`Delete custom header "${item.label}"?`)) {
                                deleteHeaderTag(item.id);
                                showToast('Custom header deleted.');
                              }
                            }}
                          >
                            Delete
                          </button>
                        )}
                      </div>
                    </div>

                    <div style={{ marginBottom: '10px' }}>
                      <label className="admin-label" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>{item.label}</span>
                        <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>ID: {item.id}</span>
                      </label>
                      <input
                        type="text"
                        className="admin-input"
                        value={item.text}
                        onChange={(e) => updateHeaderTag(item.id, { text: e.target.value })}
                        placeholder={`Enter ${item.tagType.toUpperCase()} text...`}
                        style={{ fontSize: item.tagType === 'h1' ? '1.08rem' : '0.94rem', fontWeight: item.tagType.startsWith('h') ? 600 : 500 }}
                      />
                    </div>

                    {/* Subtext / Lead text if available */}
                    {(item.subtext !== undefined || item.defaultSubtext !== undefined) && (
                      <div style={{ marginTop: '10px' }}>
                        <label className="admin-label">Accompanying Subtitle / Lead Paragraph</label>
                        <textarea
                          className="admin-textarea"
                          rows={2}
                          value={item.subtext || ''}
                          onChange={(e) => updateHeaderTag(item.id, { subtext: e.target.value })}
                          placeholder="Optional subtitle / lead text..."
                        />
                      </div>
                    )}

                    {/* Live Preview Box */}
                    <div className="header-tag-preview">
                      <div className="header-tag-preview-label">Live Preview Rendering</div>
                      {item.tagType === 'eyebrow' && (
                        <div style={{ display: 'inline-block', padding: '3px 10px', background: '#eff6ff', color: '#1d4ed8', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                          {item.text || '(Empty Eyebrow)'}
                        </div>
                      )}
                      {item.tagType === 'h1' && (
                        <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.2 }}>
                          {item.text || '(Empty H1)'}
                        </div>
                      )}
                      {item.tagType === 'h2' && (
                        <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1e293b', lineHeight: 1.3 }}>
                          {item.text || '(Empty H2)'}
                        </div>
                      )}
                      {item.tagType === 'h3' && (
                        <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#334155' }}>
                          {item.text || '(Empty H3)'}
                        </div>
                      )}
                      {item.tagType === 'h4' && (
                        <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#475569' }}>
                          {item.text || '(Empty H4)'}
                        </div>
                      )}
                      {item.tagType === 'h5' && (
                        <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#64748b' }}>
                          {item.text || '(Empty H5)'}
                        </div>
                      )}
                      {item.tagType === 'h6' && (
                        <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase' }}>
                          {item.text || '(Empty H6)'}
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* ADD CUSTOM TAG MODAL */}
            {showAddTagModal && (
              <div className="admin-modal-overlay" onClick={() => setShowAddTagModal(false)}>
                <div className="admin-modal-container" onClick={(e) => e.stopPropagation()}>
                  <div className="admin-modal-header">
                    <h3>Add Custom Header Tag or Eyebrow</h3>
                    <button
                      type="button"
                      style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                      onClick={() => setShowAddTagModal(false)}
                    >
                      <span className="material-symbols-outlined">close</span>
                    </button>
                  </div>

                  <form onSubmit={handleAddCustomTag}>
                    <div className="admin-modal-body">
                      <div className="admin-grid-2">
                        <div className="admin-form-group">
                          <label className="admin-label">Target Page</label>
                          <select
                            className="admin-select"
                            value={newTagPage}
                            onChange={(e) => setNewTagPage(e.target.value as PageKey)}
                          >
                            <option value="home">Home Page</option>
                            <option value="about">About Page</option>
                            <option value="services">Services Page</option>
                            <option value="publications">Publications Page</option>
                            <option value="testimonials">Testimonials Page</option>
                            <option value="journal">Journal / Blog Page</option>
                            <option value="contact">Contact Page</option>
                            <option value="global">Global Banner / CTA</option>
                            <option value="legal">Legal Policies</option>
                          </select>
                        </div>

                        <div className="admin-form-group">
                          <label className="admin-label">Tag Level / Element</label>
                          <select
                            className="admin-select"
                            value={newTagLevel}
                            onChange={(e) => setNewTagLevel(e.target.value as TagLevel)}
                          >
                            <option value="eyebrow">Eyebrow / Badge</option>
                            <option value="h1">H1 — Main Page Headline</option>
                            <option value="h2">H2 — Section Heading</option>
                            <option value="h3">H3 — Sub-Section / Card Title</option>
                            <option value="h4">H4 — Feature Item Title</option>
                            <option value="h5">H5 — Small Section Title</option>
                            <option value="h6">H6 — Minor Header / Footnote</option>
                          </select>
                        </div>
                      </div>

                      <div className="admin-form-group">
                        <label className="admin-label">Section Name</label>
                        <input
                          type="text"
                          className="admin-input"
                          placeholder="e.g. Hero Section, Guarantee Box, Callout Banner"
                          value={newTagSection}
                          onChange={(e) => setNewTagSection(e.target.value)}
                        />
                      </div>

                      <div className="admin-form-group">
                        <label className="admin-label">Label / Identifier</label>
                        <input
                          type="text"
                          className="admin-input"
                          placeholder="e.g. Hero Headline, Guarantee Box H3, Eyebrow Badge"
                          value={newTagLabel}
                          onChange={(e) => setNewTagLabel(e.target.value)}
                          required
                        />
                      </div>

                      <div className="admin-form-group">
                        <label className="admin-label">Header Content Text</label>
                        <textarea
                          className="admin-textarea"
                          rows={3}
                          placeholder="Enter your header or eyebrow text here..."
                          value={newTagText}
                          onChange={(e) => setNewTagText(e.target.value)}
                          required
                        />
                      </div>

                      <div className="admin-form-group">
                        <label className="admin-label">Optional Subtitle / Accompanying Lead Text</label>
                        <textarea
                          className="admin-textarea"
                          rows={2}
                          placeholder="Optional accompanying subtitle or lead paragraph..."
                          value={newTagSubtext}
                          onChange={(e) => setNewTagSubtext(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="admin-modal-footer">
                      <button
                        type="button"
                        className="admin-btn-secondary-action"
                        onClick={() => setShowAddTagModal(false)}
                      >
                        Cancel
                      </button>
                      <button type="submit" className="admin-btn-save-main">
                        Save Header Tag
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </section>
        )}

        {/* ===================================================================
            TAB 2: PUBLICATIONS
            =================================================================== */}
        {activeTab === 'publications' && (
          <section>
            <div className="admin-page-header">
              <h1 className="admin-page-title">Publications Portfolio</h1>
              <p className="admin-page-subtitle">Upload and manage published research cards and DOI links.</p>
            </div>

            <div className="admin-card">
              <div className="admin-card-header">
                <h3 className="admin-card-title">Add New Publication Card</h3>
              </div>
              <form onSubmit={handlePubUpload}>
                <div className="admin-grid-2">
                  <div className="admin-form-group">
                    <label className="admin-label">Publication Title</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder="e.g. Association Between Early Glycemic Control and Renal Outcomes"
                      value={pubTitle}
                      onChange={(e) => setPubTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-label">Article URL / DOI Link</label>
                    <input
                      type="url"
                      className="admin-input"
                      placeholder="https://doi.org/10.1016/..."
                      value={pubUrl}
                      onChange={(e) => setPubUrl(e.target.value)}
                    />
                  </div>
                </div>

                <div className="admin-grid-2">
                  <div className="admin-form-group">
                    <label className="admin-label">Specialty / Category</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={pubCategory}
                      onChange={(e) => setPubCategory(e.target.value)}
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">Publication Screenshot / Image</label>
                    <input
                      type="file"
                      ref={pubFileInputRef}
                      onChange={handlePubFileChange}
                      accept="image/*"
                      className="admin-input"
                    />
                  </div>
                </div>

                {pubImage && (
                  <div style={{ marginBottom: '16px', maxWidth: '300px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #cbd5e1' }}>
                    <img src={pubImage} alt="Preview" style={{ width: '100%', display: 'block' }} />
                  </div>
                )}

                <button type="submit" className="admin-btn-save-main">
                  Upload Publication
                </button>
              </form>
            </div>

            <div className="admin-card">
              <div className="admin-card-header">
                <h3 className="admin-card-title">Existing Publications ({publications.length})</h3>
              </div>
              <div className="admin-grid-cards">
                {publications.map((p) => (
                  <div key={p.id} className="admin-item-card">
                    <div style={{ height: '140px', background: '#f1f5f9', overflow: 'hidden' }}>
                      <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div className="admin-item-card-body">
                      <h4 style={{ fontSize: '0.92rem', margin: '0 0 6px 0', lineHeight: 1.3 }}>{p.title}</h4>
                      <span style={{ fontSize: '0.78rem', color: '#64748b' }}>{p.specialty || p.type}</span>
                    </div>
                    <div className="admin-item-card-footer">
                      <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>{p.year || '2024'}</span>
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
            TAB 3: TESTIMONIALS (SCREENSHOTS)
            =================================================================== */}
        {activeTab === 'testimonials' && (
          <section>
            <div className="admin-page-header">
              <h1 className="admin-page-title">Testimonial Screenshots</h1>
              <p className="admin-page-subtitle">Manage Google Reviews and WhatsApp conversation screenshots.</p>
            </div>

            <div className="admin-card">
              <div className="admin-card-header">
                <h3 className="admin-card-title">Upload Testimonial Screenshot</h3>
              </div>
              <form onSubmit={handleTestiUpload}>
                <div className="admin-grid-2">
                  <div className="admin-form-group">
                    <label className="admin-label">Doctor / Client Name</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder="e.g. Dr. Ramesh Patel (MD General Medicine)"
                      value={testiAuthor}
                      onChange={(e) => setTestiAuthor(e.target.value)}
                    />
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-label">Screenshot File</label>
                    <input
                      type="file"
                      ref={testiFileInputRef}
                      onChange={handleTestiFileChange}
                      accept="image/*"
                      className="admin-input"
                      required
                    />
                  </div>
                </div>

                <div className="admin-form-group">
                  <label className="admin-label">Review Caption / Summary</label>
                  <textarea
                    className="admin-textarea"
                    rows={2}
                    placeholder="Brief description of the feedback..."
                    value={testiCaption}
                    onChange={(e) => setTestiCaption(e.target.value)}
                  />
                </div>

                {testiImage && (
                  <div style={{ marginBottom: '16px', maxWidth: '300px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #cbd5e1' }}>
                    <img src={testiImage} alt="Preview" style={{ width: '100%', display: 'block' }} />
                  </div>
                )}

                <button type="submit" className="admin-btn-save-main">
                  Upload Screenshot
                </button>
              </form>
            </div>

            <div className="admin-card">
              <div className="admin-card-header">
                <h3 className="admin-card-title">Existing Screenshots ({testimonials.length})</h3>
              </div>
              <div className="admin-grid-cards">
                {testimonials.map((t) => (
                  <div key={t.id} className="admin-item-card">
                    <div style={{ height: '160px', background: '#f8fafc', overflow: 'hidden' }}>
                      <img src={t.image} alt={t.authorName} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <div className="admin-item-card-body">
                      <h4 style={{ fontSize: '0.92rem', margin: '0 0 4px 0' }}>{t.authorName}</h4>
                      <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0 }}>{t.caption}</p>
                    </div>
                    <div className="admin-item-card-footer">
                      <span style={{ fontSize: '0.78rem', color: '#059669', fontWeight: 600 }}>Verified Review</span>
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
            TAB 4: BLOG & JOURNAL POSTS
            =================================================================== */}
        {activeTab === 'blog-posts' && (
          <section>
            <div className="admin-page-header">
              <h1 className="admin-page-title">Blog &amp; Journal Articles</h1>
              <p className="admin-page-subtitle">Publish and edit medical writing guides and research articles.</p>
            </div>

            <div className="admin-card">
              <div className="admin-card-header">
                <h3 className="admin-card-title">Publish New Journal Article</h3>
              </div>
              <form onSubmit={handlePostUpload}>
                <div className="admin-grid-2">
                  <div className="admin-form-group">
                    <label className="admin-label">Article Title</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder="e.g. How to Structure a High-Impact Medical Systematic Review"
                      value={postTitle}
                      onChange={(e) => setPostTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-label">Category</label>
                    <select
                      className="admin-select"
                      value={postCategory}
                      onChange={(e) => setPostCategory(e.target.value)}
                    >
                      {blogCategories.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="admin-form-group">
                  <label className="admin-label">Estimated Read Time</label>
                  <input
                    type="text"
                    className="admin-input"
                    value={postReadTime}
                    onChange={(e) => setPostReadTime(e.target.value)}
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-label">Excerpt / Short Summary</label>
                  <textarea
                    className="admin-textarea"
                    rows={2}
                    placeholder="Brief 2-3 sentence synopsis for search and card feeds..."
                    value={postExcerpt}
                    onChange={(e) => setPostExcerpt(e.target.value)}
                    required
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-label">Article Body Content (Markdown supported)</label>
                  <textarea
                    className="admin-textarea"
                    rows={6}
                    placeholder="Write or paste your article markdown / text..."
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                  />
                </div>

                <button type="submit" className="admin-btn-save-main">
                  Publish Article
                </button>
              </form>
            </div>

            <div className="admin-card">
              <div className="admin-card-header">
                <h3 className="admin-card-title">Existing Articles ({articles.length})</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {articles.map((art) => (
                  <div key={art.id} className="admin-item-card" style={{ padding: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#2563eb', textTransform: 'uppercase' }}>{art.category}</span>
                        <h4 style={{ margin: '4px 0 6px 0', fontSize: '1.05rem' }}>{art.title}</h4>
                        <span style={{ fontSize: '0.82rem', color: '#64748b' }}>{art.date} • {art.readTime}</span>
                      </div>
                      <button
                        type="button"
                        className="admin-btn-secondary-action"
                        style={{ color: '#ef4444', padding: '4px 8px' }}
                        onClick={() => deleteArticle(art.id)}
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
            TAB 6: BLOG CATEGORIES
            =================================================================== */}
        {activeTab === 'blog-categories' && (
          <section>
            <div className="admin-page-header">
              <h1 className="admin-page-title">Blog &amp; Article Categories</h1>
              <p className="admin-page-subtitle">Manage topic taxonomy for journal publications.</p>
            </div>

            <div className="admin-card">
              <div className="admin-card-header">
                <h3 className="admin-card-title">Add New Category</h3>
              </div>
              <form onSubmit={handleAddCategory} style={{ display: 'flex', gap: '10px' }}>
                <input
                  type="text"
                  className="admin-input"
                  placeholder="e.g. Meta-Analysis Methodologies"
                  value={newCatName}
                  onChange={(e) => setNewCatName(e.target.value)}
                  style={{ flexGrow: 1 }}
                  required
                />
                <button type="submit" className="admin-btn-save-main">
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
                  <div
                    key={c}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '6px 14px',
                      background: '#f1f5f9',
                      borderRadius: '20px',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: '#1e293b',
                    }}
                  >
                    <span>{c}</span>
                    <button
                      type="button"
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8', padding: 0 }}
                      onClick={() => deleteCategory(c)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ===================================================================
            TAB 7: AUTHORS & EDITORS
            =================================================================== */}
        {activeTab === 'authors' && (
          <section>
            <div className="admin-page-header">
              <h1 className="admin-page-title">Editorial Team &amp; Authors</h1>
              <p className="admin-page-subtitle">Manage author profiles for journal articles.</p>
            </div>

            <div className="admin-card">
              <div className="admin-card-header">
                <h3 className="admin-card-title">Add New Author Profile</h3>
              </div>
              <form onSubmit={handleAddAuthor}>
                <div className="admin-grid-2">
                  <div className="admin-form-group">
                    <label className="admin-label">Author Full Name</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder="e.g. Dr. Priya Venkatesh"
                      value={newAuthorName}
                      onChange={(e) => setNewAuthorName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-label">Editorial Role / Specialty</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder="e.g. Senior Medical Writer &amp; Methodologist"
                      value={newAuthorRole}
                      onChange={(e) => setNewAuthorRole(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <button type="submit" className="admin-btn-save-main">
                  Add Author
                </button>
              </form>
            </div>

            <div className="admin-card">
              <div className="admin-card-header">
                <h3 className="admin-card-title">Existing Authors ({authors.length})</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {authors.map((a) => (
                  <div key={a.id} className="admin-item-card" style={{ padding: '14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <h4 style={{ margin: '0 0 2px 0', fontSize: '0.98rem' }}>{a.name}</h4>
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

        {/* ===================================================================
            TAB 8: HOME PAGE CONTENT
            =================================================================== */}
        {activeTab === 'home-content' && (
          <section>
            <div className="admin-page-header">
              <h1 className="admin-page-title">Home Page Content</h1>
              <p className="admin-page-subtitle">Configure hero headlines, contact telephone, and support email.</p>
            </div>

            <div className="admin-card">
              <div className="admin-form-group">
                <label className="admin-label">Hero Eyebrow Badge</label>
                <input
                  type="text"
                  className="admin-input"
                  value={visualContent.heroBadge}
                  onChange={(e) => updateVisualContent({ heroBadge: e.target.value })}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-label">Hero Title (H1)</label>
                <input
                  type="text"
                  className="admin-input"
                  value={visualContent.heroTitle}
                  onChange={(e) => updateVisualContent({ heroTitle: e.target.value })}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-label">Hero Lead Paragraph</label>
                <textarea
                  className="admin-textarea"
                  rows={3}
                  value={visualContent.heroLead}
                  onChange={(e) => updateVisualContent({ heroLead: e.target.value })}
                />
              </div>

              <div className="admin-grid-2">
                <div className="admin-form-group">
                  <label className="admin-label">Contact Phone / WhatsApp</label>
                  <input
                    type="text"
                    className="admin-input"
                    value={visualContent.phone}
                    onChange={(e) => updateVisualContent({ phone: e.target.value })}
                  />
                </div>
                <div className="admin-form-group">
                  <label className="admin-label">Support Email</label>
                  <input
                    type="email"
                    className="admin-input"
                    value={visualContent.email}
                    onChange={(e) => updateVisualContent({ email: e.target.value })}
                  />
                </div>
              </div>

              <button type="button" className="admin-btn-save-main" onClick={handleSaveAll}>
                Save Changes to Disk
              </button>
            </div>
          </section>
        )}

        {/* ===================================================================
            TAB 9: FAQ CONTENT
            =================================================================== */}
        {activeTab === 'faq-content' && (
          <section>
            <div className="admin-page-header">
              <h1 className="admin-page-title">Frequently Asked Questions</h1>
              <p className="admin-page-subtitle">Manage client question and answer accordions.</p>
            </div>

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
            TAB 10: ABOUT PAGE CONTENT
            =================================================================== */}
        {activeTab === 'about-content' && (
          <section>
            <div className="admin-page-header">
              <h1 className="admin-page-title">About Page Content</h1>
              <p className="admin-page-subtitle">Edit company mission, purpose statement, and academic principles.</p>
            </div>

            <div className="admin-card">
              <p style={{ color: '#475569', fontSize: '0.92rem', marginBottom: '16px' }}>
                Use the <strong>Headers &amp; Eyebrows</strong> section to customize all H1, H2, H3, H4, H5, H6 headings and badges for the About page.
              </p>
              <button
                type="button"
                className="admin-btn-save-main"
                onClick={() => {
                  setPageFilter('about');
                  setActiveTab('header-tags');
                }}
              >
                Go to About Page Headers Editor
              </button>
            </div>
          </section>
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
