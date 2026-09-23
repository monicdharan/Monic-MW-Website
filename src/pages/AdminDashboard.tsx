import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAdminData } from '../context/AdminDataContext';
import { JournalArticleItem } from '../types';
import '../styles/admin.css';

type AdminTab =
  | 'publications'
  | 'testimonials'
  | 'client-reviews'
  | 'services-order'
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
    deleteFaq,
    resetToDefaults,
  } = useAdminData();

  const [activeTab, setActiveTab] = useState<AdminTab>('publications');
  const [successToast, setSuccessToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setSuccessToast(msg);
    setTimeout(() => setSuccessToast(null), 3000);
  };

  // --------------------------------------------------------------------------
  // PUBLICATIONS STATE
  // --------------------------------------------------------------------------
  const [pubTitle, setPubTitle] = useState('');
  const [pubUrl, setPubUrl] = useState('');
  const [pubCategory, setPubCategory] = useState('Research Batch Publications');
  const [pubImage, setPubImage] = useState<string | null>(null);
  const [pubImageName, setPubImageName] = useState('No file chosen');
  const pubFileInputRef = useRef<HTMLInputElement>(null);

  const handlePubFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPubImageName(file.name);
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
    setPubImageName('No file chosen');
    if (pubFileInputRef.current) pubFileInputRef.current.value = '';
    showToast('Publication uploaded successfully!');
  };

  // --------------------------------------------------------------------------
  // TESTIMONIALS STATE
  // --------------------------------------------------------------------------
  const [testiImage, setTestiImage] = useState<string | null>(null);
  const [testiImageName, setTestiImageName] = useState('No file chosen');
  const [testiAuthor, setTestiAuthor] = useState('');
  const [testiCaption, setTestiCaption] = useState('');
  const testiFileInputRef = useRef<HTMLInputElement>(null);

  const handleTestiFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setTestiImageName(file.name);
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
    setTestiImageName('No file chosen');
    setTestiAuthor('');
    setTestiCaption('');
    if (testiFileInputRef.current) testiFileInputRef.current.value = '';
    showToast('Testimonial screenshot uploaded successfully!');
  };

  // --------------------------------------------------------------------------
  // CLIENT TEXT REVIEWS STATE
  // --------------------------------------------------------------------------
  const [docName, setDocName] = useState('');
  const [docQual, setDocQual] = useState('');
  const [docSpecialty, setDocSpecialty] = useState('');
  const [docCity, setDocCity] = useState('');
  const [docQuote, setDocQuote] = useState('');
  const [docService, setDocService] = useState('Systematic Review & Meta-Analysis');

  const handleDocReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!docName || !docQuote) {
      alert('Please fill in Doctor Name and Quote.');
      return;
    }

    addDoctorReview({
      doctorName: docName,
      qualification: docQual || 'MD, MS',
      specialty: docSpecialty || 'Clinical Department',
      cityOrInstitution: docCity || 'India',
      quote: docQuote,
      serviceType: docService,
      verified: true,
      avatarImage: '/assets/images/team_doctor_1.jpg',
    });

    setDocName('');
    setDocQual('');
    setDocSpecialty('');
    setDocCity('');
    setDocQuote('');
    showToast('Doctor text review added!');
  };

  // --------------------------------------------------------------------------
  // BLOG POSTS MODAL / FORM STATE
  // --------------------------------------------------------------------------
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [postTitle, setPostTitle] = useState('');
  const [postSlug, setPostSlug] = useState('');
  const [postCategory, setPostCategory] = useState('Publishing Strategy');
  const [postTopic, setPostTopic] = useState('Academic Publishing');
  const [postReadTime, setPostReadTime] = useState('5 min read');
  const [postSummary, setPostSummary] = useState('');
  const [postContent, setPostContent] = useState('');
  const [postStatus, setPostStatus] = useState<'published' | 'draft'>('published');
  const [postFeatured, setPostFeatured] = useState(false);
  const [postImage, setPostImage] = useState<string | null>(null);
  const [postImageName, setPostImageName] = useState('No file chosen');
  const postFileInputRef = useRef<HTMLInputElement>(null);

  const openNewPostModal = () => {
    setEditingPostId(null);
    setPostTitle('');
    setPostSlug('');
    setPostCategory(blogCategories[0] || 'Publishing Strategy');
    setPostTopic('Academic Publishing');
    setPostReadTime('5 min read');
    setPostSummary('');
    setPostContent('');
    setPostStatus('published');
    setPostFeatured(false);
    setPostImage(null);
    setPostImageName('No file chosen');
    setIsPostModalOpen(true);
  };

  const openEditPostModal = (post: JournalArticleItem) => {
    setEditingPostId(post.id);
    setPostTitle(post.title);
    setPostSlug(post.slug);
    setPostCategory(post.category);
    setPostTopic(post.topic || 'General');
    setPostReadTime(post.readTime || '5 min read');
    setPostSummary(post.summary);
    setPostContent(post.content.join('\n\n'));
    setPostStatus('published');
    setPostFeatured(false);
    setPostImage(null);
    setPostImageName('Keep existing image');
    setIsPostModalOpen(true);
  };

  const handlePostFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPostImageName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPostImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePostSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postTitle.trim()) {
      alert('Please enter a blog post title.');
      return;
    }

    const slug =
      postSlug.trim() ||
      postTitle
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');

    const paragraphs = postContent
      .split('\n\n')
      .map((p) => p.trim())
      .filter(Boolean);

    const formattedDate = new Date().toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

    if (editingPostId) {
      updateArticle(editingPostId, {
        title: postTitle,
        slug,
        category: postCategory,
        topic: postTopic,
        readTime: postReadTime,
        summary: postSummary,
        content: paragraphs.length > 0 ? paragraphs : [postSummary],
      });
      showToast('Blog post updated successfully!');
    } else {
      addArticle({
        title: postTitle,
        slug,
        category: postCategory,
        topic: postTopic,
        readTime: postReadTime,
        date: formattedDate,
        summary: postSummary,
        content: paragraphs.length > 0 ? paragraphs : [postSummary],
        keyTakeaways: [
          'Carefully plan your study methodology and adherence to guidelines.',
          'Format tables and statistical data with standard academic rigor.',
          'Partner with expert medical writers to accelerate peer acceptance.',
        ],
      });
      showToast('New blog post published successfully!');
    }

    setIsPostModalOpen(false);
  };

  // --------------------------------------------------------------------------
  // CATEGORIES & AUTHORS STATE
  // --------------------------------------------------------------------------
  const [newCatInput, setNewCatInput] = useState('');
  const [newAuthorName, setNewAuthorName] = useState('');
  const [newAuthorRole, setNewAuthorRole] = useState('');

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCatInput.trim()) {
      addCategory(newCatInput.trim());
      setNewCatInput('');
      showToast('Category added!');
    }
  };

  const handleAddAuthor = (e: React.FormEvent) => {
    e.preventDefault();
    if (newAuthorName.trim()) {
      addAuthor({
        id: `auth-${Date.now()}`,
        name: newAuthorName.trim(),
        role: newAuthorRole.trim() || 'Medical Writer',
      });
      setNewAuthorName('');
      setNewAuthorRole('');
      showToast('Author added!');
    }
  };

  return (
    <div className="admin-layout">
      {/* Toast Notification */}
      {successToast && (
        <div
          style={{
            position: 'fixed',
            top: '20px',
            right: '24px',
            backgroundColor: '#10b981',
            color: '#ffffff',
            padding: '12px 20px',
            borderRadius: '8px',
            boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontWeight: 600,
            fontSize: '0.9rem',
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>check_circle</span>
          <span>{successToast}</span>
        </div>
      )}

      {/* ===================================================================
          LEFT SIDEBAR (Replicating Screenshots)
          =================================================================== */}
      <aside className="admin-sidebar" aria-label="Admin Navigation">
        <div className="admin-sidebar-header">
          <div className="admin-sidebar-logo">
            <span className="material-symbols-outlined" style={{ color: '#2563eb' }}>space_dashboard</span>
            <span>Admin Panel</span>
          </div>
        </div>

        <nav className="admin-sidebar-nav">
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
            <span>Testimonials</span>
          </button>

          <button
            type="button"
            className={`admin-nav-item ${activeTab === 'client-reviews' ? 'active' : ''}`}
            onClick={() => setActiveTab('client-reviews')}
          >
            <span className="material-symbols-outlined admin-nav-icon">forum</span>
            <span>Client Text Reviews</span>
          </button>

          <button
            type="button"
            className={`admin-nav-item ${activeTab === 'services-order' ? 'active' : ''}`}
            onClick={() => setActiveTab('services-order')}
          >
            <span className="material-symbols-outlined admin-nav-icon">format_list_bulleted</span>
            <span>Services Order</span>
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
            <span>Authors</span>
          </button>

          <button
            type="button"
            className={`admin-nav-item ${activeTab === 'blog-posts' ? 'active' : ''}`}
            onClick={() => setActiveTab('blog-posts')}
          >
            <span className="material-symbols-outlined admin-nav-icon">post_add</span>
            <span>Blog Posts</span>
          </button>

          <div className="admin-nav-divider">VISUAL EDITORS</div>

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
              if (window.confirm('Are you sure you want to return to the public website?')) {
                navigate('/');
              }
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>logout</span>
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* ===================================================================
          MAIN CONTENT AREA
          =================================================================== */}
      <main className="admin-main">
        {/* Top bar with quick navigation & tools */}
        <div className="admin-main-header">
          <div>
            <h1 className="admin-page-title">
              {activeTab === 'publications' && 'Manage Publications'}
              {activeTab === 'testimonials' && 'Manage Testimonials'}
              {activeTab === 'client-reviews' && 'Manage Client Text Reviews'}
              {activeTab === 'services-order' && 'Manage Services Order'}
              {activeTab === 'blog-categories' && 'Manage Blog Categories'}
              {activeTab === 'authors' && 'Manage Authors'}
              {activeTab === 'blog-posts' && 'Manage Blog Posts'}
              {activeTab === 'home-content' && 'Home Page Content Editor'}
              {activeTab === 'faq-content' && 'FAQ Page Content Editor'}
              {activeTab === 'about-content' && 'About Page Content Editor'}
            </h1>
          </div>

          <div className="admin-header-actions">
            <Link to="/" className="admin-btn-secondary" target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>visibility</span>
              <span>View Live Website</span>
            </Link>
            <button
              type="button"
              className="admin-btn-secondary"
              onClick={() => {
                if (window.confirm('Reset all demo data to default? Any added items will be reset.')) {
                  resetToDefaults();
                  showToast('Reset data to defaults!');
                }
              }}
              title="Reset test data to initial defaults"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>refresh</span>
              <span>Reset Data</span>
            </button>
          </div>
        </div>

        {/* -----------------------------------------------------------------
            TAB 1: MANAGE PUBLICATIONS (Screenshot 1)
            ----------------------------------------------------------------- */}
        {activeTab === 'publications' && (
          <div>
            {/* Add New Publication Image Card */}
            <div className="admin-card">
              <div className="admin-card-header">
                <h2 className="admin-card-title">Add New Publication Image</h2>
              </div>

              <form onSubmit={handlePubUpload}>
                <div className="admin-form-group">
                  <label className="admin-label">
                    Title <span className="admin-label-optional">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    className="admin-input"
                    placeholder="e.g., The Lancet 2024"
                    value={pubTitle}
                    onChange={(e) => setPubTitle(e.target.value)}
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-label">
                    URL <span className="admin-label-optional">(Optional)</span>
                  </label>
                  <input
                    type="url"
                    className="admin-input"
                    placeholder="https://example.com/article"
                    value={pubUrl}
                    onChange={(e) => setPubUrl(e.target.value)}
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-label">Category</label>
                  <select
                    className="admin-select"
                    value={pubCategory}
                    onChange={(e) => setPubCategory(e.target.value)}
                  >
                    <option value="Research Batch Publications">Research Batch Publications</option>
                    <option value="Original Research">Original Research</option>
                    <option value="Case Reports">Case Reports</option>
                    <option value="Systematic Reviews">Systematic Reviews</option>
                    <option value="Thesis Conversions">Thesis Conversions</option>
                  </select>
                </div>

                <div className="admin-form-group">
                  <label className="admin-label">
                    Image File (Drag &amp; Drop or Paste anywhere)
                  </label>
                  <div
                    className="admin-file-picker"
                    onClick={() => pubFileInputRef.current?.click()}
                  >
                    <button type="button" className="admin-file-picker-btn">
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>upload_file</span>
                      <span>Choose file</span>
                    </button>
                    <span className="admin-file-picker-text">{pubImageName}</span>
                    <input
                      ref={pubFileInputRef}
                      type="file"
                      accept="image/*"
                      style={{ display: 'none' }}
                      onChange={handlePubFileChange}
                    />
                  </div>

                  {pubImage && (
                    <div className="admin-file-preview">
                      <img src={pubImage} alt="Preview" className="admin-file-preview-img" />
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#0f172a' }}>Image Ready for Upload</div>
                        <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Click "Upload Image" below to save to publications list.</div>
                      </div>
                    </div>
                  )}
                </div>

                <button type="submit" className="admin-btn-primary">
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>upload</span>
                  <span>Upload Image</span>
                </button>
              </form>
            </div>

            {/* Existing Publications List */}
            <div style={{ marginTop: '36px' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>
                Research Batch Publications ({publications.length})
              </h2>

              {publications.length === 0 ? (
                <div className="admin-empty-state">
                  No publication records found. Upload your first publication image above.
                </div>
              ) : (
                <div className="admin-items-grid">
                  {publications.map((pub) => (
                    <div key={pub.id} className="admin-item-card">
                      <div className="admin-item-card-img-wrap">
                        <img src={pub.image} alt={pub.title} className="admin-item-card-img" />
                      </div>
                      <div className="admin-item-card-body">
                        <h4 className="admin-item-card-title">{pub.title}</h4>
                        <div className="admin-item-card-meta">
                          <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>bookmark</span>
                          <span>{pub.type} • {pub.year || '2024'}</span>
                        </div>
                        {pub.articleUrl && (
                          <div style={{ marginTop: '4px' }}>
                            <a
                              href={pub.articleUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ fontSize: '0.8rem', color: '#2563eb', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                            >
                              <span>View Linked Article</span>
                              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>open_in_new</span>
                            </a>
                          </div>
                        )}
                      </div>
                      <div className="admin-item-card-footer">
                        <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{pub.specialty}</span>
                        <button
                          type="button"
                          className="admin-btn-danger"
                          onClick={() => {
                            if (window.confirm(`Delete "${pub.title}"?`)) {
                              deletePublication(pub.id);
                              showToast('Publication deleted.');
                            }
                          }}
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>delete</span>
                          <span>Delete</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* -----------------------------------------------------------------
            TAB 2: MANAGE TESTIMONIALS (Screenshot 2)
            ----------------------------------------------------------------- */}
        {activeTab === 'testimonials' && (
          <div>
            {/* Add New Testimonial Screenshot Card */}
            <div className="admin-card">
              <div className="admin-card-header">
                <h2 className="admin-card-title">Add New Testimonial Screenshot</h2>
              </div>

              <form onSubmit={handleTestiUpload}>
                <div className="admin-form-group">
                  <label className="admin-label">
                    Image File (Drag &amp; Drop or Paste anywhere)
                  </label>
                  <div
                    className="admin-file-picker"
                    onClick={() => testiFileInputRef.current?.click()}
                  >
                    <button type="button" className="admin-file-picker-btn">
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>upload_file</span>
                      <span>Choose file</span>
                    </button>
                    <span className="admin-file-picker-text">{testiImageName}</span>
                    <input
                      ref={testiFileInputRef}
                      type="file"
                      accept="image/*"
                      style={{ display: 'none' }}
                      onChange={handleTestiFileChange}
                    />
                  </div>

                  {testiImage && (
                    <div className="admin-file-preview">
                      <img src={testiImage} alt="Preview" className="admin-file-preview-img" />
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#0f172a' }}>Screenshot Ready</div>
                        <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Click "Upload Image" below to save to testimonials gallery.</div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="admin-form-group">
                  <label className="admin-label">
                    Client / Doctor Name <span className="admin-label-optional">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    className="admin-input"
                    placeholder="e.g., Dr. Avi Shah (Medical Oncologist)"
                    value={testiAuthor}
                    onChange={(e) => setTestiAuthor(e.target.value)}
                  />
                </div>

                <button type="submit" className="admin-btn-primary">
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>upload</span>
                  <span>Upload Image</span>
                </button>
              </form>
            </div>

            {/* Existing Testimonial Screenshots */}
            <div style={{ marginTop: '36px' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>
                Existing Testimonial Screenshots ({testimonials.length})
              </h2>

              {testimonials.length === 0 ? (
                <div className="admin-empty-state">
                  No testimonial images found. Upload one above.
                </div>
              ) : (
                <div className="admin-items-grid">
                  {testimonials.map((testi) => (
                    <div key={testi.id} className="admin-item-card">
                      <div className="admin-item-card-img-wrap" style={{ height: '220px' }}>
                        <img src={testi.image} alt={testi.authorName} className="admin-item-card-img" />
                      </div>
                      <div className="admin-item-card-body">
                        <h4 className="admin-item-card-title">{testi.authorName}</h4>
                        <p style={{ fontSize: '0.8rem', color: '#64748b', margin: '4px 0 0' }}>{testi.caption}</p>
                      </div>
                      <div className="admin-item-card-footer">
                        <span style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'capitalize' }}>
                          Type: {testi.type}
                        </span>
                        <button
                          type="button"
                          className="admin-btn-danger"
                          onClick={() => {
                            if (window.confirm('Delete this testimonial screenshot?')) {
                              deleteTestimonial(testi.id);
                              showToast('Testimonial deleted.');
                            }
                          }}
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>delete</span>
                          <span>Delete</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* -----------------------------------------------------------------
            TAB 3: MANAGE BLOG POSTS (Screenshot 3)
            ----------------------------------------------------------------- */}
        {activeTab === 'blog-posts' && (
          <div>
            <div className="admin-card">
              <div className="admin-card-header">
                <h2 className="admin-card-title">Blog Posts</h2>
                <button
                  type="button"
                  className="admin-btn-primary"
                  onClick={openNewPostModal}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span>
                  <span>New Post</span>
                </button>
              </div>

              {articles.length === 0 ? (
                <div className="admin-empty-state">
                  No blog posts found. Click "+ New Post" to write your first article.
                </div>
              ) : (
                <div className="admin-table-container">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>TITLE</th>
                        <th>STATUS</th>
                        <th>FEATURED</th>
                        <th>DATE</th>
                        <th style={{ textAlign: 'right' }}>ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {articles.map((art) => (
                        <tr key={art.id}>
                          <td>
                            <div className="admin-post-title-cell">
                              <div className="admin-post-thumb" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#e0e7ff', color: '#4338ca', fontWeight: 'bold' }}>
                                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>article</span>
                              </div>
                              <div className="admin-post-info">
                                <h4>{art.title}</h4>
                                <span>/{art.slug}</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="admin-badge-published">published</span>
                          </td>
                          <td>
                            <span style={{ fontSize: '0.85rem', color: '#64748b' }}>No</span>
                          </td>
                          <td>
                            <span style={{ fontSize: '0.85rem', color: '#475569' }}>{art.date || '21/08/2026'}</span>
                          </td>
                          <td>
                            <div className="admin-table-actions" style={{ justifyContent: 'flex-end' }}>
                              <Link
                                to={`/journal/${art.slug}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="admin-action-btn"
                                title="View public article"
                              >
                                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>visibility</span>
                              </Link>
                              <button
                                type="button"
                                className="admin-action-btn"
                                onClick={() => openEditPostModal(art)}
                                title="Edit post"
                              >
                                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>edit</span>
                              </button>
                              <button
                                type="button"
                                className="admin-action-btn delete"
                                onClick={() => {
                                  if (window.confirm(`Delete post "${art.title}"?`)) {
                                    deleteArticle(art.id);
                                    showToast('Post deleted.');
                                  }
                                }}
                                title="Delete post"
                              >
                                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>delete</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* -----------------------------------------------------------------
            TAB 4: CLIENT TEXT REVIEWS
            ----------------------------------------------------------------- */}
        {activeTab === 'client-reviews' && (
          <div>
            <div className="admin-card">
              <div className="admin-card-header">
                <h2 className="admin-card-title">Add Doctor Text Review</h2>
              </div>
              <form onSubmit={handleDocReviewSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                  <div className="admin-form-group">
                    <label className="admin-label">Doctor Name</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder="e.g. Dr. Priya Nair"
                      value={docName}
                      onChange={(e) => setDocName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-label">Qualification</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder="e.g. MS (OBG), DNB"
                      value={docQual}
                      onChange={(e) => setDocQual(e.target.value)}
                    />
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-label">Specialty</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder="e.g. Obstetrics & Gynaecology"
                      value={docSpecialty}
                      onChange={(e) => setDocSpecialty(e.target.value)}
                    />
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-label">City / Institution</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder="e.g. Bengaluru, Karnataka"
                      value={docCity}
                      onChange={(e) => setDocCity(e.target.value)}
                    />
                  </div>
                </div>

                <div className="admin-form-group">
                  <label className="admin-label">Service Rendered</label>
                  <select
                    className="admin-select"
                    value={docService}
                    onChange={(e) => setDocService(e.target.value)}
                  >
                    <option value="Original Research Manuscript">Original Research Manuscript</option>
                    <option value="Systematic Review & Meta-Analysis">Systematic Review & Meta-Analysis</option>
                    <option value="Postgraduate Thesis Writing">Postgraduate Thesis Writing</option>
                    <option value="Medical Statistical Analysis">Medical Statistical Analysis</option>
                    <option value="Thesis to Manuscript Conversion">Thesis to Manuscript Conversion</option>
                  </select>
                </div>

                <div className="admin-form-group">
                  <label className="admin-label">Doctor's Detailed Quote / Feedback</label>
                  <textarea
                    className="admin-textarea"
                    rows={4}
                    placeholder="Enter the doctor's review..."
                    value={docQuote}
                    onChange={(e) => setDocQuote(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="admin-btn-primary">
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span>
                  <span>Add Doctor Review</span>
                </button>
              </form>
            </div>

            <div style={{ marginTop: '36px' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>
                Existing Doctor Testimonials ({doctorReviews.length})
              </h2>
              <div className="admin-items-grid">
                {doctorReviews.map((rev) => (
                  <div key={rev.id} className="admin-item-card" style={{ padding: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                      <img
                        src={rev.avatarImage || '/assets/images/team_doctor_1.jpg'}
                        alt={rev.doctorName}
                        style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
                      />
                      <div>
                        <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 700 }}>{rev.doctorName}</h4>
                        <span style={{ fontSize: '0.78rem', color: '#64748b' }}>{rev.qualification} • {rev.specialty}</span>
                      </div>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: '#334155', fontStyle: 'italic', margin: '0 0 12px', flexGrow: 1 }}>
                      "{rev.quote}"
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '10px' }}>
                      <span style={{ fontSize: '0.75rem', color: '#2563eb', fontWeight: 600 }}>{rev.serviceType}</span>
                      <button
                        type="button"
                        className="admin-btn-danger"
                        onClick={() => {
                          if (window.confirm(`Delete review from ${rev.doctorName}?`)) {
                            deleteDoctorReview(rev.id);
                            showToast('Review removed.');
                          }
                        }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>delete</span>
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* -----------------------------------------------------------------
            TAB 5: BLOG CATEGORIES
            ----------------------------------------------------------------- */}
        {activeTab === 'blog-categories' && (
          <div>
            <div className="admin-card">
              <div className="admin-card-header">
                <h2 className="admin-card-title">Manage Blog Categories</h2>
              </div>
              <form onSubmit={handleAddCategory} style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
                <input
                  type="text"
                  className="admin-input"
                  placeholder="Enter new category name..."
                  value={newCatInput}
                  onChange={(e) => setNewCatInput(e.target.value)}
                  style={{ maxWidth: '400px' }}
                />
                <button type="submit" className="admin-btn-primary">
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span>
                  <span>Add Category</span>
                </button>
              </form>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {blogCategories.map((cat) => (
                  <div
                    key={cat}
                    style={{
                      background: '#f1f5f9',
                      padding: '8px 14px',
                      borderRadius: '8px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.88rem',
                      fontWeight: 500,
                      color: '#1e293b',
                    }}
                  >
                    <span>{cat}</span>
                    <button
                      type="button"
                      onClick={() => deleteCategory(cat)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8', display: 'flex' }}
                      title="Delete category"
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>close</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* -----------------------------------------------------------------
            TAB 6: AUTHORS
            ----------------------------------------------------------------- */}
        {activeTab === 'authors' && (
          <div>
            <div className="admin-card">
              <div className="admin-card-header">
                <h2 className="admin-card-title">Add New Author</h2>
              </div>
              <form onSubmit={handleAddAuthor}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                  <div className="admin-form-group">
                    <label className="admin-label">Author Name</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder="e.g. Dr. Ananya Sharma"
                      value={newAuthorName}
                      onChange={(e) => setNewAuthorName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-label">Designation / Role</label>
                    <input
                      type="text"
                      className="admin-input"
                      placeholder="e.g. Lead Medical Writer"
                      value={newAuthorRole}
                      onChange={(e) => setNewAuthorRole(e.target.value)}
                    />
                  </div>
                </div>
                <button type="submit" className="admin-btn-primary">
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span>
                  <span>Add Author</span>
                </button>
              </form>
            </div>

            <div style={{ marginTop: '28px' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>
                Active Authors ({authors.length})
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
                {authors.map((auth) => (
                  <div key={auth.id} className="admin-item-card" style={{ padding: '16px', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                        {auth.name.charAt(0)}
                      </div>
                      <div>
                        <h4 style={{ margin: 0, fontSize: '0.92rem', fontWeight: 700 }}>{auth.name}</h4>
                        <span style={{ fontSize: '0.78rem', color: '#64748b' }}>{auth.role}</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="admin-action-btn delete"
                      onClick={() => deleteAuthor(auth.id)}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>delete</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* -----------------------------------------------------------------
            TAB 7: SERVICES ORDER
            ----------------------------------------------------------------- */}
        {activeTab === 'services-order' && (
          <div className="admin-card">
            <div className="admin-card-header">
              <h2 className="admin-card-title">Services Display Order</h2>
            </div>
            <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '20px' }}>
              Active featured medical writing services displayed on Homepage and Services directory.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                '01. Original Research Articles',
                '02. Systematic Reviews & Meta-Analyses',
                '03. Thesis & Dissertation Writing',
                '04. Medical Statistical Analysis',
                '05. Thesis to Manuscript Conversion',
                '06. Reviewer Comments & Re-submission Support',
              ].map((s, idx) => (
                <div
                  key={s}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 18px',
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 600 }}>
                    <span className="material-symbols-outlined" style={{ color: '#94a3b8', cursor: 'grab' }}>drag_indicator</span>
                    <span>{s}</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', background: '#dcfce7', color: '#166534', padding: '3px 8px', borderRadius: '4px', fontWeight: 600 }}>
                    {idx < 3 ? 'Homepage Active' : 'Catalog Active'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* -----------------------------------------------------------------
            VISUAL EDITORS (Home, FAQ, About)
            ----------------------------------------------------------------- */}
        {activeTab === 'home-content' && (
          <div className="admin-card">
            <div className="admin-card-header">
              <h2 className="admin-card-title">Home Page Content Editor</h2>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                showToast('Home page content updated!');
              }}
            >
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
                <label className="admin-label">Main Hero Headline (H1)</label>
                <input
                  type="text"
                  className="admin-input"
                  value={visualContent.heroTitle}
                  onChange={(e) => updateVisualContent({ heroTitle: e.target.value })}
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Hero Subtitle / Description</label>
                <textarea
                  className="admin-textarea"
                  rows={3}
                  value={visualContent.heroLead}
                  onChange={(e) => updateVisualContent({ heroLead: e.target.value })}
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="admin-form-group">
                  <label className="admin-label">Contact Phone</label>
                  <input
                    type="text"
                    className="admin-input"
                    value={visualContent.phone}
                    onChange={(e) => updateVisualContent({ phone: e.target.value })}
                  />
                </div>
                <div className="admin-form-group">
                  <label className="admin-label">Contact Email</label>
                  <input
                    type="email"
                    className="admin-input"
                    value={visualContent.email}
                    onChange={(e) => updateVisualContent({ email: e.target.value })}
                  />
                </div>
              </div>
              <button type="submit" className="admin-btn-primary">
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>save</span>
                <span>Save Changes</span>
              </button>
            </form>
          </div>
        )}

        {activeTab === 'faq-content' && (
          <div>
            <div className="admin-card">
              <div className="admin-card-header">
                <h2 className="admin-card-title">Manage Frequently Asked Questions</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {faqs.map((faq) => (
                  <div key={faq.id} style={{ padding: '16px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
                      <h4 style={{ margin: '0 0 6px', fontSize: '0.95rem', fontWeight: 600, color: '#0f172a' }}>{faq.question}</h4>
                      <button
                        type="button"
                        className="admin-action-btn delete"
                        onClick={() => deleteFaq(faq.id)}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>delete</span>
                      </button>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'about-content' && (
          <div className="admin-card">
            <div className="admin-card-header">
              <h2 className="admin-card-title">About Page Content</h2>
            </div>
            <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
              Academic standards, editorial policies, team credentials, and research ethics.
            </p>
            <div style={{ background: '#f1f5f9', padding: '16px', borderRadius: '8px', fontSize: '0.88rem' }}>
              <strong>Commitment to ICMJE &amp; COPE Guidelines:</strong> All manuscripts and thesis documents adhere strictly to international committee guidelines on medical authorship and research integrity.
            </div>
          </div>
        )}
      </main>

      {/* ===================================================================
          MODAL: CREATE / EDIT BLOG POST (With Image Upload)
          =================================================================== */}
      {isPostModalOpen && (
        <div className="admin-modal-overlay">
          <div className="admin-modal-container">
            <div className="admin-modal-header">
              <h3>{editingPostId ? 'Edit Blog Post' : 'Create New Blog Post'}</h3>
              <button
                type="button"
                className="admin-action-btn"
                onClick={() => setIsPostModalOpen(false)}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handlePostSave}>
              <div className="admin-modal-body">
                <div className="admin-form-group">
                  <label className="admin-label">Post Title</label>
                  <input
                    type="text"
                    className="admin-input"
                    placeholder="e.g., How to Choose the Right Journal for Your First Medical Research Paper"
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                    required
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-label">
                    URL Slug <span className="admin-label-optional">(Leave empty for auto-slug)</span>
                  </label>
                  <input
                    type="text"
                    className="admin-input"
                    placeholder="e.g., how-to-choose-right-journal"
                    value={postSlug}
                    onChange={(e) => setPostSlug(e.target.value)}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
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
                      placeholder="e.g., 6 min read"
                      value={postReadTime}
                      onChange={(e) => setPostReadTime(e.target.value)}
                    />
                  </div>
                </div>

                <div className="admin-form-group">
                  <label className="admin-label">Featured Image (Upload)</label>
                  <div
                    className="admin-file-picker"
                    onClick={() => postFileInputRef.current?.click()}
                  >
                    <button type="button" className="admin-file-picker-btn">
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>upload_file</span>
                      <span>Choose file</span>
                    </button>
                    <span className="admin-file-picker-text">{postImageName}</span>
                    <input
                      ref={postFileInputRef}
                      type="file"
                      accept="image/*"
                      style={{ display: 'none' }}
                      onChange={handlePostFileChange}
                    />
                  </div>
                  {postImage && (
                    <div className="admin-file-preview">
                      <img src={postImage} alt="Post preview" className="admin-file-preview-img" />
                      <span style={{ fontSize: '0.85rem', color: '#0f172a', fontWeight: 600 }}>Image Selected</span>
                    </div>
                  )}
                </div>

                <div className="admin-form-group">
                  <label className="admin-label">Excerpt / Summary</label>
                  <textarea
                    className="admin-textarea"
                    rows={2}
                    placeholder="Brief description of this article for catalog cards..."
                    value={postSummary}
                    onChange={(e) => setPostSummary(e.target.value)}
                    required
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-label">Article Body Content (Separate paragraphs with double newlines)</label>
                  <textarea
                    className="admin-textarea"
                    rows={6}
                    placeholder="Enter the complete educational guide or article content here..."
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    required
                  />
                </div>

                <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                  <div className="admin-form-group" style={{ margin: 0 }}>
                    <label className="admin-label">Status</label>
                    <select
                      className="admin-select"
                      value={postStatus}
                      onChange={(e) => setPostStatus(e.target.value as any)}
                    >
                      <option value="published">Published</option>
                      <option value="draft">Draft</option>
                    </select>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '20px' }}>
                    <input
                      type="checkbox"
                      id="post-featured-cb"
                      checked={postFeatured}
                      onChange={(e) => setPostFeatured(e.target.checked)}
                      style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                    />
                    <label htmlFor="post-featured-cb" style={{ fontSize: '0.88rem', fontWeight: 600, color: '#334155', cursor: 'pointer' }}>
                      Mark as Featured Guide
                    </label>
                  </div>
                </div>
              </div>

              <div className="admin-modal-footer">
                <button
                  type="button"
                  className="admin-btn-secondary"
                  onClick={() => setIsPostModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="admin-btn-primary">
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>check</span>
                  <span>{editingPostId ? 'Save Changes' : 'Publish Blog Post'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
