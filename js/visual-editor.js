/**
 * MedZen Writes - Canva & Figma Style Visual Studio & Live Editor Engine
 * Handles selection, typography, section alignment/deletion, photo dashboard, button styling, and clean export.
 */

(function () {
  'use strict';

  // State
  let currentIframe = null;
  let currentDoc = null;
  let selectedElement = null;
  let selectedSection = null;
  let selectedCard = null;
  let historyStack = [];
  let historyIndex = -1;
  let isEditMode = true;

  // Media Library Assets
  const websitePhotos = [
    { name: 'Doctor Consultation (Hero)', path: 'assets/images/hero_doctor.jpg' },
    { name: 'Clean Research Desk & Stethoscope', path: 'assets/images/stethoscope-research-bg.jpg' },
    { name: 'Doctor in Lab with Analytics', path: 'assets/images/doctor-stethoscope-research.jpg' },
    { name: 'Biostatistician Consultation', path: 'assets/images/doctor-biostatistician-consultation.jpg' },
    { name: 'Resident Mentorship', path: 'assets/images/doctor-resident-mentorship.jpg' },
    { name: 'Doctors Team Celebrating', path: 'assets/images/doctors-group-celebrating.jpg' },
    { name: 'Multidisciplinary Medical Team', path: 'assets/images/doctors-multidisciplinary-team.jpg' },
    { name: 'Female Specialist Doctor', path: 'assets/images/female-doctor-specialist.jpg' },
    { name: 'Medical Editorial Review Desk', path: 'assets/images/medical-editorial-review.jpg' },
    { name: 'Stethoscope Desk Closeup', path: 'assets/images/stethoscope-desk-closeup.jpg' },
    { name: 'Editorial Board Lead 1', path: 'assets/images/team_doctor_1.jpg' },
    { name: 'Editorial Board Lead 2', path: 'assets/images/team_doctor_2.jpg' },
    { name: 'Editorial Board Lead 3', path: 'assets/images/team_doctor_3.jpg' },
    { name: 'Editorial Board Lead 4', path: 'assets/images/team_doctor_4.jpg' },
    { name: 'MedZen Brand Logo', path: 'assets/images/medzen-writes-logo.png' }
  ];

  // DOM references in parent Studio
  const els = {
    pageSelect: document.getElementById('pageSelect'),
    previewFrame: document.getElementById('previewFrame'),
    frameContainer: document.getElementById('frameContainer'),
    
    // Viewports
    btnDesktop: document.getElementById('btnDesktop'),
    btnLaptop: document.getElementById('btnLaptop'),
    btnTablet: document.getElementById('btnTablet'),
    btnMobile: document.getElementById('btnMobile'),

    // History & Actions
    btnUndo: document.getElementById('btnUndo'),
    btnRedo: document.getElementById('btnRedo'),
    btnPreviewToggle: document.getElementById('btnPreviewToggle'),
    btnExport: document.getElementById('btnExport'),
    btnSaveLocal: document.getElementById('btnSaveLocal'),
    btnLiveView: document.getElementById('btnLiveView'),

    // Dock Tabs
    dockButtons: document.querySelectorAll('.dock-btn'),
    leftPanel: document.getElementById('leftPanel'),
    panelTitle: document.getElementById('panelTitle'),
    panelContent: document.getElementById('panelContent'),

    // Right Inspector
    inspectorEmpty: document.getElementById('inspectorEmpty'),
    inspectorControls: document.getElementById('inspectorControls'),
    selectedTagBadge: document.getElementById('selectedTagBadge'),

    // Typography Controls
    fontAlignBtns: document.querySelectorAll('[data-font-align]'),
    fontSizeSlider: document.getElementById('fontSizeSlider'),
    fontSizeInput: document.getElementById('fontSizeInput'),
    fontColorPicker: document.getElementById('fontColorPicker'),
    fontColorHex: document.getElementById('fontColorHex'),
    fontWeightSelect: document.getElementById('fontWeightSelect'),
    lineHeightSlider: document.getElementById('lineHeightSlider'),
    lineHeightVal: document.getElementById('lineHeightVal'),

    // Section Alignment Controls (Figma Style)
    sectionInspector: document.getElementById('sectionInspector'),
    sectionNameLabel: document.getElementById('sectionNameLabel'),
    sectionAlignBtns: document.querySelectorAll('[data-section-align]'),
    sectionJustifyBtns: document.querySelectorAll('[data-section-justify]'),
    sectionPadTopSlider: document.getElementById('sectionPadTopSlider'),
    sectionPadTopInput: document.getElementById('sectionPadTopInput'),
    sectionPadBotSlider: document.getElementById('sectionPadBotSlider'),
    sectionPadBotInput: document.getElementById('sectionPadBotInput'),
    sectionBgColorPicker: document.getElementById('sectionBgColorPicker'),
    sectionBgColorHex: document.getElementById('sectionBgColorHex'),
    btnDeleteSection: document.getElementById('btnDeleteSection'),
    btnSectionMoveUp: document.getElementById('btnSectionMoveUp'),
    btnSectionMoveDown: document.getElementById('btnSectionMoveDown'),
    // Section Background Photo Controls
    btnUploadSectionBg: document.getElementById('btnUploadSectionBg'),
    btnGallerySectionBg: document.getElementById('btnGallerySectionBg'),
    sectionBgFileInput: document.getElementById('sectionBgFileInput'),
    btnRemoveSectionBg: document.getElementById('btnRemoveSectionBg'),

    // Button & Pill Styling Controls
    btnInspector: document.getElementById('btnInspector'),
    btnTextVal: document.getElementById('btnTextVal'),
    btnBgColorPicker: document.getElementById('btnBgColorPicker'),
    btnBgColorHex: document.getElementById('btnBgColorHex'),
    btnTextColorPicker: document.getElementById('btnTextColorPicker'),
    btnTextColorHex: document.getElementById('btnTextColorHex'),
    btnBorderColorPicker: document.getElementById('btnBorderColorPicker'),
    btnBorderColorHex: document.getElementById('btnBorderColorHex'),
    btnSizePresets: document.querySelectorAll('[data-btn-size]'),
    btnPadXSlider: document.getElementById('btnPadXSlider'),
    btnPadXInput: document.getElementById('btnPadXInput'),
    btnPadYSlider: document.getElementById('btnPadYSlider'),
    btnPadYInput: document.getElementById('btnPadYInput'),
    btnRadiusSlider: document.getElementById('btnRadiusSlider'),
    btnRadiusInput: document.getElementById('btnRadiusInput'),
    btnMakeFullPill: document.getElementById('btnMakeFullPill'),

    // Card Background Photo Controls (Hero Style)
    cardBgInspector: document.getElementById('cardBgInspector'),
    cardNameLabel: document.getElementById('cardNameLabel'),
    cardBgPreviewThumb: document.getElementById('cardBgPreviewThumb'),
    cardBgEmptyHint: document.getElementById('cardBgEmptyHint'),
    btnUploadCardBg: document.getElementById('btnUploadCardBg'),
    cardBgFileInput: document.getElementById('cardBgFileInput'),
    btnGalleryCardBg: document.getElementById('btnGalleryCardBg'),
    btnOverlayLight: document.getElementById('btnOverlayLight'),
    btnOverlayDark: document.getElementById('btnOverlayDark'),
    cardOverlayOpacitySlider: document.getElementById('cardOverlayOpacitySlider'),
    cardOverlayOpacityVal: document.getElementById('cardOverlayOpacityVal'),
    btnRemoveCardBg: document.getElementById('btnRemoveCardBg'),
    btnCardModeDoc: document.getElementById('btnCardModeDoc'),
    btnCardModeOverlay: document.getElementById('btnCardModeOverlay'),
    cardRedirectUrlInput: document.getElementById('cardRedirectUrlInput'),
    btnSaveCardLink: document.getElementById('btnSaveCardLink'),
    btnTestCardLink: document.getElementById('btnTestCardLink'),
    cardImgFitBtns: document.querySelectorAll('[data-img-fit]'),
    cardWidthSlider: document.getElementById('cardWidthSlider'),
    cardWidthInput: document.getElementById('cardWidthInput'),
    cardWidthVal: document.getElementById('cardWidthVal'),
    cardHeightSlider: document.getElementById('cardHeightSlider'),
    cardHeightInput: document.getElementById('cardHeightInput'),
    cardHeightVal: document.getElementById('cardHeightVal'),
    cardSizeBtns: document.querySelectorAll('[data-card-size]'),
    cardRatioBtns: document.querySelectorAll('[data-card-ratio]'),
    btnApplySizeAllCards: document.getElementById('btnApplySizeAllCards'),
    cardRadiusSlider: document.getElementById('cardRadiusSlider'),
    cardRadiusInput: document.getElementById('cardRadiusInput'),
    cardRadiusVal: document.getElementById('cardRadiusVal'),

    // Image & Media Controls
    imgInspector: document.getElementById('imgInspector'),
    imgPreviewThumb: document.getElementById('imgPreviewThumb'),
    imgWidthSlider: document.getElementById('imgWidthSlider'),
    imgWidthInput: document.getElementById('imgWidthInput'),
    imgRadiusSlider: document.getElementById('imgRadiusSlider'),
    imgRadiusInput: document.getElementById('imgRadiusInput'),
    imgObjectFitSelect: document.getElementById('imgObjectFitSelect'),
    btnReplacePhoto: document.getElementById('btnReplacePhoto'),

    toast: document.getElementById('studioToast')
  };

  /** Initialize Studio */
  function init() {
    setupTopBar();
    setupDockTabs();
    setupInspectorEvents();
    setupFrameLoader();
    startServerPolling();

    // Check URL parameters for page
    const params = new URLSearchParams(window.location.search);
    const initialPage = params.get('page') || 'index.html';
    if (els.pageSelect) {
      els.pageSelect.value = initialPage;
    }
    loadPage(initialPage);
  }

  /** Toast Notification */
  function showToast(message, icon = 'check_circle') {
    if (!els.toast) return;
    els.toast.innerHTML = `<span class="material-symbols-outlined" style="color: var(--studio-accent-teal);">${icon}</span><span>${message}</span>`;
    els.toast.classList.add('show');
    clearTimeout(els.toast._timeout);
    els.toast._timeout = setTimeout(() => {
      els.toast.classList.remove('show');
    }, 2800);
  }

  /** Setup Top Bar Controls */
  function setupTopBar() {
    // Page switcher — save changes on current page before loading new page
    els.pageSelect.addEventListener('change', async () => {
      if (currentDoc) {
        await saveToStorage(true);
      }
      loadPage(els.pageSelect.value);
    });

    // Server Save Status Badge click -> open modal or retry
    const saveBadge = document.getElementById('studioSaveStatus');
    if (saveBadge) {
      saveBadge.style.cursor = 'pointer';
      saveBadge.addEventListener('click', () => {
        if (!isServerOnline) {
          showServerModal();
        } else {
          showToast('🟢 Server is connected! Direct disk save active.', 'check_circle');
        }
      });
    }

    // Modal action buttons
    const btnDismiss = document.getElementById('btnDismissServerModal');
    if (btnDismiss) {
      btnDismiss.addEventListener('click', hideServerModal);
    }
    const btnRetry = document.getElementById('btnRetryServerConn');
    if (btnRetry) {
      btnRetry.addEventListener('click', () => checkServerStatus(true));
    }

    // Viewport switcher
    const viewports = [
      { btn: els.btnDesktop, cls: '' },
      { btn: els.btnLaptop, cls: 'viewport-laptop' },
      { btn: els.btnTablet, cls: 'viewport-tablet' },
      { btn: els.btnMobile, cls: 'viewport-mobile' }
    ];

    viewports.forEach(vp => {
      if (!vp.btn) return;
      vp.btn.addEventListener('click', () => {
        viewports.forEach(v => v.btn.classList.remove('active'));
        vp.btn.classList.add('active');
        els.frameContainer.className = 'canvas-frame-container ' + vp.cls;
      });
    });

    // Undo / Redo
    els.btnUndo.addEventListener('click', undo);
    els.btnRedo.addEventListener('click', redo);

    // Preview Mode Toggle
    els.btnPreviewToggle.addEventListener('click', () => {
      isEditMode = !isEditMode;
      if (isEditMode) {
        els.btnPreviewToggle.classList.remove('studio-btn-primary');
        els.btnPreviewToggle.classList.add('studio-btn-outline');
        els.btnPreviewToggle.innerHTML = '<span class="material-symbols-outlined">visibility</span><span>Preview</span>';
        if (currentDoc) currentDoc.body.classList.remove('studio-preview-mode');
        showToast('Edit mode enabled. Click elements to customize.');
      } else {
        els.btnPreviewToggle.classList.remove('studio-btn-outline');
        els.btnPreviewToggle.classList.add('studio-btn-primary');
        els.btnPreviewToggle.innerHTML = '<span class="material-symbols-outlined">edit</span><span>Edit Mode</span>';
        deselectElement();
        if (currentDoc) currentDoc.body.classList.add('studio-preview-mode');
        showToast('Preview mode enabled. Links are clickable.');
      }
    });

    // Export Clean HTML
    els.btnExport.addEventListener('click', exportCleanHtml);

    // Save to Disk & Website
    els.btnSaveLocal.addEventListener('click', () => saveToStorage(false));

    // View Live Site button: saves fresh changes to disk first, then opens live tab
    if (els.btnLiveView) {
      els.btnLiveView.addEventListener('click', async (e) => {
        e.preventDefault();
        setSaveBadge('saving');
        await saveToStorage(false);
        const pageUrl = els.pageSelect ? els.pageSelect.value : 'index.html';
        const targetUrl = (window.location.protocol === 'file:')
          ? 'http://localhost:8000/' + pageUrl + '?_v=' + Date.now()
          : pageUrl + '?_v=' + Date.now();
        window.open(targetUrl, '_blank');
      });
    }
  }

  /** Setup Left Dock Tabs (Canva Style) */
  function setupDockTabs() {
    els.dockButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        if (btn.classList.contains('active') && !els.leftPanel.classList.contains('collapsed')) {
          // Collapse
          els.leftPanel.classList.add('collapsed');
          btn.classList.remove('active');
          return;
        }

        els.dockButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        els.leftPanel.classList.remove('collapsed');

        renderLeftPanelTab(tab);
      });
    });

    // Check URL search parameters for initial tab (e.g. ?tab=publications)
    const urlParams = new URLSearchParams(window.location.search);
    const initialTab = urlParams.get('tab');
    if (initialTab) {
      const targetBtn = Array.from(els.dockButtons).find(b => b.dataset.tab === initialTab);
      if (targetBtn) {
        els.dockButtons.forEach(b => b.classList.remove('active'));
        targetBtn.classList.add('active');
        els.leftPanel.classList.remove('collapsed');
        renderLeftPanelTab(initialTab);
        return;
      }
    }

    // Default open sections tab
    renderLeftPanelTab('sections');
  }

  /** Render Left Panel Content */
  function renderLeftPanelTab(tab) {
    if (tab === 'sections') {
      els.panelTitle.innerHTML = '<span class="material-symbols-outlined">view_agenda</span> Page Sections';
      renderSectionsList();
    } else if (tab === 'publications') {
      els.panelTitle.innerHTML = '<span class="material-symbols-outlined">menu_book</span> Publication Uploads';
      renderPublicationsDashboard();
    } else if (tab === 'testimonials' || tab === 'whatsapp-testimonials') {
      els.panelTitle.innerHTML = '<span class="material-symbols-outlined">chat</span> WhatsApp Testimonials';
      renderTestimonialsDashboard();
    } else if (tab === 'card-photos') {
      els.panelTitle.innerHTML = '<span class="material-symbols-outlined">wallpaper</span> Card Background Photos';
      renderCardPhotosDashboard();
    } else if (tab === 'photos') {
      els.panelTitle.innerHTML = '<span class="material-symbols-outlined">image</span> Photo Dashboard';
      renderPhotoDashboard();
    } else if (tab === 'elements') {
      els.panelTitle.innerHTML = '<span class="material-symbols-outlined">add_box</span> Add Elements';
      renderAddElementsPanel();
    }
  }

  /** 1. Sections List & Deletion Manager */
  function renderSectionsList() {
    if (!currentDoc) {
      els.panelContent.innerHTML = '<p style="color: var(--studio-text-muted); font-size: 0.8rem;">Loading page sections...</p>';
      return;
    }

    const sections = Array.from(currentDoc.querySelectorAll('section, header, footer'));
    if (sections.length === 0) {
      els.panelContent.innerHTML = '<p style="color: var(--studio-text-muted); font-size: 0.8rem;">No sections found on this page.</p>';
      return;
    }

    let html = `
      <div style="margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center;">
        <span style="font-size: 0.75rem; color: var(--studio-text-muted); font-weight: 700;">${sections.length} SECTIONS DETECTED</span>
        <button id="btnAddBlankSection" class="studio-btn studio-btn-outline" style="padding: 4px 8px; font-size: 0.72rem;">
          <span class="material-symbols-outlined" style="font-size: 15px;">add</span> Add Section
        </button>
      </div>
      <div id="sectionsContainer">
    `;

    sections.forEach((sec, idx) => {
      const heading = sec.querySelector('h1, h2, h3, h4');
      const title = heading ? heading.innerText.trim().slice(0, 32) : (sec.id || sec.className.split(' ')[0] || `Section ${idx + 1}`);
      const tag = sec.tagName.toLowerCase();
      const isSelected = selectedSection === sec;

      html += `
        <div class="section-item ${isSelected ? 'active' : ''}" data-section-idx="${idx}">
          <div class="section-item-info">
            <span class="section-item-name">${title || `Section ${idx + 1}`}</span>
            <span class="section-item-type">${tag} · ${sec.classList[0] || 'default'}</span>
          </div>
          <div class="section-item-actions">
            <button class="action-btn-sm" title="Move Up" data-sec-up="${idx}">
              <span class="material-symbols-outlined">arrow_upward</span>
            </button>
            <button class="action-btn-sm" title="Move Down" data-sec-down="${idx}">
              <span class="material-symbols-outlined">arrow_downward</span>
            </button>
            <button class="action-btn-sm delete" title="Delete Section" data-sec-delete="${idx}">
              <span class="material-symbols-outlined">delete</span>
            </button>
          </div>
        </div>
      `;
    });

    html += '</div>';
    els.panelContent.innerHTML = html;

    // Add Section Button
    const btnAddBlank = document.getElementById('btnAddBlankSection');
    if (btnAddBlank) {
      btnAddBlank.addEventListener('click', () => {
        pushHistory();
        const newSec = currentDoc.createElement('section');
        newSec.className = 'section';
        newSec.style.padding = '60px 0';
        newSec.innerHTML = `
          <div class="container" style="text-align: center;">
            <span class="eyebrow-badge">New Section</span>
            <h2 class="section-title" style="margin: 16px 0;">Customizable Section Title</h2>
            <p class="section-subtitle">Click any element here to customize font size, alignment, colors, or photos in Canva/Figma style.</p>
            <div style="margin-top: 24px;">
              <a href="#" class="btn btn-mint btn-lg">Explore More</a>
            </div>
          </div>
        `;
        const main = currentDoc.querySelector('main') || currentDoc.body;
        main.appendChild(newSec);
        selectElement(newSec);
        renderSectionsList();
        triggerAutoSave();
        showToast('New section added!');
      });
    }

    // Bind section item clicks & actions
    sections.forEach((sec, idx) => {
      const itemEl = els.panelContent.querySelector(`[data-section-idx="${idx}"]`);
      if (itemEl) {
        itemEl.addEventListener('click', (e) => {
          if (e.target.closest('button')) return;
          selectElement(sec);
          sec.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
      }

      const upBtn = els.panelContent.querySelector(`[data-sec-up="${idx}"]`);
      if (upBtn) {
        upBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          moveSectionUp(sec);
        });
      }

      const downBtn = els.panelContent.querySelector(`[data-sec-down="${idx}"]`);
      if (downBtn) {
        downBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          moveSectionDown(sec);
        });
      }

      const delBtn = els.panelContent.querySelector(`[data-sec-delete="${idx}"]`);
      if (delBtn) {
        delBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          deleteSection(sec);
        });
      }
    });
  }

  /** Section Helpers */
  function moveSectionUp(sec) {
    const prev = sec.previousElementSibling;
    if (prev) {
      pushHistory();
      sec.parentNode.insertBefore(sec, prev);
      renderSectionsList();
      triggerAutoSave();
      showToast('Section moved up & saved');
    }
  }

  function moveSectionDown(sec) {
    const next = sec.nextElementSibling;
    if (next) {
      pushHistory();
      sec.parentNode.insertBefore(next, sec);
      renderSectionsList();
      triggerAutoSave();
      showToast('Section moved down & saved');
    }
  }

  function deleteSection(sec) {
    if (!sec) return;
    const confirmDelete = confirm('Are you sure you want to delete this entire section?');
    if (!confirmDelete) return;

    pushHistory();
    if (selectedSection === sec) {
      deselectElement();
    }
    sec.remove();
    renderSectionsList();
    triggerAutoSave();
    showToast('Section deleted & saved to website', 'delete');
  }

  /** 1B. Publication Screenshots & Dedicated Upload Space Dashboard */
  let pendingPubFile = null;
  let pendingPubDataUrl = null;
  let isPubAddCardOpen = false;

  function renderPublicationsDashboard() {
    if (!currentDoc) {
      els.panelContent.innerHTML = '<p style="color: var(--studio-text-muted); font-size: 0.8rem; padding: 16px;">Loading publications...</p>';
      return;
    }

    const curPage = els.pageSelect ? els.pageSelect.value : '';
    const isPubPage = curPage.includes('publications');

    let gridEl = currentDoc.getElementById('publicationsGrid');
    if (!gridEl) {
      gridEl = currentDoc.querySelector('.grid-3, .grid');
    }

    let cards = [];
    let emptySlot = null;
    if (gridEl) {
      cards = Array.from(gridEl.querySelectorAll('.portfolio-card-item, .publication-doc-card, .publication-upload-slot, .service-card'));
      emptySlot = gridEl.querySelector('.publication-upload-slot');
    }

    let html = `
      <div class="pub-dashboard-container">
    `;

    // Quick Switch Notice if not on publications.html
    if (!isPubPage) {
      html += `
        <div class="pub-page-notice">
          <div>
            <div style="font-weight: 700; color: #fff;">Currently viewing: ${curPage}</div>
            <div style="font-size: 0.7rem; color: var(--studio-text-muted);">Switch to Publications page to view cards live.</div>
          </div>
          <button id="btnSwitchToPubsPage" class="studio-btn studio-btn-teal" style="font-size: 0.72rem; padding: 4px 8px; flex-shrink: 0;">
            <span class="material-symbols-outlined" style="font-size: 14px;">open_in_new</span> Switch
          </button>
        </div>
      `;
    }

    // Add New Publication Card Toggle Button
    html += `
      <div style="margin-bottom: 14px;">
        <button id="btnToggleAddPubCard" class="studio-btn studio-btn-teal" style="width: 100%; justify-content: center; padding: 9px 14px; font-weight: 600; font-size: 0.82rem; gap: 8px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 194, 178, 0.2);">
          <span class="material-symbols-outlined" style="font-size: 18px;">${isPubAddCardOpen ? 'expand_less' : 'add_circle'}</span>
          <span>${isPubAddCardOpen ? 'Close Card Creator' : '+ Add New Publication Card'}</span>
        </button>
      </div>
    `;

    if (isPubAddCardOpen) {
      html += `
        <div id="pubAddCardSection" class="studio-card" style="margin-bottom: 18px; border: 1.5px solid var(--studio-accent-teal); background: rgba(0, 194, 178, 0.05); border-radius: 10px; padding: 14px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-size: 0.8rem; font-weight: 700; color: #fff; display: flex; align-items: center; gap: 6px;">
              <span class="material-symbols-outlined" style="font-size: 18px; color: var(--studio-accent-teal);">post_add</span>
              Upload Photo & Create Card
            </span>
            <button id="btnCloseAddPubCard" style="background: none; border: none; color: var(--studio-text-muted); cursor: pointer; display: flex; align-items: center; padding: 2px;" title="Close form">
              <span class="material-symbols-outlined" style="font-size: 18px;">close</span>
            </button>
          </div>

          <!-- Photo Upload Dropzone -->
          <div class="pub-form-row">
            <label class="pub-form-label">Upload Publication Photo / Screenshot *</label>
            <div id="pubDropzoneSpace" class="pub-default-space ${pendingPubDataUrl ? 'has-file' : ''}" style="height: 135px; margin-bottom: 6px; position: relative; border-radius: 8px; cursor: pointer;">
              ${pendingPubDataUrl ? `
                <img src="${pendingPubDataUrl}" alt="Preview" class="pub-preview-img" style="width: 100%; height: 100%; object-fit: contain; background: #ffffff;">
                <div style="position: absolute; bottom: 8px; right: 8px; background: rgba(0,0,0,0.85); color: #fff; font-size: 0.68rem; padding: 4px 8px; border-radius: 4px; display: flex; align-items: center; gap: 4px; pointer-events: none; border: 1px solid rgba(255,255,255,0.2);">
                  <span class="material-symbols-outlined" style="font-size: 14px; color: var(--studio-accent-teal);">sync</span> Change Photo
                </div>
              ` : `
                <span class="material-symbols-outlined pub-space-icon" style="font-size: 30px; color: var(--studio-accent-teal);">cloud_upload</span>
                <div class="pub-space-title" style="font-size: 0.78rem; font-weight: 700; color: #fff;">Click or Drop Photo Here</div>
                <div class="pub-space-hint" style="font-size: 0.66rem; color: var(--studio-text-muted);">Auto-fits to standard card ratio (600 × 414 px)</div>
              `}
            </div>
            <input type="file" id="pubFileInput" accept="image/*" style="display: none;">
          </div>

          <!-- Title Input -->
          <div class="pub-form-row">
            <label class="pub-form-label" for="pubTitleField">Card Title / Heading</label>
            <input type="text" id="pubTitleField" class="pub-form-input" placeholder="e.g. Clinical Study on Diagnostic Imaging">
          </div>

          <!-- Link Input -->
          <div class="pub-form-row">
            <label class="pub-form-label" for="pubLinkField">Article / External Link (Optional)</label>
            <input type="url" id="pubLinkField" class="pub-form-input" placeholder="https://doi.org/... or https://...">
          </div>

          <!-- Category Dropdown -->
          <div class="pub-form-row">
            <label class="pub-form-label" for="pubCategoryField">Category</label>
            <select id="pubCategoryField" class="pub-form-input" style="cursor: pointer;">
              <option value="original">Original Research</option>
              <option value="review">Review Article</option>
              <option value="case-report">Case Report</option>
              <option value="clinical">Clinical Study</option>
              <option value="all">All Publications</option>
            </select>
          </div>

          <!-- Action Buttons -->
          <div class="pub-action-btn-group" style="margin-top: 14px;">
            <button id="btnPubAddAsCard" class="studio-btn studio-btn-teal" style="flex: 1; justify-content: center; font-size: 0.78rem; padding: 9px; font-weight: 600;">
              <span class="material-symbols-outlined" style="font-size: 16px;">add_circle</span> Add New Card
            </button>
            ${emptySlot ? `
              <button id="btnPubFillSlot" class="studio-btn studio-btn-outline" style="flex: 1; justify-content: center; font-size: 0.78rem; padding: 9px; font-weight: 600; border-color: rgba(245, 158, 11, 0.7); color: #fbbf24;" title="Fill the empty upload slot on the page">
                <span class="material-symbols-outlined" style="font-size: 16px;">download_done</span> Fill Empty Slot
              </button>
            ` : ''}
          </div>
        </div>
      `;
    }

    html += `
      <!-- Publication Cards List -->
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <span style="font-size: 0.74rem; font-weight: 700; color: var(--studio-text-muted);">CARDS IN GRID (${cards.length})</span>
        </div>
        <div class="pub-list-container">
    `;

    if (cards.length === 0) {
      html += `
        <div style="padding: 16px; text-align: center; color: var(--studio-text-muted); font-size: 0.78rem;">
          No publication cards found in this page grid.
        </div>
      `;
    } else {
      cards.forEach((card, idx) => {
        const isEmpty = card.classList.contains('publication-upload-slot');
        const isDocCard = card.classList.contains('publication-doc-card');
        const docImg = card.querySelector('img.publication-doc-img, img');
        const titleEl = card.querySelector('h3, h4');
        const title = isEmpty ? 'Empty Upload Space (Ready)' : (docImg ? (docImg.alt || 'Publication Screenshot') : (titleEl ? titleEl.innerText.trim() : `Publication #${idx + 1}`));
        const category = card.getAttribute('data-category') || 'General';

        const link = card.getAttribute('href') || card.getAttribute('data-card-link') || '';

        html += `
          <div class="pub-list-item ${isEmpty ? 'is-empty-slot' : ''}" data-pub-card-idx="${idx}">
            ${isEmpty ? `
              <div class="pub-item-thumb-empty">
                <span class="material-symbols-outlined" style="font-size: 20px;">add_photo_alternate</span>
              </div>
            ` : docImg ? `
              <img src="${docImg.src}" alt="${title}" class="pub-item-thumb">
            ` : `
              <div class="pub-item-thumb" style="display: flex; align-items: center; justify-content: center; background: var(--teal-900); color: #fff; font-size: 0.65rem; font-weight: 700; text-align: center; padding: 2px;">
                Text Card
              </div>
            `}
            <div class="pub-item-info">
              <span class="pub-item-title" title="${title}">${title}</span>
              <span class="pub-item-sub">${isEmpty ? 'Empty Space · Auto-Fit' : (isDocCard ? 'Screenshot Card' : 'Article Card')} · ${category.toUpperCase()}</span>
              ${link ? `
                <div style="font-size: 0.65rem; color: var(--studio-accent-teal); display: flex; align-items: center; gap: 3px; margin-top: 2px;">
                  <span class="material-symbols-outlined" style="font-size: 12px;">link</span>
                  <span>${link.replace(/^https?:\/\//, '').slice(0, 22)}...</span>
                </div>
              ` : ''}
            </div>
            <div class="pub-item-actions">
              ${link ? `
                <button class="action-btn-sm" title="Open Link: ${link}" data-pub-open-link="${link}">
                  <span class="material-symbols-outlined">open_in_new</span>
                </button>
              ` : ''}
              ${!isEmpty ? `
                <button class="action-btn-sm" title="Replace Screenshot" data-pub-replace="${idx}">
                  <span class="material-symbols-outlined">sync</span>
                </button>
                <input type="file" data-pub-file-replace="${idx}" accept="image/*" style="display: none;">
              ` : ''}
              <button class="action-btn-sm" title="Move Up" data-pub-up="${idx}">
                <span class="material-symbols-outlined">arrow_upward</span>
              </button>
              <button class="action-btn-sm" title="Move Down" data-pub-down="${idx}">
                <span class="material-symbols-outlined">arrow_downward</span>
              </button>
              <button class="action-btn-sm delete" title="Delete Card" data-pub-delete="${idx}">
                <span class="material-symbols-outlined">delete</span>
              </button>
            </div>
          </div>
        `;
      });
    }

    html += `
        </div>
      </div>
    </div>
    `;

    els.panelContent.innerHTML = html;

    // Attach Event Handlers
    // 0. Toggle & Close Add Card Form
    const btnToggleAdd = document.getElementById('btnToggleAddPubCard');
    if (btnToggleAdd) {
      btnToggleAdd.addEventListener('click', () => {
        isPubAddCardOpen = !isPubAddCardOpen;
        renderPublicationsDashboard();
      });
    }
    const btnCloseAdd = document.getElementById('btnCloseAddPubCard');
    if (btnCloseAdd) {
      btnCloseAdd.addEventListener('click', () => {
        isPubAddCardOpen = false;
        pendingPubFile = null;
        pendingPubDataUrl = null;
        renderPublicationsDashboard();
      });
    }

    // 1. Switch Page button
    const btnSwitch = document.getElementById('btnSwitchToPubsPage');
    if (btnSwitch) {
      btnSwitch.addEventListener('click', () => {
        if (els.pageSelect) els.pageSelect.value = 'publications.html';
        loadPage('publications.html');
      });
    }

    // 1B. Card Sizing inside Publications Dashboard
    const btnDashApply = document.getElementById('btnDashApplySizeAll');
    if (btnDashApply) {
      btnDashApply.addEventListener('click', () => {
        const w = parseInt(document.getElementById('dashCardWidthInput')?.value, 10) || 600;
        const h = parseInt(document.getElementById('dashCardHeightInput')?.value, 10) || 414;
        pushHistory();
        updateCardDimensions(w, h, true);
        saveToStorage();
        showToast(`All cards resized to ${w} × ${h} px & saved to website!`, 'select_all');
        const badge = document.getElementById('pubCardSizeBadge');
        if (badge) badge.innerText = `${w} × ${h} px`;
      });
    }

    // 1C. Open Link buttons in cards list
    const openLinkBtns = els.panelContent.querySelectorAll('[data-pub-open-link]');
    openLinkBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const url = btn.dataset.pubOpenLink;
        if (url) window.open(url, '_blank');
      });
    });

    // 2. Dropzone & File Input for Default Space
    const dropzone = document.getElementById('pubDropzoneSpace');
    const fileInput = document.getElementById('pubFileInput');
    if (dropzone && fileInput) {
      dropzone.addEventListener('click', () => fileInput.click());
      dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.style.borderColor = '#2dd4bf';
        dropzone.style.background = 'rgba(0, 194, 178, 0.12)';
      });
      dropzone.addEventListener('dragleave', () => {
        dropzone.style.borderColor = 'rgba(0, 194, 178, 0.6)';
        dropzone.style.background = 'rgba(0, 194, 178, 0.03)';
      });
      dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
          handlePubFileSelected(e.dataTransfer.files[0]);
        }
      });
      fileInput.addEventListener('change', () => {
        if (fileInput.files && fileInput.files[0]) {
          handlePubFileSelected(fileInput.files[0]);
        }
      });
    }

    function preparePubImageCanvas(file) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const img = new Image();
          img.onload = () => {
            const targetW = 1200;
            const targetH = 828;
            const padX = 60;
            const padY = 55;

            const canvas = document.createElement('canvas');
            canvas.width = targetW;
            canvas.height = targetH;
            const ctx = canvas.getContext('2d');

            // Clean pure white canvas background
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect(0, 0, targetW, targetH);

            // Fit scale within safe padded bounds
            const availW = targetW - (padX * 2);
            const availH = targetH - (padY * 2);
            const scale = Math.min(availW / img.width, availH / img.height);
            const drawW = Math.round(img.width * scale);
            const drawH = Math.round(img.height * scale);
            const drawX = Math.round((targetW - drawW) / 2);
            const drawY = Math.round((targetH - drawH) / 2);

            ctx.drawImage(img, drawX, drawY, drawW, drawH);

            const dataUrl = canvas.toDataURL('image/png', 0.95);
            canvas.toBlob((blob) => {
              const safeName = file.name.replace(/\.[^/.]+$/, '') + '_prepared.png';
              const preparedFile = new File([blob], safeName, { type: 'image/png' });
              resolve({ file: preparedFile, dataUrl });
            }, 'image/png', 0.95);
          };
          img.onerror = () => resolve({ file, dataUrl: e.target.result });
          img.src = e.target.result;
        };
        reader.onerror = () => resolve({ file, dataUrl: '' });
        reader.readAsDataURL(file);
      });
    }

    async function handlePubFileSelected(file) {
      showToast('Preparing image to fit card perfectly...', 'auto_fix_high');
      const prepared = await preparePubImageCanvas(file);
      pendingPubFile = prepared.file;
      pendingPubDataUrl = prepared.dataUrl;
      isPubAddCardOpen = true;
      renderPublicationsDashboard();
      showToast('Photo prepared! Enter title/link and click "Add New Card"', 'check_circle');
    }

    // 3. Fill Empty Space / Slot
    const btnFillSlot = document.getElementById('btnPubFillSlot');
    if (btnFillSlot) {
      btnFillSlot.addEventListener('click', async () => {
        if (!pendingPubFile && !pendingPubDataUrl) {
          showToast('Please select or drop a publication photo first', 'add_photo_alternate');
          const fi = document.getElementById('pubFileInput');
          if (fi) fi.click();
          return;
        }
        showToast('Uploading publication screenshot...', 'hourglass_top');
        const photoUrl = pendingPubFile ? await uploadPhotoToServer(pendingPubFile, true) : pendingPubDataUrl;
        const titleVal = document.getElementById('pubTitleField')?.value.trim() || 'Published Research Paper';
        const linkVal = document.getElementById('pubLinkField')?.value.trim() || '';
        const catVal = document.getElementById('pubCategoryField')?.value || 'original';

        pushHistory();
        let targetGrid = currentDoc.getElementById('publicationsGrid');
        if (!targetGrid) {
          targetGrid = currentDoc.querySelector('.grid-3, .grid');
        }

        let slot = targetGrid ? targetGrid.querySelector('.publication-upload-slot') : null;

        // Create new publication card element as container
        const newCard = currentDoc.createElement('div');
        newCard.className = 'service-card portfolio-card-item publication-doc-card';
        newCard.setAttribute('data-category', catVal);
        newCard.setAttribute('title', titleVal || 'Click to view publication');
        if (linkVal) {
          newCard.setAttribute('data-card-link', linkVal);
        }
        newCard.innerHTML = `
          ${linkVal ? `<a href="${linkVal}" target="_blank" rel="noopener noreferrer" class="card-link-badge" title="Open article in new tab" onclick="event.stopPropagation()"><span class="material-symbols-outlined" style="font-size: 13px;">open_in_new</span><span>View Article</span></a>` : ''}
          <img src="${photoUrl}" alt="${titleVal}" class="publication-doc-img" loading="lazy">
        `;

        // Create a new empty slot element to reserve the space empty for next upload
        const newEmptySlot = currentDoc.createElement('div');
        newEmptySlot.className = 'service-card portfolio-card-item publication-upload-slot';
        newEmptySlot.setAttribute('data-category', 'all');
        newEmptySlot.setAttribute('title', 'Empty space for next publication image');
        newEmptySlot.setAttribute('onclick', "if (window.parent && window.parent.openPublicationUpload) { window.parent.openPublicationUpload(); } else { window.location.href='editor.html?tab=publications'; }");
        newEmptySlot.innerHTML = `
          <div class="upload-slot-inner">
            <span class="material-symbols-outlined upload-slot-icon">add_photo_alternate</span>
            <span class="upload-slot-title">Upload New Publication</span>
            <span class="upload-slot-dim">Auto-Fits Any Image Size</span>
            <span class="upload-slot-hint">Ready for new publication image. Click to upload in Studio.</span>
          </div>
        `;

        if (slot) {
          slot.parentNode.replaceChild(newCard, slot);
          newCard.after(newEmptySlot);
        } else if (targetGrid) {
          targetGrid.insertBefore(newCard, targetGrid.firstChild);
          newCard.after(newEmptySlot);
        }

        // Reset pending state
        pendingPubFile = null;
        pendingPubDataUrl = null;
        isPubAddCardOpen = false;

        saveToStorage();
        showToast('Publication uploaded & empty space reserved for next!', 'check_circle');
        selectElement(newCard);
        renderPublicationsDashboard();
      });
    }

    // 4. Add as New Publication Card (without filling slot)
    const btnAddAsCard = document.getElementById('btnPubAddAsCard');
    if (btnAddAsCard) {
      btnAddAsCard.addEventListener('click', async () => {
        if (!pendingPubFile && !pendingPubDataUrl) {
          showToast('Please select or drop a publication photo first', 'add_photo_alternate');
          const fi = document.getElementById('pubFileInput');
          if (fi) fi.click();
          return;
        }
        showToast('Uploading publication screenshot...', 'hourglass_top');
        const photoUrl = pendingPubFile ? await uploadPhotoToServer(pendingPubFile, true) : pendingPubDataUrl;
        const titleVal = document.getElementById('pubTitleField')?.value.trim() || 'Published Research Paper';
        const linkVal = document.getElementById('pubLinkField')?.value.trim() || '';
        const catVal = document.getElementById('pubCategoryField')?.value || 'original';

        pushHistory();
        let targetGrid = currentDoc.getElementById('publicationsGrid');
        if (!targetGrid) {
          targetGrid = currentDoc.querySelector('.grid-3, .grid');
        }

        const newCard = currentDoc.createElement('div');
        newCard.className = 'service-card portfolio-card-item publication-doc-card';
        newCard.setAttribute('data-category', catVal);
        newCard.setAttribute('title', titleVal || 'Click to view publication');
        if (linkVal) {
          newCard.setAttribute('data-card-link', linkVal);
        }
        newCard.innerHTML = `
          ${linkVal ? `<a href="${linkVal}" target="_blank" rel="noopener noreferrer" class="card-link-badge" title="Open article in new tab" onclick="event.stopPropagation()"><span class="material-symbols-outlined" style="font-size: 13px;">open_in_new</span><span>View Article</span></a>` : ''}
          <img src="${photoUrl}" alt="${titleVal}" class="publication-doc-img" loading="lazy">
        `;

        if (targetGrid) {
          const slot = targetGrid.querySelector('.publication-upload-slot');
          if (slot) {
            targetGrid.insertBefore(newCard, slot);
          } else {
            targetGrid.appendChild(newCard);
          }
        }

        pendingPubFile = null;
        pendingPubDataUrl = null;
        isPubAddCardOpen = false;

        saveToStorage();
        showToast('New publication card added & saved!', 'check_circle');
        selectElement(newCard);
        renderPublicationsDashboard();
      });
    }

    // 5. Add Empty Slot button (if grid lacks one)
    const btnAddEmpty = document.getElementById('btnAddEmptySlot');
    if (btnAddEmpty) {
      btnAddEmpty.addEventListener('click', () => {
        pushHistory();
        let targetGrid = currentDoc.getElementById('publicationsGrid');
        if (!targetGrid) targetGrid = currentDoc.querySelector('.grid-3, .grid');
        if (targetGrid) {
          const newEmptySlot = currentDoc.createElement('div');
          newEmptySlot.className = 'service-card portfolio-card-item publication-upload-slot';
          newEmptySlot.setAttribute('data-category', 'all');
          newEmptySlot.setAttribute('title', 'Empty space for next publication image (Default Size: 600 × 414 px)');
          newEmptySlot.innerHTML = `
            <div class="upload-slot-inner">
              <span class="material-symbols-outlined upload-slot-icon">add_photo_alternate</span>
              <span class="upload-slot-title">Upload New Publication</span>
              <span class="upload-slot-dim">Default Size: 600 × 414 px</span>
              <span class="upload-slot-hint">Ready for new publication image. Upload in MedZen Studio.</span>
            </div>
          `;
          if (targetGrid.children.length > 0) {
            targetGrid.children[0].after(newEmptySlot);
          } else {
            targetGrid.appendChild(newEmptySlot);
          }
          saveToStorage();
          showToast('Empty publication upload slot added!');
          renderPublicationsDashboard();
        }
      });
    }

    // 6. Card list item clicks & actions
    cards.forEach((card, idx) => {
      const rowEl = els.panelContent.querySelector(`[data-pub-card-idx="${idx}"]`);
      if (rowEl) {
        rowEl.addEventListener('click', (e) => {
          if (e.target.closest('button') || e.target.closest('input')) return;
          if (card.classList.contains('publication-upload-slot')) {
            isPubAddCardOpen = true;
            renderPublicationsDashboard();
            const fi = document.getElementById('pubFileInput');
            if (fi) fi.click();
            return;
          }
          selectElement(card);
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
      }

      // Move Up
      const upBtn = els.panelContent.querySelector(`[data-pub-up="${idx}"]`);
      if (upBtn) {
        upBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (card.previousElementSibling) {
            pushHistory();
            card.parentNode.insertBefore(card, card.previousElementSibling);
            saveToStorage();
            renderPublicationsDashboard();
            showToast('Publication card moved up');
          }
        });
      }

      // Move Down
      const downBtn = els.panelContent.querySelector(`[data-pub-down="${idx}"]`);
      if (downBtn) {
        downBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (card.nextElementSibling) {
            pushHistory();
            card.parentNode.insertBefore(card.nextElementSibling, card);
            saveToStorage();
            renderPublicationsDashboard();
            showToast('Publication card moved down');
          }
        });
      }

      // Replace Screenshot
      const replaceBtn = els.panelContent.querySelector(`[data-pub-replace="${idx}"]`);
      const replaceInput = els.panelContent.querySelector(`[data-pub-file-replace="${idx}"]`);
      if (replaceBtn && replaceInput) {
        replaceBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          replaceInput.click();
        });
        replaceInput.addEventListener('change', async () => {
          if (replaceInput.files && replaceInput.files[0]) {
            showToast('Preparing & uploading new publication screenshot...', 'hourglass_top');
            const prepared = await preparePubImageCanvas(replaceInput.files[0]);
            const photoUrl = await uploadPhotoToServer(prepared.file, true);
            pushHistory();
            card.classList.add('publication-doc-card');
            const cardLink = card.getAttribute('data-card-link') || card.getAttribute('href') || '';
            const existingAlt = card.querySelector('img')?.alt || card.getAttribute('title') || 'Publication Document';
            card.innerHTML = `
              ${cardLink ? `<a href="${cardLink}" target="_blank" rel="noopener noreferrer" class="card-link-badge" title="Open article in new tab" onclick="event.stopPropagation()"><span class="material-symbols-outlined" style="font-size: 13px;">open_in_new</span><span>View Article</span></a>` : ''}
              <img src="${photoUrl}" alt="${existingAlt}" class="publication-doc-img" loading="lazy">
            `;
            saveToStorage();
            showToast('Publication screenshot prepared & saved!');
            renderPublicationsDashboard();
          }
        });
      }

      // Delete Card
      const delBtn = els.panelContent.querySelector(`[data-pub-delete="${idx}"]`);
      if (delBtn) {
        delBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (confirm('Delete this publication card from the page?')) {
            pushHistory();
            card.remove();
            saveToStorage();
            renderPublicationsDashboard();
            showToast('Publication card removed');
          }
        });
      }
    });
  }

  // Global helper to open publication upload drawer from iframe or external triggers
  window.openPublicationUpload = function() {
    const pubDockBtn = Array.from(els.dockButtons).find(b => b.dataset.tab === 'publications');
    if (pubDockBtn) {
      els.dockButtons.forEach(b => b.classList.remove('active'));
      pubDockBtn.classList.add('active');
      els.leftPanel.classList.remove('collapsed');
      renderLeftPanelTab('publications');
    }
    isPubAddCardOpen = true;
    renderPublicationsDashboard();
    setTimeout(() => {
      const fi = document.getElementById('pubFileInput');
      if (fi) fi.click();
    }, 150);
  };

  /** 1B-2. WhatsApp Screenshot Testimonials Dashboard (3 per row) */
  let pendingWhatsappFile = null;
  let pendingWhatsappDataUrl = null;
  let isWhatsappAddCardOpen = false;

  function renderTestimonialsDashboard() {
    if (!currentDoc) {
      els.panelContent.innerHTML = '<p style="color: var(--studio-text-muted); font-size: 0.8rem; padding: 16px;">Loading testimonials...</p>';
      return;
    }

    const curPage = els.pageSelect ? els.pageSelect.value : '';
    const isTestimonialPage = curPage.includes('testimonials');
    const isPubPage = curPage.includes('publications');

    let gridEl = currentDoc.getElementById('whatsappTestimonialsGrid') ||
                 currentDoc.getElementById('whatsappPubsGrid') ||
                 currentDoc.querySelector('.whatsapp-testimonials-grid');

    let cards = [];
    if (gridEl) {
      cards = Array.from(gridEl.querySelectorAll('.whatsapp-testimonial-card, .whatsapp-upload-slot'));
    }

    let html = `
      <div class="pub-dashboard-container">
    `;

    // Quick Switch Notice if not on testimonials or publications page
    if (!isTestimonialPage && !isPubPage) {
      html += `
        <div class="pub-page-notice" style="margin-bottom: 14px;">
          <div>
            <div style="font-weight: 700; color: #fff;">Currently viewing: ${curPage}</div>
            <div style="font-size: 0.7rem; color: var(--studio-text-muted);">Switch to Testimonials or Publications to view WhatsApp cards live.</div>
          </div>
          <div style="display: flex; gap: 6px; flex-shrink: 0; margin-top: 6px;">
            <button id="btnSwitchToTestimonialsPage" class="studio-btn studio-btn-teal" style="font-size: 0.72rem; padding: 4px 8px;">
              <span class="material-symbols-outlined" style="font-size: 14px;">reviews</span> Testimonials
            </button>
            <button id="btnSwitchToPubsPageFromTestimonials" class="studio-btn studio-btn-outline" style="font-size: 0.72rem; padding: 4px 8px;">
              <span class="material-symbols-outlined" style="font-size: 14px;">menu_book</span> Pubs
            </button>
          </div>
        </div>
      `;
    }

    // Add New WhatsApp Testimonial Toggle Button
    html += `
      <div style="margin-bottom: 14px;">
        <button id="btnToggleAddWhatsappCard" class="studio-btn studio-btn-teal" style="width: 100%; justify-content: center; padding: 9px 14px; font-weight: 600; font-size: 0.82rem; gap: 8px; border-radius: 8px; box-shadow: 0 2px 8px rgba(37, 211, 102, 0.2);">
          <span class="material-symbols-outlined" style="font-size: 18px;">${isWhatsappAddCardOpen ? 'expand_less' : 'add_circle'}</span>
          <span>${isWhatsappAddCardOpen ? 'Close WhatsApp Creator' : '+ Add WhatsApp Testimonial'}</span>
        </button>
      </div>
    `;

    if (isWhatsappAddCardOpen) {
      html += `
        <div id="whatsappAddCardSection" class="studio-card" style="margin-bottom: 18px; border: 1.5px solid #25d366; background: rgba(37, 211, 102, 0.05); border-radius: 10px; padding: 14px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-size: 0.8rem; font-weight: 700; color: #fff; display: flex; align-items: center; gap: 6px;">
              <span class="material-symbols-outlined" style="font-size: 18px; color: #25d366;">chat</span>
              Upload WhatsApp Screenshot
            </span>
            <button id="btnCloseAddWhatsappCard" style="background: none; border: none; color: var(--studio-text-muted); cursor: pointer; display: flex; align-items: center; padding: 2px;" title="Close form">
              <span class="material-symbols-outlined" style="font-size: 18px;">close</span>
            </button>
          </div>

          <!-- Photo Upload Dropzone -->
          <div class="pub-form-row">
            <label class="pub-form-label">WhatsApp Chat Screenshot *</label>
            <div id="whatsappDropzoneSpace" class="pub-default-space ${pendingWhatsappDataUrl ? 'has-file' : ''}" style="height: 150px; margin-bottom: 6px; position: relative; border-radius: 8px; cursor: pointer; border-color: rgba(37, 211, 102, 0.6);">
              ${pendingWhatsappDataUrl ? `
                <img src="${pendingWhatsappDataUrl}" alt="Preview" class="pub-preview-img" style="width: 100%; height: 100%; object-fit: contain; background: #0b141a;">
                <div style="position: absolute; bottom: 8px; right: 8px; background: rgba(0,0,0,0.85); color: #25d366; font-size: 0.68rem; padding: 4px 8px; border-radius: 4px; display: flex; align-items: center; gap: 4px; pointer-events: none; border: 1px solid rgba(37, 211, 102, 0.3);">
                  <span class="material-symbols-outlined" style="font-size: 14px;">sync</span> Change Screenshot
                </div>
              ` : `
                <span class="material-symbols-outlined pub-space-icon" style="font-size: 32px; color: #25d366;">add_photo_alternate</span>
                <div class="pub-space-title" style="font-size: 0.78rem; font-weight: 700; color: #fff;">Click or Drop WhatsApp Chat Here</div>
                <div class="pub-space-hint" style="font-size: 0.66rem; color: var(--studio-text-muted);">Displays 3 per row with click-to-zoom modal</div>
              `}
            </div>
            <input type="file" id="whatsappFileInput" accept="image/*" style="display: none;">
          </div>

          <!-- Title Input -->
          <div class="pub-form-row">
            <label class="pub-form-label" for="whatsappTitleField">Client / Feedback Description</label>
            <input type="text" id="whatsappTitleField" class="pub-form-input" placeholder="e.g. Dr. ENT - Thesis Editing & Plagiarism Check">
          </div>

          <!-- Action Buttons -->
          <div class="pub-action-btn-group" style="margin-top: 14px;">
            <button id="btnAddWhatsappCard" class="studio-btn studio-btn-teal" style="flex: 1; justify-content: center; font-size: 0.78rem; padding: 9px; font-weight: 600; background: #25d366; border-color: #25d366; color: #000;">
              <span class="material-symbols-outlined" style="font-size: 16px;">add_circle</span> Add to Grid (3 per row)
            </button>
          </div>
        </div>
      `;
    }

    html += `
      <!-- WhatsApp Cards List -->
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <span style="font-size: 0.74rem; font-weight: 700; color: var(--studio-text-muted);">WHATSAPP TESTIMONIALS (${cards.length})</span>
        </div>
        <div class="pub-list-container">
    `;

    if (cards.length === 0) {
      html += `
        <div style="padding: 16px; text-align: center; color: var(--studio-text-muted); font-size: 0.78rem;">
          No WhatsApp screenshot cards found in this page grid.
        </div>
      `;
    } else {
      cards.forEach((card, idx) => {
        const isEmpty = card.classList.contains('whatsapp-upload-slot');
        const docImg = card.querySelector('img.whatsapp-testimonial-img, img');
        const title = isEmpty ? 'Empty Upload Slot' : (docImg ? (docImg.alt || 'WhatsApp Client Feedback') : `WhatsApp Feedback #${idx + 1}`);

        html += `
          <div class="pub-list-item ${isEmpty ? 'is-empty-slot' : ''}" data-whatsapp-card-idx="${idx}">
            ${docImg ? `
              <img src="${docImg.src}" alt="${title}" class="pub-item-thumb" style="width: 50px; aspect-ratio: 3/4; object-fit: contain; background: #0b141a;">
            ` : `
              <div class="pub-item-thumb-empty" style="width: 50px; aspect-ratio: 3/4;">
                <span class="material-symbols-outlined" style="font-size: 20px;">chat</span>
              </div>
            `}
            <div class="pub-item-info">
              <span class="pub-item-title" title="${title}">${title}</span>
              <span class="pub-item-sub">WhatsApp Screenshot · 3 per row</span>
            </div>
            <div class="pub-item-actions">
              ${!isEmpty ? `
                <button class="action-btn-sm" title="Upload / Replace Screenshot" data-whatsapp-replace="${idx}">
                  <span class="material-symbols-outlined">sync</span>
                </button>
                <input type="file" data-whatsapp-file-replace="${idx}" accept="image/*" style="display: none;">
              ` : ''}
              <button class="action-btn-sm" title="Move Up" data-whatsapp-up="${idx}">
                <span class="material-symbols-outlined">arrow_upward</span>
              </button>
              <button class="action-btn-sm" title="Move Down" data-whatsapp-down="${idx}">
                <span class="material-symbols-outlined">arrow_downward</span>
              </button>
              <button class="action-btn-sm delete" title="Delete Card" data-whatsapp-delete="${idx}">
                <span class="material-symbols-outlined">delete</span>
              </button>
            </div>
          </div>
        `;
      });
    }

    html += `
        </div>
      </div>
    </div>
    `;

    els.panelContent.innerHTML = html;

    // Attach Event Handlers
    // 0. Toggle & Close Add Card Form
    const btnToggleAdd = document.getElementById('btnToggleAddWhatsappCard');
    if (btnToggleAdd) {
      btnToggleAdd.addEventListener('click', () => {
        isWhatsappAddCardOpen = !isWhatsappAddCardOpen;
        renderTestimonialsDashboard();
      });
    }
    const btnCloseAdd = document.getElementById('btnCloseAddWhatsappCard');
    if (btnCloseAdd) {
      btnCloseAdd.addEventListener('click', () => {
        isWhatsappAddCardOpen = false;
        pendingWhatsappFile = null;
        pendingWhatsappDataUrl = null;
        renderTestimonialsDashboard();
      });
    }

    // Switch Page buttons
    const btnSwitchTestimonials = document.getElementById('btnSwitchToTestimonialsPage');
    if (btnSwitchTestimonials) {
      btnSwitchTestimonials.addEventListener('click', () => {
        if (els.pageSelect) els.pageSelect.value = 'testimonials.html';
        loadPage('testimonials.html');
      });
    }
    const btnSwitchPubs = document.getElementById('btnSwitchToPubsPageFromTestimonials');
    if (btnSwitchPubs) {
      btnSwitchPubs.addEventListener('click', () => {
        if (els.pageSelect) els.pageSelect.value = 'publications.html';
        loadPage('publications.html');
      });
    }

    // Dropzone & File Input
    const dropzone = document.getElementById('whatsappDropzoneSpace');
    const fileInput = document.getElementById('whatsappFileInput');
    if (dropzone && fileInput) {
      dropzone.addEventListener('click', () => fileInput.click());
      dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.style.borderColor = '#25d366';
        dropzone.style.background = 'rgba(37, 211, 102, 0.12)';
      });
      dropzone.addEventListener('dragleave', () => {
        dropzone.style.borderColor = 'rgba(37, 211, 102, 0.6)';
        dropzone.style.background = 'rgba(37, 211, 102, 0.05)';
      });
      dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
          handleWhatsappFileSelected(e.dataTransfer.files[0]);
        }
      });
      fileInput.addEventListener('change', () => {
        if (fileInput.files && fileInput.files[0]) {
          handleWhatsappFileSelected(fileInput.files[0]);
        }
      });
    }

    async function handleWhatsappFileSelected(file) {
      showToast('Preparing WhatsApp screenshot...', 'auto_fix_high');
      const reader = new FileReader();
      reader.onload = (e) => {
        pendingWhatsappFile = file;
        pendingWhatsappDataUrl = e.target.result;
        isWhatsappAddCardOpen = true;
        renderTestimonialsDashboard();
        showToast('Screenshot prepared! Click "Add to Grid"', 'check_circle');
      };
      reader.readAsDataURL(file);
    }

    // Add New Card
    const btnAddCard = document.getElementById('btnAddWhatsappCard');
    if (btnAddCard) {
      btnAddCard.addEventListener('click', async () => {
        if (!pendingWhatsappFile && !pendingWhatsappDataUrl) {
          showToast('Please select or upload a WhatsApp screenshot first', 'add_photo_alternate');
          const fi = document.getElementById('whatsappFileInput');
          if (fi) fi.click();
          return;
        }
        showToast('Uploading WhatsApp screenshot...', 'hourglass_top');
        const photoUrl = pendingWhatsappFile ? await uploadPhotoToServer(pendingWhatsappFile, true) : pendingWhatsappDataUrl;
        const titleVal = document.getElementById('whatsappTitleField')?.value.trim() || 'WhatsApp Client Feedback';

        pushHistory();
        let targetGrid = currentDoc.getElementById('whatsappTestimonialsGrid') ||
                         currentDoc.getElementById('whatsappPubsGrid') ||
                         currentDoc.querySelector('.whatsapp-testimonials-grid');

        if (!targetGrid) {
          targetGrid = currentDoc.querySelector('.grid-3, .grid');
        }

        const newCard = currentDoc.createElement('div');
        newCard.className = 'whatsapp-testimonial-card';
        newCard.setAttribute('title', titleVal || 'Click to view full WhatsApp conversation preview');
        newCard.innerHTML = `
          <img src="${photoUrl}" alt="${titleVal}" class="whatsapp-testimonial-img" loading="lazy">
          <div class="whatsapp-zoom-badge">
            <span class="material-symbols-outlined" style="font-size: 14px;">zoom_in</span>
            <span>View Chat</span>
          </div>
        `;

        if (targetGrid) {
          targetGrid.appendChild(newCard);
        }

        pendingWhatsappFile = null;
        pendingWhatsappDataUrl = null;
        isWhatsappAddCardOpen = false;

        saveToStorage();
        showToast('New WhatsApp testimonial added to grid!', 'check_circle');
        selectElement(newCard);
        renderTestimonialsDashboard();
      });
    }

    // Card Row Actions
    cards.forEach((card, idx) => {
      const rowEl = els.panelContent.querySelector(`[data-whatsapp-card-idx="${idx}"]`);
      if (rowEl) {
        rowEl.addEventListener('click', (e) => {
          if (e.target.closest('button') || e.target.closest('input')) return;
          selectElement(card);
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
      }

      // Move Up
      const upBtn = els.panelContent.querySelector(`[data-whatsapp-up="${idx}"]`);
      if (upBtn) {
        upBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (card.previousElementSibling) {
            pushHistory();
            card.parentNode.insertBefore(card, card.previousElementSibling);
            saveToStorage();
            renderTestimonialsDashboard();
            showToast('WhatsApp card moved up');
          }
        });
      }

      // Move Down
      const downBtn = els.panelContent.querySelector(`[data-whatsapp-down="${idx}"]`);
      if (downBtn) {
        downBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (card.nextElementSibling) {
            pushHistory();
            card.parentNode.insertBefore(card.nextElementSibling, card);
            saveToStorage();
            renderTestimonialsDashboard();
            showToast('WhatsApp card moved down');
          }
        });
      }

      // Replace Screenshot
      const replaceBtn = els.panelContent.querySelector(`[data-whatsapp-replace="${idx}"]`);
      const replaceInput = els.panelContent.querySelector(`[data-whatsapp-file-replace="${idx}"]`);
      if (replaceBtn && replaceInput) {
        replaceBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          replaceInput.click();
        });
        replaceInput.addEventListener('change', async () => {
          if (replaceInput.files && replaceInput.files[0]) {
            showToast('Uploading replacement WhatsApp screenshot...', 'hourglass_top');
            const photoUrl = await uploadPhotoToServer(replaceInput.files[0], true);
            pushHistory();
            const existingAlt = card.querySelector('img')?.alt || 'WhatsApp Client Feedback';
            card.innerHTML = `
              <img src="${photoUrl}" alt="${existingAlt}" class="whatsapp-testimonial-img" loading="lazy">
              <div class="whatsapp-zoom-badge">
                <span class="material-symbols-outlined" style="font-size: 14px;">zoom_in</span>
                <span>View Chat</span>
              </div>
            `;
            saveToStorage();
            showToast('WhatsApp screenshot updated & saved!');
            renderTestimonialsDashboard();
          }
        });
      }

      // Delete Card
      const delBtn = els.panelContent.querySelector(`[data-whatsapp-delete="${idx}"]`);
      if (delBtn) {
        delBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (confirm('Delete this WhatsApp testimonial card?')) {
            pushHistory();
            card.remove();
            saveToStorage();
            renderTestimonialsDashboard();
            showToast('WhatsApp testimonial card removed');
          }
        });
      }
    });
  }

  /** 1C. Card Background Photos Dashboard (For Publications, Testimonials, Services) */
  function renderCardPhotosDashboard() {
    if (!currentDoc) {
      els.panelContent.innerHTML = '<p style="color: var(--studio-text-muted); font-size: 0.8rem; padding: 16px;">Loading page content...</p>';
      return;
    }

    const cards = Array.from(currentDoc.querySelectorAll('.portfolio-card-item, .testimonial-card, .service-card'));
    const curPage = els.pageSelect ? els.pageSelect.value : '';

    let html = `
      <div style="margin-bottom: 14px; background: rgba(0, 194, 178, 0.1); border: 1px solid rgba(0, 194, 178, 0.3); border-radius: 8px; padding: 12px;">
        <div style="font-size: 0.82rem; font-weight: 800; color: var(--studio-accent-teal); margin-bottom: 4px; display: flex; align-items: center; gap: 6px;">
          <span class="material-symbols-outlined" style="font-size: 18px;">wallpaper</span>
          <span>Hero-Style Transparent Cards</span>
        </div>
        <div style="font-size: 0.72rem; color: #cbd5e1; line-height: 1.45;">
          Upload a background photo for each card. The card stays transparent with a frosted glass overlay so text & badges stay 100% readable.
        </div>
      </div>

      <div style="margin-bottom: 12px; display: flex; flex-direction: column; gap: 8px;">
        <button id="btnUploadAllCards" class="studio-btn studio-btn-teal" style="width: 100%; justify-content: center; font-size: 0.78rem;">
          <span class="material-symbols-outlined" style="font-size: 16px;">auto_fix_high</span>
          <span>Apply One Photo to ALL Cards</span>
        </button>
        <input type="file" id="allCardsFileInput" accept="image/*" style="display: none;">
      </div>

      <!-- Master All Cards Overlay Opacity Slider in Dashboard -->
      <div style="background: rgba(0, 194, 178, 0.08); border: 1px solid rgba(0, 194, 178, 0.25); border-radius: 8px; padding: 10px 12px; margin-bottom: 10px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
          <span style="font-size: 0.74rem; color: #fff; font-weight: 700; display: flex; align-items: center; gap: 5px;">
            <span class="material-symbols-outlined" style="font-size: 16px; color: var(--studio-accent-teal);">opacity</span>
            <span>All Cards Overlay Opacity</span>
          </span>
          <span id="allCardsOpacityVal" style="font-size: 0.74rem; color: var(--studio-accent-teal); font-weight: 800;">82%</span>
        </div>
        <input type="range" id="allCardsOpacitySlider" class="studio-slider" min="10" max="100" value="82" style="width: 100%;">
      </div>

      <!-- Master All Cards Size & Ratio Control in Dashboard -->
      <div style="background: rgba(0, 194, 178, 0.08); border: 1px solid rgba(0, 194, 178, 0.25); border-radius: 8px; padding: 10px 12px; margin-bottom: 14px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <span style="font-size: 0.74rem; color: #fff; font-weight: 700; display: flex; align-items: center; gap: 5px;">
            <span class="material-symbols-outlined" style="font-size: 16px; color: var(--studio-accent-teal);">aspect_ratio</span>
            <span>All Cards Max Width</span>
          </span>
          <span id="allCardsWidthVal" style="font-size: 0.74rem; color: var(--studio-accent-teal); font-weight: 800;">600px</span>
        </div>
        <input type="range" id="allCardsWidthSlider" class="studio-slider" min="260" max="900" value="600" style="width: 100%; margin-bottom: 8px;">
        <div style="display: flex; gap: 4px; flex-wrap: wrap;">
          <button class="overlay-pill-btn active" data-all-ratio="600/414" style="flex: 1; font-size: 0.65rem; padding: 3px 5px;">600 × 414</button>
          <button class="overlay-pill-btn" data-all-ratio="486/340" style="flex: 1; font-size: 0.65rem; padding: 3px 5px;">486 × 340</button>
          <button class="overlay-pill-btn" data-all-ratio="16/9" style="flex: 1; font-size: 0.65rem; padding: 3px 5px;">16:9</button>
          <button class="overlay-pill-btn" data-all-ratio="4/3" style="flex: 1; font-size: 0.65rem; padding: 3px 5px;">4:3</button>
          <button class="overlay-pill-btn" data-all-ratio="auto" style="flex: 1; font-size: 0.65rem; padding: 3px 5px;">Auto</button>
        </div>
      </div>

      <div style="margin-bottom: 10px; font-size: 0.75rem; font-weight: 700; color: var(--studio-text-muted); display: flex; justify-content: space-between; align-items: center;">
        <span>CARDS ON THIS PAGE (${cards.length})</span>
        <span style="font-size: 0.7rem; color: var(--studio-accent-teal);">${curPage}</span>
      </div>
    `;

    if (cards.length === 0) {
      html += `
        <div style="padding: 24px; text-align: center; color: var(--studio-text-muted); background: var(--studio-surface-elevated); border-radius: 8px;">
          <span class="material-symbols-outlined" style="font-size: 32px; color: var(--studio-text-dim);">layers_clear</span>
          <div style="font-size: 0.8rem; margin-top: 6px; color: #fff;">No cards detected on this page.</div>
          <div style="font-size: 0.72rem; margin-top: 4px; color: var(--studio-accent-teal);">Select <strong>Publications</strong> or <strong>Testimonials</strong> from the dropdown above!</div>
        </div>
      `;
    } else {
      cards.forEach((card, idx) => {
        const titleEl = card.querySelector('h3, h4, .testimonial-author-name') || card.querySelector('.service-card-title');
        const badgeEl = card.querySelector('.tag-pill, .eyebrow-badge, .service-card-header span:first-child');
        const docImg = card.querySelector('img.publication-doc-img, img');
        const cardTitle = card.getAttribute('data-title') || (titleEl ? titleEl.innerText.trim() : (docImg?.alt || `Card #${idx + 1}`));
        const cardBadge = badgeEl ? badgeEl.innerText.trim() : (card.getAttribute('data-category')?.toUpperCase() || (docImg ? 'PUBLICATION' : `Card ${idx + 1}`));

        const bgImg = card.style.backgroundImage || '';
        let cleanUrl = '';
        if (bgImg && bgImg !== 'none') {
          cleanUrl = bgImg.replace(/^url\(['"]?(.*?)['"]?\)$/i, '$1');
        } else if (docImg) {
          cleanUrl = docImg.src;
        }

        const isLight = card.classList.contains('hero-light-card');
        const isSelected = selectedCard === card;

        const rawOp = card.style.getPropertyValue('--card-overlay-opacity');
        const cardOpacityVal = Math.round((rawOp ? parseFloat(rawOp) : 0.82) * 100);

        html += `
          <div class="card-bg-dashboard-card ${isSelected ? 'active-card' : ''}" data-card-idx="${idx}">
            <div class="card-bg-header-row">
              <span class="card-bg-title" title="${cardTitle}">${idx + 1}. ${cardTitle}</span>
              <span class="card-bg-category-badge">${cardBadge}</span>
            </div>

            <div class="card-bg-preview-row">
              <div class="card-bg-mini-thumb">
                ${cleanUrl ? `<img src="${cleanUrl}" alt="Thumb">` : `<span>No Photo</span>`}
              </div>
              <div class="card-bg-actions-col">
                <button class="btn-card-upload" data-card-upload="${idx}">
                  <span class="material-symbols-outlined" style="font-size: 15px;">cloud_upload</span>
                  <span>Upload Photo</span>
                </button>
                <input type="file" data-card-file="${idx}" accept="image/*" style="display: none;">
                
                <button class="btn-card-gallery" data-card-gallery="${idx}">
                  <span class="material-symbols-outlined" style="font-size: 14px;">photo_library</span>
                  <span>From Gallery</span>
                </button>
              </div>
            </div>

            <div class="card-bg-footer-row">
              <div class="overlay-pill-toggle">
                <button class="overlay-pill-btn ${!isLight ? 'active' : ''}" data-overlay-style="dark" data-card-target="${idx}">Dark Hero</button>
                <button class="overlay-pill-btn ${isLight ? 'active' : ''}" data-overlay-style="light" data-card-target="${idx}">Light Glass</button>
              </div>

              ${cleanUrl ? `
                <button class="btn-card-remove-bg" data-card-remove="${idx}">
                  <span class="material-symbols-outlined" style="font-size: 14px;">delete</span> Remove
                </button>
              ` : ''}
            </div>

            <!-- Overlay Opacity Slider inside Card Dashboard Item -->
            <div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid rgba(255, 255, 255, 0.08);">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                <span style="font-size: 0.70rem; color: var(--studio-text-muted); font-weight: 600; display: flex; align-items: center; gap: 4px;">
                  <span class="material-symbols-outlined" style="font-size: 14px; color: var(--studio-accent-teal);">tune</span>
                  <span>Overlay Opacity</span>
                </span>
                <span style="font-size: 0.70rem; color: var(--studio-accent-teal); font-weight: 800;" data-card-opacity-label="${idx}">${cardOpacityVal}%</span>
              </div>
              <input type="range" class="studio-slider" min="10" max="100" value="${cardOpacityVal}" data-card-opacity="${idx}" style="width: 100%;">
            </div>
          </div>
        `;
      });
    }

    els.panelContent.innerHTML = html;

    // Attach Dashboard Handlers
    // 1. Upload for specific card
    els.panelContent.querySelectorAll('[data-card-upload]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = btn.dataset.cardUpload;
        const fileInput = els.panelContent.querySelector(`[data-card-file="${idx}"]`);
        if (fileInput) fileInput.click();
      });
    });

    els.panelContent.querySelectorAll('[data-card-file]').forEach(input => {
      input.addEventListener('change', async () => {
        const idx = parseInt(input.dataset.cardFile, 10);
        const card = cards[idx];
        if (card && input.files && input.files[0]) {
          showToast(`Uploading photo for Card #${idx + 1}...`, 'hourglass_top');
          const photoUrl = await uploadPhotoToServer(input.files[0]);
          applyPhotoToCard(photoUrl, card);
          renderCardPhotosDashboard();
        }
      });
    });

    // 2. Gallery for specific card
    els.panelContent.querySelectorAll('[data-card-gallery]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.dataset.cardGallery, 10);
        const card = cards[idx];
        if (card) {
          selectElement(card);
          const photoTab = document.querySelector('.dock-btn[data-tab="photos"]');
          if (photoTab) photoTab.click();
          showToast(`Click any photo in gallery to apply to "${card.querySelector('h3, h4')?.innerText || 'Card'}"`);
        }
      });
    });

    // 3. Overlay style toggle (Dark Hero / Light Glass)
    els.panelContent.querySelectorAll('[data-overlay-style]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.dataset.cardTarget, 10);
        const style = btn.dataset.overlayStyle;
        const card = cards[idx];
        if (card) {
          pushHistory();
          if (style === 'light') {
            card.classList.add('hero-light-card');
          } else {
            card.classList.remove('hero-light-card');
          }
          saveToStorage();
          renderCardPhotosDashboard();
          showToast(`Card #${idx + 1} set to ${style === 'light' ? 'Light Glass' : 'Dark Hero'}`);
        }
      });
    });

    // 4. Remove background photo
    els.panelContent.querySelectorAll('[data-card-remove]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.dataset.cardRemove, 10);
        const card = cards[idx];
        if (card) {
          pushHistory();
          card.style.backgroundImage = '';
          card.classList.remove('card-with-bg-photo', 'hero-light-card');
          card.style.removeProperty('--card-overlay-opacity');
          const docImg = card.querySelector('img.publication-doc-img');
          if (docImg) {
            card.classList.remove('publication-doc-card');
            docImg.remove();
          }
          saveToStorage();
          renderCardPhotosDashboard();
          showToast(`Removed photo from Card #${idx + 1}`);
        }
      });
    });

    // 4B. Individual Card Overlay Opacity Slider in Dashboard
    els.panelContent.querySelectorAll('[data-card-opacity]').forEach(slider => {
      slider.addEventListener('input', (e) => {
        const idx = parseInt(slider.dataset.cardOpacity, 10);
        const card = cards[idx];
        const val = e.target.value;
        const label = els.panelContent.querySelector(`[data-card-opacity-label="${idx}"]`);
        if (label) label.innerText = val + '%';
        if (card) {
          card.style.setProperty('--card-overlay-opacity', (val / 100).toString());
        }
        if (selectedCard === card && els.cardOverlayOpacitySlider) {
          els.cardOverlayOpacitySlider.value = val;
          if (els.cardOverlayOpacityVal) els.cardOverlayOpacityVal.innerText = val + '%';
        }
        triggerAutoSave();
      });
      slider.addEventListener('change', () => {
        pushHistory();
        saveToStorage();
        showToast('Overlay opacity saved to website!');
      });
    });

    // 4C. Master All Cards Overlay Opacity Slider
    const allOpacitySlider = document.getElementById('allCardsOpacitySlider');
    const allOpacityVal = document.getElementById('allCardsOpacityVal');
    if (allOpacitySlider) {
      allOpacitySlider.addEventListener('input', (e) => {
        const val = e.target.value;
        if (allOpacityVal) allOpacityVal.innerText = val + '%';
        cards.forEach((card, idx) => {
          card.style.setProperty('--card-overlay-opacity', (val / 100).toString());
          const indSlider = els.panelContent.querySelector(`[data-card-opacity="${idx}"]`);
          const indLabel = els.panelContent.querySelector(`[data-card-opacity-label="${idx}"]`);
          if (indSlider) indSlider.value = val;
          if (indLabel) indLabel.innerText = val + '%';
        });
        if (els.cardOverlayOpacitySlider) {
          els.cardOverlayOpacitySlider.value = val;
          if (els.cardOverlayOpacityVal) els.cardOverlayOpacityVal.innerText = val + '%';
        }
        triggerAutoSave();
      });
      allOpacitySlider.addEventListener('change', () => {
        pushHistory();
        saveToStorage();
        showToast('All cards overlay opacity saved!');
      });
    }

    // 4D. Master All Cards Width Slider & Aspect Ratio
    const allWidthSlider = document.getElementById('allCardsWidthSlider');
    const allWidthVal = document.getElementById('allCardsWidthVal');
    if (allWidthSlider) {
      allWidthSlider.addEventListener('input', (e) => {
        const val = e.target.value;
        if (allWidthVal) allWidthVal.innerText = val + 'px';
        cards.forEach(card => {
          card.style.maxWidth = val + 'px';
          card.style.width = '100%';
        });
        if (currentDoc) {
          const grid = currentDoc.getElementById('publicationsGrid') || currentDoc.querySelector('.publications-grid-custom, .grid-3');
          if (grid) {
            grid.style.setProperty('--card-max-width', val + 'px');
            if (val >= 480) {
              grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(min(100%, 540px), 1fr))';
            }
          }
        }
        if (els.cardWidthSlider) els.cardWidthSlider.value = val;
        if (els.cardWidthInput) els.cardWidthInput.value = val;
        if (els.cardWidthVal) els.cardWidthVal.innerText = val + 'px';
        triggerAutoSave();
      });
      allWidthSlider.addEventListener('change', () => {
        pushHistory();
        saveToStorage();
        showToast('All cards width saved to website!');
      });
    }

    els.panelContent.querySelectorAll('[data-all-ratio]').forEach(btn => {
      btn.addEventListener('click', () => {
        const ratio = btn.dataset.allRatio;
        pushHistory();
        cards.forEach(card => {
          if (ratio === 'auto') {
            card.style.aspectRatio = '';
            card.style.height = 'auto';
          } else {
            card.style.aspectRatio = ratio.replace('/', ' / ');
            card.style.height = 'auto';
          }
        });
        if (currentDoc && ratio !== 'auto') {
          const grid = currentDoc.getElementById('publicationsGrid') || currentDoc.querySelector('.publications-grid-custom, .grid-3');
          if (grid) grid.style.setProperty('--card-aspect-ratio', ratio.replace('/', ' / '));
        }
        els.panelContent.querySelectorAll('[data-all-ratio]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        saveToStorage();
        showToast(`All cards aspect ratio set to ${btn.innerText} & saved!`);
      });
    });

    // 5. Clicking a dashboard card item selects and scrolls to the card on canvas
    els.panelContent.querySelectorAll('.card-bg-dashboard-card').forEach(item => {
      item.addEventListener('click', (e) => {
        if (e.target.closest('input, button, .overlay-pill-toggle')) return;
        const idx = parseInt(item.dataset.cardIdx, 10);
        const card = cards[idx];
        if (card) {
          selectElement(card);
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    });

    // 6. Upload photo for ALL cards
    const btnUploadAll = document.getElementById('btnUploadAllCards');
    const allCardsInput = document.getElementById('allCardsFileInput');
    if (btnUploadAll && allCardsInput) {
      btnUploadAll.addEventListener('click', () => allCardsInput.click());
      allCardsInput.addEventListener('change', async () => {
        if (allCardsInput.files && allCardsInput.files[0]) {
          showToast('Uploading photo for ALL cards on this page...', 'hourglass_top');
          const photoUrl = await uploadPhotoToServer(allCardsInput.files[0]);
          pushHistory();
          cards.forEach(card => {
            const docImg = card.querySelector('img.publication-doc-img');
            if (docImg) {
              docImg.src = photoUrl;
            } else if (card.classList.contains('portfolio-card-item') || card.classList.contains('publication-doc-card')) {
              card.classList.add('publication-doc-card');
              card.classList.remove('card-with-bg-photo', 'hero-light-card');
              card.style.backgroundImage = '';
              const existingTitle = card.querySelector('h3, h4')?.innerText || card.getAttribute('data-title') || 'Publication Document';
              card.setAttribute('data-title', existingTitle);
              card.innerHTML = `<img src="${photoUrl}" alt="${existingTitle}" class="publication-doc-img">`;
            } else {
              card.style.backgroundImage = `url('${photoUrl}')`;
              card.classList.add('card-with-bg-photo');
            }
          });
          saveToStorage();
          renderCardPhotosDashboard();
          showToast('Applied photo to ALL cards & saved directly to website!', 'check_circle');
          allCardsInput.value = '';
        }
      });
    }
  }

  /** 2. Photo Dashboard (Change photos in the dashboard) */
  function renderPhotoDashboard() {
    let html = `
      <div class="photo-upload-dropzone" id="photoDropzone">
        <span class="material-symbols-outlined" style="font-size: 32px; color: var(--studio-accent-teal); margin-bottom: 8px;">cloud_upload</span>
        <div style="font-size: 0.82rem; font-weight: 700; color: #fff; margin-bottom: 4px;">Upload Custom Photo</div>
        <div style="font-size: 0.7rem; color: var(--studio-text-muted);">PNG, JPG, WebP from your computer</div>
        <input type="file" id="photoFileInput" accept="image/*" style="display: none;">
      </div>

      <div style="margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center;">
        <span style="font-size: 0.75rem; color: var(--studio-text-muted); font-weight: 700;">WEBSITE PHOTO GALLERY</span>
      </div>

      <div class="photo-grid" id="photoGrid">
    `;

    websitePhotos.forEach((photo, idx) => {
      html += `
        <div class="photo-card" data-photo-path="${photo.path}" title="Click to apply to selected element">
          <div class="photo-card-actions">
            <button class="photo-badge-btn" data-photo-action="card" title="Apply as Card Background">Card</button>
            <button class="photo-badge-btn" data-photo-action="section" title="Apply as Section Background">Sec</button>
          </div>
          <img src="${photo.path}" alt="${photo.name}" loading="lazy">
          <div class="photo-card-label">${photo.name}</div>
        </div>
      `;
    });

    html += '</div>';
    els.panelContent.innerHTML = html;

    // Dropzone logic
    const dropzone = document.getElementById('photoDropzone');
    const fileInput = document.getElementById('photoFileInput');

    if (dropzone && fileInput) {
      dropzone.addEventListener('click', () => fileInput.click());
      dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.style.borderColor = 'var(--studio-accent-blue)';
      });
      dropzone.addEventListener('dragleave', () => {
        dropzone.style.borderColor = 'var(--studio-border)';
      });
      dropzone.addEventListener('drop', async (e) => {
        e.preventDefault();
        dropzone.style.borderColor = 'var(--studio-border)';
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
          await handleUploadedFile(e.dataTransfer.files[0]);
        }
      });
      fileInput.addEventListener('change', async () => {
        if (fileInput.files && fileInput.files[0]) {
          await handleUploadedFile(fileInput.files[0]);
        }
      });
    }

    // Photo card clicks & action buttons
    const photoCards = els.panelContent.querySelectorAll('.photo-card');
    photoCards.forEach(card => {
      card.addEventListener('click', (e) => {
        const actionBtn = e.target.closest('[data-photo-action]');
        const photoPath = card.dataset.photoPath;
        if (actionBtn) {
          e.stopPropagation();
          const act = actionBtn.dataset.photoAction;
          if (act === 'card') {
            applyPhotoToCard(photoPath);
          } else if (act === 'section') {
            applyPhotoToSection(photoPath);
          }
          return;
        }
        applyPhotoToSelected(photoPath);
      });
    });
  }

  /** Upload Photo to Server & Disk */
  async function uploadPhotoToServer(file, prepareCard = false) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const base64Data = e.target.result;
        try {
          const result = await callServerApi('/api/upload-photo', {
            filename: file.name,
            data: base64Data,
            prepare_card: prepareCard
          });
          if (result.ok && result.data && result.data.url) {
            const relUrl = result.data.url;
            if (!websitePhotos.some(p => p.path === relUrl)) {
              websitePhotos.unshift({
                name: result.data.filename || file.name.slice(0, 20),
                path: relUrl
              });
              renderPhotoDashboard();
            }
            resolve(relUrl);
            return;
          }
        } catch (err) {
          console.warn('Upload API error, using data URL fallback:', err);
        }
        if (!websitePhotos.some(p => p.path === base64Data)) {
          websitePhotos.unshift({
            name: file.name.slice(0, 20),
            path: base64Data
          });
          renderPhotoDashboard();
        }
        resolve(base64Data);
      };
      reader.readAsDataURL(file);
    });
  }

  /** Handle Uploaded Photo */
  async function handleUploadedFile(file) {
    showToast('Uploading photo to assets/images/...', 'hourglass_top');
    const photoUrl = await uploadPhotoToServer(file);
    applyPhotoToSelected(photoUrl);
    showToast('Photo uploaded & applied to page!', 'check_circle');
  }

  /** Apply photo as Card Background with Hero-Style Translucent Overlay */
  function applyPhotoToCard(photoSrc, targetCard = null) {
    let card = targetCard || selectedCard;
    if (!card && currentDoc) {
      // Fallback: if user hasn't explicitly selected a card, take the first available card on this page
      card = currentDoc.querySelector('.portfolio-card-item, .testimonial-card, .service-card');
      if (card) {
        selectedCard = card;
        selectElement(card);
      }
    }

    if (!card) {
      alert('Please click on a Publication card or Testimonial card on the page first!');
      return;
    }

    pushHistory();
    const docImg = card.querySelector('img.publication-doc-img');
    if (docImg) {
      docImg.src = photoSrc;
    } else if (card.classList.contains('portfolio-card-item') || card.classList.contains('publication-doc-card')) {
      card.classList.add('publication-doc-card');
      card.classList.remove('card-with-bg-photo', 'hero-light-card');
      card.style.backgroundImage = '';
      const existingTitle = card.querySelector('h3, h4')?.innerText || card.getAttribute('data-title') || 'Publication Document';
      card.setAttribute('data-title', existingTitle);
      card.innerHTML = `<img src="${photoSrc}" alt="${existingTitle}" class="publication-doc-img">`;
    } else {
      card.style.backgroundImage = `url('${photoSrc}')`;
      card.classList.add('card-with-bg-photo');
    }

    if (card === selectedCard) {
      if (els.cardBgPreviewThumb) {
        els.cardBgPreviewThumb.src = photoSrc;
        els.cardBgPreviewThumb.style.display = 'block';
      }
      if (els.cardBgEmptyHint) els.cardBgEmptyHint.style.display = 'none';
    }

    showToast('Card background photo applied & saved to website!', 'wallpaper');
    // Save to disk directly
    saveToStorage();

    // Re-render card photos dashboard if open
    const activeDock = document.querySelector('.dock-btn.active');
    if (activeDock && activeDock.dataset.tab === 'card-photos') {
      renderCardPhotosDashboard();
    }
  }

  /** Apply photo as Section Background */
  function applyPhotoToSection(photoSrc, targetSection = null) {
    const sec = targetSection || selectedSection;
    if (!sec) {
      alert('Please select a section first!');
      return;
    }
    pushHistory();
    sec.style.backgroundImage = `url('${photoSrc}')`;
    sec.classList.add('section-with-bg');
    showToast('Section background photo applied & saved!', 'wallpaper');
    saveToStorage();
  }

  /** Apply Photo to Current Selection */
  function applyPhotoToSelected(photoSrc) {
    if (selectedCard) {
      applyPhotoToCard(photoSrc);
    } else if (selectedElement && selectedElement.tagName.toLowerCase() === 'img') {
      pushHistory();
      selectedElement.src = photoSrc;
      if (els.imgPreviewThumb) els.imgPreviewThumb.src = photoSrc;
      saveToStorage();
      showToast('Image photo replaced & saved!');
    } else if (selectedSection) {
      applyPhotoToSection(photoSrc);
    } else if (selectedElement) {
      pushHistory();
      selectedElement.style.backgroundImage = `url('${photoSrc}')`;
      saveToStorage();
      showToast('Background photo updated & saved!');
    } else {
      // If nothing selected, check if page has publication or testimonial cards
      const firstCard = currentDoc ? currentDoc.querySelector('.portfolio-card-item, .testimonial-card, .service-card') : null;
      if (firstCard) {
        selectElement(firstCard);
        applyPhotoToCard(photoSrc, firstCard);
        showToast('Applied to card & saved to website!');
      } else {
        alert('Please click on a Publication/Testimonial Card, Image, or Section on the canvas to apply this photo!');
      }
    }
  }

  /** 3. Add Elements Panel */
  function renderAddElementsPanel() {
    els.panelContent.innerHTML = `
      <div class="add-element-card" data-add="heading">
        <div class="add-element-icon"><span class="material-symbols-outlined">title</span></div>
        <div>
          <div class="add-element-title">Heading (H2)</div>
          <div class="add-element-desc">Bold section headline</div>
        </div>
      </div>

      <div class="add-element-card" data-add="paragraph">
        <div class="add-element-icon"><span class="material-symbols-outlined">format_paragraph</span></div>
        <div>
          <div class="add-element-title">Paragraph</div>
          <div class="add-element-desc">Body text block</div>
        </div>
      </div>

      <div class="add-element-card" data-add="button">
        <div class="add-element-icon"><span class="material-symbols-outlined">smart_button</span></div>
        <div>
          <div class="add-element-title">CTA Button</div>
          <div class="add-element-desc">Mint or outline action button</div>
        </div>
      </div>

      <div class="add-element-card" data-add="image">
        <div class="add-element-icon"><span class="material-symbols-outlined">image</span></div>
        <div>
          <div class="add-element-title">Image Card</div>
          <div class="add-element-desc">Rounded photo with shadow</div>
        </div>
      </div>

      <div class="add-element-card" data-add="badge">
        <div class="add-element-icon"><span class="material-symbols-outlined">verified</span></div>
        <div>
          <div class="add-element-title">Eyebrow Pill Badge</div>
          <div class="add-element-desc">MedZen style top pill tag</div>
        </div>
      </div>
    `;

    els.panelContent.querySelectorAll('.add-element-card').forEach(card => {
      card.addEventListener('click', () => {
        const type = card.dataset.add;
        insertElement(type);
      });
    });
  }

  /** Insert Element into page */
  function insertElement(type) {
    if (!currentDoc) return;
    pushHistory();

    const targetContainer = selectedElement ? 
      (selectedElement.closest('.container') || selectedSection || selectedElement) : 
      (currentDoc.querySelector('main .container') || currentDoc.body);

    let newEl = null;

    if (type === 'heading') {
      newEl = currentDoc.createElement('h2');
      newEl.className = 'section-title';
      newEl.innerText = 'New Research Excellence Heading';
      newEl.style.fontSize = '2.2rem';
      newEl.style.color = '#004E57';
    } else if (type === 'paragraph') {
      newEl = currentDoc.createElement('p');
      newEl.className = 'section-subtitle';
      newEl.innerText = 'Add your custom medical text, service highlights, or publication summary here.';
      newEl.style.fontSize = '1.05rem';
    } else if (type === 'button') {
      newEl = currentDoc.createElement('a');
      newEl.className = 'btn btn-mint btn-lg';
      newEl.href = '#';
      newEl.innerText = 'Get Started Today';
    } else if (type === 'image') {
      newEl = currentDoc.createElement('div');
      newEl.style.margin = '20px auto';
      newEl.style.textAlign = 'center';
      newEl.innerHTML = `<img src="assets/images/stethoscope-desk-closeup.jpg" alt="MedZen Research" style="max-width: 100%; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.12);">`;
    } else if (type === 'badge') {
      newEl = currentDoc.createElement('span');
      newEl.className = 'eyebrow-badge';
      newEl.innerHTML = `<span class="material-symbols-outlined" style="font-size: 16px;">verified</span> 100% Peer-Reviewed Rigor`;
    }

    if (newEl) {
      if (selectedElement && selectedElement.parentNode) {
        selectedElement.parentNode.insertBefore(newEl, selectedElement.nextSibling);
      } else {
        targetContainer.appendChild(newEl);
      }
      selectElement(newEl);
      triggerAutoSave();
      showToast('Element added to section!');
    }
  }

  /** Setup Frame Loader & Injected Styles */
  function setupFrameLoader() {
    els.previewFrame.addEventListener('load', onFrameLoaded);
  }

  function onFrameLoaded() {
    currentIframe = els.previewFrame;
    try {
      currentDoc = currentIframe.contentDocument || currentIframe.contentWindow.document;
    } catch (err) {
      console.error('Cannot access iframe:', err);
      return;
    }

    if (!currentDoc || !currentDoc.body) {
      setTimeout(onFrameLoaded, 60);
      return;
    }

    try {
      if (currentDoc.location && currentDoc.location.href === 'about:blank') {
        return;
      }
    } catch(e) {}

    if (els.previewFrame) {
      els.previewFrame.classList.remove('loading');
    }

    // Add in-editor-frame marker
    currentDoc.body.classList.add('in-editor-frame');
    
    // Ensure all modals and backdrops are forced closed
    currentDoc.querySelectorAll('.modal, .modal-backdrop, [id*="Modal"]').forEach(m => {
      m.classList.remove('open');
    });

    // Inject Studio Helper CSS into iframe
    injectEditorStyles(currentDoc);

    // Attach Click & Selection Listeners inside iframe
    attachFrameEvents(currentDoc);

    // Render active panel tab
    const curPage = els.pageSelect ? els.pageSelect.value : '';
    const activeTab = document.querySelector('.dock-btn.active');
    const tabName = activeTab ? activeTab.dataset.tab : 'sections';

    if (tabName === 'publications') {
      renderPublicationsDashboard();
    } else if (tabName === 'card-photos') {
      renderCardPhotosDashboard();
    } else if (tabName === 'photos') {
      renderPhotoDashboard();
    } else if (tabName === 'elements') {
      renderAddElementsPanel();
    } else {
      renderSectionsList();
    }

    showToast('Page loaded in Studio!');
  }

  /** Inject Studio Helper styles into iframe */
  function injectEditorStyles(doc) {
    const styleId = 'studio-injected-styles';
    let style = doc.getElementById(styleId);
    if (!style) {
      style = doc.createElement('style');
      style.id = styleId;
      doc.head.appendChild(style);
    }

    style.textContent = `
      /* Studio Injected Selection Styles */
      body:not(.studio-preview-mode) *:hover {
        outline: 1.5px dashed #0d99ff !important;
        outline-offset: 1px !important;
        cursor: pointer !important;
      }
      body:not(.studio-preview-mode) .studio-selected {
        outline: 2px solid #0d99ff !important;
        outline-offset: 2px !important;
        box-shadow: 0 0 0 4px rgba(13, 153, 255, 0.25) !important;
        position: relative !important;
      }
      body:not(.studio-preview-mode) .studio-selected::after {
        content: attr(data-studio-tag);
        position: absolute;
        top: -22px;
        left: 0;
        background: #0d99ff;
        color: #ffffff;
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-size: 10px;
        font-weight: 800;
        text-transform: uppercase;
        padding: 2px 6px;
        border-radius: 4px;
        pointer-events: none;
        z-index: 99999;
      }

      /* Suppress modals and floating launcher inside editor canvas */
      body.in-editor-frame .modal,
      body.in-editor-frame .modal-backdrop,
      body.in-editor-frame [id*="Modal"],
      body.in-editor-frame [class*="modal"] {
        display: none !important;
        visibility: hidden !important;
        pointer-events: none !important;
        opacity: 0 !important;
      }
      body.in-editor-frame .floating-editor-launch {
        display: none !important;
      }
    `;
  }

  /** Attach Click & Edit Listeners to Frame DOM */
  function attachFrameEvents(doc) {
    // Intercept clicks on capture phase to prevent component event handlers (like modal popups) from firing
    doc.addEventListener('click', (e) => {
      if (!isEditMode) {
        const link = e.target.closest('a');
        if (link && link.getAttribute('href') && !link.getAttribute('href').startsWith('#') && !link.getAttribute('href').startsWith('javascript:') && !link.target) {
          const href = link.getAttribute('href').replace(/^\/+/, '');
          const matchOption = Array.from(els.pageSelect.options).find(opt => opt.value === href || href.endsWith(opt.value));
          if (matchOption) {
            e.preventDefault();
            els.pageSelect.value = matchOption.value;
            loadPage(matchOption.value);
          }
        }
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();

      let target = e.target;
      if (target === doc.body || target === doc.documentElement) {
        deselectElement();
        return;
      }

      // If clicked inside a button, pill badge, info chip, or link, select the pill/button container
      const pillOrBtn = target.closest('.btn, .eyebrow-badge, .info-chip, button, a.btn');
      if (pillOrBtn && !target.isContentEditable) {
        target = pillOrBtn;
      }

      selectElement(target);
    }, true);

    // Double-click to edit text inline
    doc.addEventListener('dblclick', (e) => {
      if (!isEditMode) return;
      const target = e.target;
      if (target && isTextElement(target)) {
        target.contentEditable = 'true';
        target.focus();
        target.addEventListener('blur', () => {
          target.removeAttribute('contenteditable');
          pushHistory();
          triggerAutoSave();
        }, { once: true });
      }
    });

    // Auto-save on typing inside editable text elements
    doc.addEventListener('input', (e) => {
      if (isEditMode && e.target && e.target.isContentEditable) {
        triggerAutoSave();
      }
    });
  }

  function isTextElement(el) {
    const tag = el.tagName.toLowerCase();
    return ['h1','h2','h3','h4','h5','h6','p','span','a','li','strong','em','div'].includes(tag);
  }

  /** Select an Element */
  function selectElement(el) {
    if (!el || !currentDoc) return;

    // Deselect previous
    currentDoc.querySelectorAll('.studio-selected').forEach(elem => {
      elem.classList.remove('studio-selected');
      elem.removeAttribute('data-studio-tag');
    });

    selectedElement = el;
    selectedCard = el.closest('.service-card, .portfolio-card-item, .testimonial-card, .card-pillar, .card-feature, .card-hover, [class*="card"]');
    selectedSection = el.closest('section') || (el.tagName.toLowerCase() === 'section' ? el : null);

    const tag = el.tagName.toLowerCase();
    el.classList.add('studio-selected');
    el.setAttribute('data-studio-tag', tag);

    // Update Right Inspector UI
    updateInspectorUI(el);

    // Auto-open Publications tab if clicking an empty publication slot
    if (el.closest('.publication-upload-slot')) {
      const pubTab = document.querySelector('.dock-btn[data-tab="publications"]');
      if (pubTab && !pubTab.classList.contains('active')) {
        pubTab.click();
      }
    }
  }

  function deselectElement() {
    if (currentDoc) {
      currentDoc.querySelectorAll('.studio-selected').forEach(elem => {
        elem.classList.remove('studio-selected');
        elem.removeAttribute('data-studio-tag');
      });
    }
    selectedElement = null;
    selectedSection = null;
    selectedCard = null;
    els.inspectorEmpty.style.display = 'block';
    els.inspectorControls.style.display = 'none';
  }

  /** Update Inspector Panel with Selected Element Computed Styles */
  function updateInspectorUI(el) {
    els.inspectorEmpty.style.display = 'none';
    els.inspectorControls.style.display = 'block';

    const tag = el.tagName.toLowerCase();
    els.selectedTagBadge.innerText = tag.toUpperCase();

    const computed = currentDoc.defaultView.getComputedStyle(el);

    // 1. Typography
    const textAlign = computed.textAlign || 'left';
    els.fontAlignBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.fontAlign === textAlign);
    });

    const fontSizePx = Math.round(parseFloat(computed.fontSize)) || 16;
    els.fontSizeSlider.value = fontSizePx;
    els.fontSizeInput.value = fontSizePx;

    const rgbColor = computed.color;
    const hexColor = rgbToHex(rgbColor);
    els.fontColorPicker.value = hexColor;
    els.fontColorHex.value = hexColor;

    const weight = computed.fontWeight || '400';
    els.fontWeightSelect.value = normalizeFontWeight(weight);

    // 2. Section Controls (Figma Auto Layout)
    if (selectedSection) {
      els.sectionInspector.style.display = 'block';
      const secHeading = selectedSection.querySelector('h1, h2, h3');
      els.sectionNameLabel.innerText = secHeading ? secHeading.innerText.slice(0, 20) : selectedSection.tagName;

      const secComputed = currentDoc.defaultView.getComputedStyle(selectedSection);
      const secPadTop = Math.round(parseFloat(secComputed.paddingTop)) || 0;
      const secPadBot = Math.round(parseFloat(secComputed.paddingBottom)) || 0;

      els.sectionPadTopSlider.value = secPadTop;
      els.sectionPadTopInput.value = secPadTop;
      els.sectionPadBotSlider.value = secPadBot;
      els.sectionPadBotInput.value = secPadBot;

      const secBgColor = rgbToHex(secComputed.backgroundColor);
      els.sectionBgColorPicker.value = secBgColor;
      els.sectionBgColorHex.value = secBgColor;
    } else {
      els.sectionInspector.style.display = 'none';
    }

    // 3. Button & Pill Badge Controls
    const isPill = el.classList.contains('eyebrow-badge') || el.classList.contains('info-chip') || el.classList.contains('badge') || el.closest('.eyebrow-badge, .info-chip');
    const isBtn = tag === 'button' || tag === 'a' || el.classList.contains('btn');

    if (isPill || isBtn) {
      els.btnInspector.style.display = 'block';
      els.selectedTagBadge.innerText = isPill ? 'PILL BADGE' : (tag === 'button' || el.classList.contains('btn') ? 'BUTTON' : tag.toUpperCase());
      els.btnTextVal.value = el.innerText.trim();

      const btnBg = rgbToHex(computed.backgroundColor);
      els.btnBgColorPicker.value = btnBg;
      els.btnBgColorHex.value = btnBg;

      const btnTextClr = rgbToHex(computed.color);
      els.btnTextColorPicker.value = btnTextClr;
      els.btnTextColorHex.value = btnTextClr;

      const btnBorderClr = rgbToHex(computed.borderColor);
      if (els.btnBorderColorPicker) {
        els.btnBorderColorPicker.value = btnBorderClr;
        els.btnBorderColorHex.value = btnBorderClr;
      }

      const radiusPx = Math.round(parseFloat(computed.borderRadius)) || 0;
      els.btnRadiusSlider.value = Math.min(radiusPx, 100);
      els.btnRadiusInput.value = radiusPx;

      const padLeft = Math.round(parseFloat(computed.paddingLeft)) || 16;
      if (els.btnPadXSlider) {
        els.btnPadXSlider.value = padLeft;
        els.btnPadXInput.value = padLeft;
      }

      const padTop = Math.round(parseFloat(computed.paddingTop)) || 8;
      if (els.btnPadYSlider) {
        els.btnPadYSlider.value = padTop;
        els.btnPadYInput.value = padTop;
      }
    } else {
      els.btnInspector.style.display = 'none';
    }

    // Card Background Photo & Dimension Controls
    if (selectedCard && els.cardBgInspector) {
      els.cardBgInspector.style.display = 'block';

      const titleEl = selectedCard.querySelector('h3, h4, .testimonial-author-name') || selectedCard.querySelector('.service-card-title');
      const docImgEl = selectedCard.querySelector('img.publication-doc-img, img');
      const cardTitle = selectedCard.getAttribute('data-title') || (titleEl ? titleEl.innerText.trim().slice(0, 24) : (docImgEl?.alt ? docImgEl.alt.slice(0, 24) : 'Card Container'));
      if (els.cardNameLabel) els.cardNameLabel.innerText = cardTitle;

      const cardComputed = currentDoc.defaultView.getComputedStyle(selectedCard);
      const bgImg = selectedCard.style.backgroundImage || cardComputed.backgroundImage;
      if (bgImg && bgImg !== 'none') {
        const cleanUrl = bgImg.replace(/^url\(['"]?(.*?)['"]?\)$/i, '$1');
        if (els.cardBgPreviewThumb) {
          els.cardBgPreviewThumb.src = cleanUrl;
          els.cardBgPreviewThumb.style.display = 'block';
        }
        if (els.cardBgEmptyHint) els.cardBgEmptyHint.style.display = 'none';
      } else if (docImgEl) {
        if (els.cardBgPreviewThumb) {
          els.cardBgPreviewThumb.src = docImgEl.src;
          els.cardBgPreviewThumb.style.display = 'block';
        }
        if (els.cardBgEmptyHint) els.cardBgEmptyHint.style.display = 'none';
      } else {
        if (els.cardBgPreviewThumb) els.cardBgPreviewThumb.style.display = 'none';
        if (els.cardBgEmptyHint) els.cardBgEmptyHint.style.display = 'block';
      }

      // Card Click Redirect Link
      const cardLink = selectedCard.getAttribute('href') || selectedCard.getAttribute('data-card-link') || '';
      if (els.cardRedirectUrlInput) els.cardRedirectUrlInput.value = cardLink;

      // Card Image Auto-Fit Mode
      const docImgElRef = selectedCard.querySelector('img.publication-doc-img, img');
      const curImgFit = (docImgElRef && docImgElRef.style.objectFit) || 'cover';
      if (els.cardImgFitBtns) {
        els.cardImgFitBtns.forEach(b => {
          b.classList.toggle('active', b.dataset.imgFit === curImgFit);
        });
      }

      // Card Display Mode: Document Showcase vs Frosted Overlay
      const isDocMode = selectedCard.classList.contains('publication-doc-card') || !!selectedCard.querySelector('img.publication-doc-img');
      if (els.btnCardModeDoc && els.btnCardModeOverlay) {
        els.btnCardModeDoc.classList.toggle('active', isDocMode);
        els.btnCardModeOverlay.classList.toggle('active', !isDocMode);
      }

      // Card Width
      const rawWidth = parseInt(selectedCard.style.maxWidth || cardComputed.maxWidth, 10) || 600;
      if (els.cardWidthSlider) els.cardWidthSlider.value = rawWidth;
      if (els.cardWidthInput) els.cardWidthInput.value = rawWidth;
      if (els.cardWidthVal) els.cardWidthVal.innerText = rawWidth + 'px';

      // Card Height
      let rawHeight = Math.round(parseFloat(selectedCard.style.height || cardComputed.height));
      if (!rawHeight || isNaN(rawHeight) || rawHeight < 50) {
        rawHeight = Math.round(rawWidth * 414 / 600);
      }
      if (els.cardHeightSlider) els.cardHeightSlider.value = rawHeight;
      if (els.cardHeightInput) els.cardHeightInput.value = rawHeight;
      if (els.cardHeightVal) els.cardHeightVal.innerText = rawHeight + 'px';

      // Card Size Presets & Ratio
      const curRatio = (selectedCard.style.aspectRatio || '').replace(/\s+/g, '');
      const is600x414 = (rawWidth >= 580 && rawWidth <= 620) && (rawHeight >= 400 && rawHeight <= 430);
      const is486x340 = (rawWidth >= 470 && rawWidth <= 500) && (rawHeight >= 320 && rawHeight <= 360);

      if (els.cardSizeBtns) {
        els.cardSizeBtns.forEach(b => {
          const sz = b.dataset.cardSize;
          if (sz === '600x414') b.classList.toggle('active', is600x414 || (!curRatio && !is486x340));
          else if (sz === '486x340') b.classList.toggle('active', is486x340);
        });
      }

      // Card Aspect Ratio / Height
      if (els.cardRatioBtns) {
        els.cardRatioBtns.forEach(b => {
          const bRatio = b.dataset.cardRatio.replace(/\s+/g, '');
          b.classList.toggle('active', curRatio ? bRatio === curRatio : false);
        });
      }

      const isLight = selectedCard.classList.contains('hero-light-card');
      if (els.btnOverlayLight && els.btnOverlayDark) {
        els.btnOverlayLight.classList.toggle('active', isLight);
        els.btnOverlayDark.classList.toggle('active', !isLight);
      }

      const rawOp = selectedCard.style.getPropertyValue('--card-overlay-opacity');
      const cardOpPercent = Math.round((rawOp ? parseFloat(rawOp) : 0.82) * 100);
      if (els.cardOverlayOpacitySlider) {
        els.cardOverlayOpacitySlider.value = cardOpPercent;
      }
      if (els.cardOverlayOpacityVal) {
        els.cardOverlayOpacityVal.innerText = cardOpPercent + '%';
      }

      // Ensure top of inspector is visible
      if (els.rightPanel) els.rightPanel.scrollTop = 0;
    } else if (els.cardBgInspector) {
      els.cardBgInspector.style.display = 'none';
    }

    // 4. Image Controls
    if (tag === 'img') {
      els.imgInspector.style.display = 'block';
      els.imgPreviewThumb.src = el.src;

      const radiusPx = Math.round(parseFloat(computed.borderRadius)) || 0;
      els.imgRadiusSlider.value = radiusPx;
      els.imgRadiusInput.value = radiusPx;
    } else {
      els.imgInspector.style.display = 'none';
    }
  }

  /** Normalize font weight */
  function normalizeFontWeight(w) {
    if (w === 'normal') return '400';
    if (w === 'bold') return '700';
    return w;
  }

  /** RGB to Hex helper */
  function rgbToHex(rgb) {
    if (!rgb || rgb === 'transparent' || rgb.startsWith('rgba(0, 0, 0, 0)')) return '#000000';
    const match = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (!match) return '#000000';
    const r = parseInt(match[1]).toString(16).padStart(2, '0');
    const g = parseInt(match[2]).toString(16).padStart(2, '0');
    const b = parseInt(match[3]).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
  }

  /** Setup All Inspector Property Change Events */
  function setupInspectorEvents() {
    // --- Typography Events ---
    // Alignment
    els.fontAlignBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (!selectedElement) return;
        pushHistory();
        const align = btn.dataset.fontAlign;
        selectedElement.style.textAlign = align;
        els.fontAlignBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        triggerAutoSave();
      });
    });

    // Font Size
    const updateFontSize = (val) => {
      if (!selectedElement) return;
      selectedElement.style.fontSize = val + 'px';
      els.fontSizeSlider.value = val;
      els.fontSizeInput.value = val;
      triggerAutoSave();
    };

    els.fontSizeSlider.addEventListener('input', (e) => {
      pushHistory();
      updateFontSize(e.target.value);
    });

    els.fontSizeInput.addEventListener('change', (e) => {
      pushHistory();
      updateFontSize(e.target.value);
    });

    // Font Color
    const updateFontColor = (hex) => {
      if (!selectedElement) return;
      selectedElement.style.color = hex;
      els.fontColorPicker.value = hex;
      els.fontColorHex.value = hex;
      triggerAutoSave();
    };

    els.fontColorPicker.addEventListener('input', (e) => {
      pushHistory();
      updateFontColor(e.target.value);
    });

    els.fontColorHex.addEventListener('change', (e) => {
      pushHistory();
      updateFontColor(e.target.value);
    });

    // Palette preset swatches
    document.querySelectorAll('.preset-chip[data-color]').forEach(chip => {
      chip.addEventListener('click', () => {
        pushHistory();
        updateFontColor(chip.dataset.color);
      });
    });

    // Font Weight
    els.fontWeightSelect.addEventListener('change', (e) => {
      if (!selectedElement) return;
      pushHistory();
      selectedElement.style.fontWeight = e.target.value;
      triggerAutoSave();
    });

    // Line Height
    els.lineHeightSlider.addEventListener('input', (e) => {
      if (!selectedElement) return;
      selectedElement.style.lineHeight = e.target.value;
      els.lineHeightVal.innerText = e.target.value;
      triggerAutoSave();
    });

    // --- Figma-Style Section Alignment Events ---
    // Section Text/Content Align
    els.sectionAlignBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (!selectedSection) return;
        pushHistory();
        const align = btn.dataset.sectionAlign;
        selectedSection.style.textAlign = align;
        // Also apply to main child container if flex
        const container = selectedSection.querySelector('.container') || selectedSection;
        if (container) {
          container.style.textAlign = align;
        }
        els.sectionAlignBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        triggerAutoSave();
        showToast(`Section aligned: ${align}`);
      });
    });

    // Section Justify (Figma auto layout flex)
    els.sectionJustifyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (!selectedSection) return;
        pushHistory();
        const justify = btn.dataset.sectionJustify;
        const gridOrFlex = selectedSection.querySelector('.grid, .hero-grid, .flex, .container') || selectedSection;
        gridOrFlex.style.display = 'flex';
        gridOrFlex.style.justifyContent = justify;
        els.sectionJustifyBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        triggerAutoSave();
      });
    });

    // Section Padding Top
    const updateSecPadTop = (val) => {
      if (!selectedSection) return;
      selectedSection.style.paddingTop = val + 'px';
      els.sectionPadTopSlider.value = val;
      els.sectionPadTopInput.value = val;
      triggerAutoSave();
    };
    els.sectionPadTopSlider.addEventListener('input', (e) => {
      pushHistory();
      updateSecPadTop(e.target.value);
    });
    els.sectionPadTopInput.addEventListener('change', (e) => {
      pushHistory();
      updateSecPadTop(e.target.value);
    });

    // Section Padding Bottom
    const updateSecPadBot = (val) => {
      if (!selectedSection) return;
      selectedSection.style.paddingBottom = val + 'px';
      els.sectionPadBotSlider.value = val;
      els.sectionPadBotInput.value = val;
      triggerAutoSave();
    };
    els.sectionPadBotSlider.addEventListener('input', (e) => {
      pushHistory();
      updateSecPadBot(e.target.value);
    });
    els.sectionPadBotInput.addEventListener('change', (e) => {
      pushHistory();
      updateSecPadBot(e.target.value);
    });

    // Section Background Color
    els.sectionBgColorPicker.addEventListener('input', (e) => {
      if (!selectedSection) return;
      pushHistory();
      selectedSection.style.backgroundColor = e.target.value;
      els.sectionBgColorHex.value = e.target.value;
      triggerAutoSave();
    });

    // Section Move Up / Down
    if (els.btnSectionMoveUp) {
      els.btnSectionMoveUp.addEventListener('click', () => {
        if (selectedSection) moveSectionUp(selectedSection);
      });
    }
    if (els.btnSectionMoveDown) {
      els.btnSectionMoveDown.addEventListener('click', () => {
        if (selectedSection) moveSectionDown(selectedSection);
      });
    }

    // DELETE SECTION Button
    if (els.btnDeleteSection) {
      els.btnDeleteSection.addEventListener('click', () => {
        if (selectedSection) deleteSection(selectedSection);
      });
    }

    // --- Button & Pill Size Controls ---
    if (els.btnTextVal) {
      els.btnTextVal.addEventListener('input', (e) => {
        if (!selectedElement) return;
        selectedElement.innerText = e.target.value;
        triggerAutoSave();
      });
    }

    if (els.btnBgColorPicker) {
      els.btnBgColorPicker.addEventListener('input', (e) => {
        if (!selectedElement) return;
        pushHistory();
        selectedElement.style.backgroundColor = e.target.value;
        if (els.btnBgColorHex) els.btnBgColorHex.value = e.target.value;
        triggerAutoSave();
      });
    }

    if (els.btnTextColorPicker) {
      els.btnTextColorPicker.addEventListener('input', (e) => {
        if (!selectedElement) return;
        pushHistory();
        selectedElement.style.color = e.target.value;
        if (els.btnTextColorHex) els.btnTextColorHex.value = e.target.value;
        triggerAutoSave();
      });
    }

    if (els.btnBorderColorPicker) {
      els.btnBorderColorPicker.addEventListener('input', (e) => {
        if (!selectedElement) return;
        pushHistory();
        selectedElement.style.borderColor = e.target.value;
        selectedElement.style.borderWidth = '1.5px';
        selectedElement.style.borderStyle = 'solid';
        els.btnBorderColorHex.value = e.target.value;
        triggerAutoSave();
      });
    }

    // Horizontal Padding (Pill Width)
    const updateBtnPadX = (val) => {
      if (!selectedElement) return;
      selectedElement.style.paddingLeft = val + 'px';
      selectedElement.style.paddingRight = val + 'px';
      if (els.btnPadXSlider) els.btnPadXSlider.value = val;
      if (els.btnPadXInput) els.btnPadXInput.value = val;
      triggerAutoSave();
    };
    if (els.btnPadXSlider) els.btnPadXSlider.addEventListener('input', (e) => { pushHistory(); updateBtnPadX(e.target.value); });
    if (els.btnPadXInput) els.btnPadXInput.addEventListener('change', (e) => { pushHistory(); updateBtnPadX(e.target.value); });

    // Vertical Padding (Pill Height)
    const updateBtnPadY = (val) => {
      if (!selectedElement) return;
      selectedElement.style.paddingTop = val + 'px';
      selectedElement.style.paddingBottom = val + 'px';
      if (els.btnPadYSlider) els.btnPadYSlider.value = val;
      if (els.btnPadYInput) els.btnPadYInput.value = val;
      triggerAutoSave();
    };
    if (els.btnPadYSlider) els.btnPadYSlider.addEventListener('input', (e) => { pushHistory(); updateBtnPadY(e.target.value); });
    if (els.btnPadYInput) els.btnPadYInput.addEventListener('change', (e) => { pushHistory(); updateBtnPadY(e.target.value); });

    // Button & Pill Size presets
    els.btnSizePresets.forEach(btn => {
      btn.addEventListener('click', () => {
        if (!selectedElement) return;
        pushHistory();
        const size = btn.dataset.btnSize;
        if (size === 'sm') {
          selectedElement.style.padding = '4px 14px';
          selectedElement.style.fontSize = '0.75rem';
          updateBtnPadX(14);
          updateBtnPadY(4);
        } else if (size === 'md') {
          selectedElement.style.padding = '8px 20px';
          selectedElement.style.fontSize = '0.86rem';
          updateBtnPadX(20);
          updateBtnPadY(8);
        } else if (size === 'lg') {
          selectedElement.style.padding = '12px 28px';
          selectedElement.style.fontSize = '1rem';
          updateBtnPadX(28);
          updateBtnPadY(12);
        } else if (size === 'xl') {
          selectedElement.style.padding = '16px 36px';
          selectedElement.style.fontSize = '1.15rem';
          updateBtnPadX(36);
          updateBtnPadY(16);
        }
        els.btnSizePresets.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        triggerAutoSave();
        showToast(`Pill size: ${size.toUpperCase()}`);
      });
    });

    // Border Radius
    const updateBtnRadius = (val) => {
      if (!selectedElement) return;
      selectedElement.style.borderRadius = val + 'px';
      els.btnRadiusSlider.value = Math.min(val, 100);
      els.btnRadiusInput.value = val;
      triggerAutoSave();
    };
    els.btnRadiusSlider.addEventListener('input', (e) => {
      pushHistory();
      updateBtnRadius(e.target.value);
    });
    els.btnRadiusInput.addEventListener('change', (e) => {
      pushHistory();
      updateBtnRadius(e.target.value);
    });

    // Set Perfect Pill Shape (999px)
    if (els.btnMakeFullPill) {
      els.btnMakeFullPill.addEventListener('click', () => {
        if (!selectedElement) return;
        pushHistory();
        updateBtnRadius(999);
        triggerAutoSave();
        showToast('Perfect pill shape applied (999px)');
      });
    }

    // --- Card Background Photo Controls (Hero Style) ---
    if (els.btnUploadCardBg && els.cardBgFileInput) {
      els.btnUploadCardBg.addEventListener('click', () => {
        if (!selectedCard) {
          alert('Please click on a Publication card or Testimonial card on the page first!');
          return;
        }
        els.cardBgFileInput.click();
      });
      els.cardBgFileInput.addEventListener('change', async () => {
        if (els.cardBgFileInput.files && els.cardBgFileInput.files[0]) {
          showToast('Uploading photo for card background...', 'hourglass_top');
          const photoUrl = await uploadPhotoToServer(els.cardBgFileInput.files[0]);
          applyPhotoToCard(photoUrl);
          els.cardBgFileInput.value = '';
        }
      });
    }

    if (els.btnGalleryCardBg) {
      els.btnGalleryCardBg.addEventListener('click', () => {
        const photoDockBtn = document.querySelector('.dock-btn[data-tab="photos"]');
        if (photoDockBtn) photoDockBtn.click();
        showToast('Click any photo in the gallery to apply to this card!');
      });
    }

    if (els.btnOverlayLight && els.btnOverlayDark) {
      els.btnOverlayLight.addEventListener('click', () => {
        if (!selectedCard) return;
        pushHistory();
        selectedCard.classList.add('hero-light-card');
        els.btnOverlayLight.classList.add('active');
        els.btnOverlayDark.classList.remove('active');
        saveToStorage();
        showToast('Card set to Light Frosted Glass overlay & saved!');
      });
      els.btnOverlayDark.addEventListener('click', () => {
        if (!selectedCard) return;
        pushHistory();
        selectedCard.classList.remove('hero-light-card');
        els.btnOverlayDark.classList.add('active');
        els.btnOverlayLight.classList.remove('active');
        saveToStorage();
        showToast('Card set to Dark Hero Oceanic Teal overlay & saved!');
      });
    }

    if (els.cardOverlayOpacitySlider) {
      els.cardOverlayOpacitySlider.addEventListener('input', (e) => {
        if (!selectedCard) return;
        const val = e.target.value;
        if (els.cardOverlayOpacityVal) els.cardOverlayOpacityVal.innerText = val + '%';
        selectedCard.style.setProperty('--card-overlay-opacity', (val / 100).toString());

        // Sync with left dashboard card item
        if (currentDoc) {
          const allCards = Array.from(currentDoc.querySelectorAll('.portfolio-card-item, .testimonial-card, .service-card'));
          const cardIdx = allCards.indexOf(selectedCard);
          if (cardIdx !== -1) {
            const indSlider = els.panelContent.querySelector(`[data-card-opacity="${cardIdx}"]`);
            const indLabel = els.panelContent.querySelector(`[data-card-opacity-label="${cardIdx}"]`);
            if (indSlider) indSlider.value = val;
            if (indLabel) indLabel.innerText = val + '%';
          }
        }
      });
      els.cardOverlayOpacitySlider.addEventListener('change', () => {
        pushHistory();
        saveToStorage();
        showToast('Overlay opacity saved to website!');
      });
    }

    // Card Click Redirect Link Save & Test
    if (els.btnSaveCardLink) {
      els.btnSaveCardLink.addEventListener('click', () => {
        if (!selectedCard) {
          alert('Please click on a publication card first!');
          return;
        }
        pushHistory();
        const linkVal = els.cardRedirectUrlInput ? els.cardRedirectUrlInput.value.trim() : '';
        if (linkVal) {
          selectedCard.setAttribute('data-card-link', linkVal);

          // Ensure card-link-badge exists on card as interactive anchor
          let badge = selectedCard.querySelector('.card-link-badge');
          if (!badge) {
            badge = currentDoc.createElement('a');
            badge.className = 'card-link-badge';
            badge.setAttribute('target', '_blank');
            badge.setAttribute('rel', 'noopener noreferrer');
            badge.setAttribute('title', 'Open article in new tab');
            badge.setAttribute('onclick', 'event.stopPropagation()');
            badge.innerHTML = `<span class="material-symbols-outlined" style="font-size: 13px;">open_in_new</span><span>View Article</span>`;
            selectedCard.appendChild(badge);
          }
          badge.setAttribute('href', linkVal);
        } else {
          if (selectedCard.tagName.toLowerCase() === 'a') {
            selectedCard.removeAttribute('href');
          }
          selectedCard.removeAttribute('data-card-link');
          const badge = selectedCard.querySelector('.card-link-badge');
          if (badge) badge.remove();
        }
        saveToStorage();
        showToast('Card link saved & active! "View Article" badge will open this URL.', 'link');
        renderPublicationsDashboard();
      });
    }

    if (els.btnTestCardLink) {
      els.btnTestCardLink.addEventListener('click', () => {
        const url = els.cardRedirectUrlInput ? els.cardRedirectUrlInput.value.trim() : '';
        if (!url) {
          alert('Please enter a valid link first (e.g. https://pubmed.ncbi.nlm.nih.gov/ or DOI)');
          return;
        }
        window.open(url, '_blank');
      });
    }

    // Image Auto-Fit Mode: Cover (Fill) vs Contain vs Stretch
    if (els.cardImgFitBtns) {
      els.cardImgFitBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          pushHistory();
          const fitMode = btn.dataset.imgFit;
          if (selectedCard) {
            const docImg = selectedCard.querySelector('img.publication-doc-img, img');
            if (docImg) docImg.style.objectFit = fitMode;
            selectedCard.style.setProperty('--card-img-fit', fitMode);
          }
          // Update all publication images on page
          if (currentDoc) {
            currentDoc.querySelectorAll('.publication-doc-img').forEach(img => {
              img.style.objectFit = fitMode;
            });
            const grid = currentDoc.getElementById('publicationsGrid');
            if (grid) grid.style.setProperty('--card-img-fit', fitMode);
          }
          els.cardImgFitBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          saveToStorage();
          showToast(`Image auto-fit updated to ${fitMode.toUpperCase()} & saved!`, 'fit_screen');
        });
      });
    }

    // Card Display Mode: Document Showcase vs Hero Frosted
    if (els.btnCardModeDoc && els.btnCardModeOverlay) {
      els.btnCardModeDoc.addEventListener('click', () => {
        if (!selectedCard) return;
        pushHistory();
        selectedCard.classList.add('publication-doc-card');
        selectedCard.classList.remove('card-with-bg-photo', 'hero-light-card');
        selectedCard.style.backgroundImage = '';
        els.btnCardModeDoc.classList.add('active');
        els.btnCardModeOverlay.classList.remove('active');
        saveToStorage();
        showToast('Card set to Document Showcase (No Overlying Text)');
      });
      els.btnCardModeOverlay.addEventListener('click', () => {
        if (!selectedCard) return;
        pushHistory();
        selectedCard.classList.remove('publication-doc-card');
        selectedCard.classList.add('card-with-bg-photo');
        els.btnCardModeOverlay.classList.add('active');
        els.btnCardModeDoc.classList.remove('active');
        saveToStorage();
        showToast('Card set to Hero Frosted Overlay');
      });
    }

    // Card Dimensions: Width & Height Controls (Figma / Canva Style)
    const updateCardDimensions = (w, h, applyAll = false) => {
      w = parseInt(w, 10) || 600;
      if (h !== 'auto') h = parseInt(h, 10) || 414;

      const cardsToUpdate = (applyAll && currentDoc)
        ? Array.from(currentDoc.querySelectorAll('.portfolio-card-item, .publication-doc-card, .publication-upload-slot'))
        : (selectedCard ? [selectedCard] : []);

      if (cardsToUpdate.length === 0 && currentDoc) {
        cardsToUpdate.push(...Array.from(currentDoc.querySelectorAll('.portfolio-card-item, .publication-doc-card, .publication-upload-slot')));
      }

      cardsToUpdate.forEach(card => {
        card.style.maxWidth = w + 'px';
        card.style.width = '100%';
        if (h === 'auto') {
          card.style.aspectRatio = '';
          card.style.height = 'auto';
        } else {
          card.style.aspectRatio = `${w} / ${h}`;
          card.style.height = 'auto';
        }
      });

      // Update grid columns so cards can expand to full width
      if (currentDoc) {
        const grid = currentDoc.getElementById('publicationsGrid') || currentDoc.querySelector('.publications-grid-custom, .grid-3');
        if (grid) {
          grid.style.setProperty('--card-max-width', w + 'px');
          if (h !== 'auto') grid.style.setProperty('--card-aspect-ratio', `${w} / ${h}`);
          grid.style.display = 'grid';
          if (w >= 480) {
            grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(min(100%, 540px), 1fr))';
          }
        }
      }

      if (els.cardWidthSlider) els.cardWidthSlider.value = w;
      if (els.cardWidthInput) els.cardWidthInput.value = w;
      if (els.cardWidthVal) els.cardWidthVal.innerText = w + 'px';

      if (h !== 'auto') {
        if (els.cardHeightSlider) els.cardHeightSlider.value = h;
        if (els.cardHeightInput) els.cardHeightInput.value = h;
        if (els.cardHeightVal) els.cardHeightVal.innerText = h + 'px';
      }

      triggerAutoSave();
    };

    if (els.cardWidthSlider) {
      els.cardWidthSlider.addEventListener('input', e => {
        const curH = els.cardHeightInput ? (parseInt(els.cardHeightInput.value, 10) || 414) : 414;
        updateCardDimensions(e.target.value, curH);
      });
      els.cardWidthSlider.addEventListener('change', () => { pushHistory(); saveToStorage(); });
    }
    if (els.cardWidthInput) {
      els.cardWidthInput.addEventListener('change', e => {
        pushHistory();
        const curH = els.cardHeightInput ? (parseInt(els.cardHeightInput.value, 10) || 414) : 414;
        updateCardDimensions(e.target.value, curH);
        saveToStorage();
      });
    }

    if (els.cardHeightSlider) {
      els.cardHeightSlider.addEventListener('input', e => {
        const curW = els.cardWidthInput ? (parseInt(els.cardWidthInput.value, 10) || 600) : 600;
        updateCardDimensions(curW, e.target.value);
      });
      els.cardHeightSlider.addEventListener('change', () => { pushHistory(); saveToStorage(); });
    }
    if (els.cardHeightInput) {
      els.cardHeightInput.addEventListener('change', e => {
        pushHistory();
        const curW = els.cardWidthInput ? (parseInt(els.cardWidthInput.value, 10) || 600) : 600;
        updateCardDimensions(curW, e.target.value);
        saveToStorage();
      });
    }

    // Card Size Presets (600x414 vs 486x340)
    if (els.cardSizeBtns) {
      els.cardSizeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          pushHistory();
          const sz = btn.dataset.cardSize;
          if (sz === '600x414') {
            updateCardDimensions(600, 414, true);
            showToast('Card size updated to 600 × 414 px & saved!', 'aspect_ratio');
          } else if (sz === '486x340') {
            updateCardDimensions(486, 340, true);
            showToast('Card size updated to 486 × 340 px & saved!', 'aspect_ratio');
          }
          els.cardSizeBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          saveToStorage();
        });
      });
    }

    // Card Ratio Presets
    if (els.cardRatioBtns) {
      els.cardRatioBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          pushHistory();
          const ratio = btn.dataset.cardRatio;
          const curW = els.cardWidthInput ? (parseInt(els.cardWidthInput.value, 10) || 600) : 600;
          if (ratio === 'auto') {
            updateCardDimensions(curW, 'auto');
          } else if (ratio === '16/9') {
            updateCardDimensions(curW, Math.round(curW * 9 / 16));
          } else if (ratio === '4/3') {
            updateCardDimensions(curW, Math.round(curW * 3 / 4));
          }
          els.cardRatioBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          saveToStorage();
          showToast(`Card aspect ratio: ${btn.innerText}`);
        });
      });
    }

    // Apply to ALL Publication Cards Button
    if (els.btnApplySizeAllCards) {
      els.btnApplySizeAllCards.addEventListener('click', () => {
        pushHistory();
        const curW = els.cardWidthInput ? (parseInt(els.cardWidthInput.value, 10) || 600) : 600;
        const curH = els.cardHeightInput ? (parseInt(els.cardHeightInput.value, 10) || 414) : 414;
        updateCardDimensions(curW, curH, true);
        saveToStorage();
        showToast(`All publication cards resized to ${curW} × ${curH} px & saved to website!`, 'select_all');
      });
    }

    // Card Corner Radius Slider & Input
    const updateCardRadius = (r) => {
      if (!selectedCard) return;
      selectedCard.style.borderRadius = r + 'px';
      if (els.cardRadiusSlider) els.cardRadiusSlider.value = r;
      if (els.cardRadiusInput) els.cardRadiusInput.value = r;
      if (els.cardRadiusVal) els.cardRadiusVal.innerText = r + 'px';
      triggerAutoSave();
    };
    if (els.cardRadiusSlider) {
      els.cardRadiusSlider.addEventListener('input', e => updateCardRadius(e.target.value));
      els.cardRadiusSlider.addEventListener('change', () => { pushHistory(); saveToStorage(); });
    }
    if (els.cardRadiusInput) {
      els.cardRadiusInput.addEventListener('change', e => { pushHistory(); updateCardRadius(e.target.value); saveToStorage(); });
    }

    if (els.btnRemoveCardBg) {
      els.btnRemoveCardBg.addEventListener('click', () => {
        if (!selectedCard) return;
        pushHistory();
        selectedCard.style.backgroundImage = '';
        selectedCard.classList.remove('card-with-bg-photo', 'hero-light-card', 'publication-doc-card');
        selectedCard.style.removeProperty('--card-overlay-opacity');
        selectedCard.style.removeProperty('--card-overlay-bg');
        const docImg = selectedCard.querySelector('img.publication-doc-img');
        if (docImg) docImg.remove();
        if (els.cardBgPreviewThumb) els.cardBgPreviewThumb.style.display = 'none';
        if (els.cardBgEmptyHint) els.cardBgEmptyHint.style.display = 'block';
        saveToStorage();
        showToast('Reset card photo & saved to website');
        renderCardPhotosDashboard();
      });
    }

    // --- Section Background Photo Controls ---
    if (els.btnUploadSectionBg && els.sectionBgFileInput) {
      els.btnUploadSectionBg.addEventListener('click', () => {
        if (!selectedSection) {
          alert('Please select a section on the page first!');
          return;
        }
        els.sectionBgFileInput.click();
      });
      els.sectionBgFileInput.addEventListener('change', async () => {
        if (els.sectionBgFileInput.files && els.sectionBgFileInput.files[0]) {
          showToast('Uploading photo for section background...', 'hourglass_top');
          const photoUrl = await uploadPhotoToServer(els.sectionBgFileInput.files[0]);
          applyPhotoToSection(photoUrl);
          els.sectionBgFileInput.value = '';
        }
      });
    }

    if (els.btnGallerySectionBg) {
      els.btnGallerySectionBg.addEventListener('click', () => {
        const photoDockBtn = document.querySelector('.dock-btn[data-tab="photos"]');
        if (photoDockBtn) photoDockBtn.click();
        showToast('Click any photo in the gallery to apply to this section!');
      });
    }

    if (els.btnRemoveSectionBg) {
      els.btnRemoveSectionBg.addEventListener('click', () => {
        if (!selectedSection) return;
        pushHistory();
        selectedSection.style.backgroundImage = '';
        selectedSection.classList.remove('section-with-bg');
        saveToStorage();
        showToast('Removed section background photo & saved');
      });
    }

    // --- Image Controls ---
    els.btnReplacePhoto.addEventListener('click', () => {
      // Switch left panel to photos tab
      const photoDockBtn = document.querySelector('.dock-btn[data-tab="photos"]');
      if (photoDockBtn) photoDockBtn.click();
      showToast('Select a photo from the gallery or upload one');
    });

    const updateImgRadius = (val) => {
      if (!selectedElement) return;
      selectedElement.style.borderRadius = val + 'px';
      els.imgRadiusSlider.value = val;
      els.imgRadiusInput.value = val;
      triggerAutoSave();
    };
    els.imgRadiusSlider.addEventListener('input', (e) => {
      pushHistory();
      updateImgRadius(e.target.value);
    });
    els.imgRadiusInput.addEventListener('change', (e) => {
      pushHistory();
      updateImgRadius(e.target.value);
    });

    els.imgObjectFitSelect.addEventListener('change', (e) => {
      if (!selectedElement) return;
      pushHistory();
      selectedElement.style.objectFit = e.target.value;
      triggerAutoSave();
    });
  }

  /** History / Undo / Redo */
  function pushHistory() {
    if (!currentDoc) return;
    const html = currentDoc.documentElement.innerHTML;
    // Discard any redos
    historyStack = historyStack.slice(0, historyIndex + 1);
    historyStack.push(html);
    if (historyStack.length > 30) historyStack.shift();
    historyIndex = historyStack.length - 1;
    updateHistoryButtons();
  }

  function undo() {
    if (historyIndex > 0) {
      historyIndex--;
      restoreHistoryState();
    }
  }

  function redo() {
    if (historyIndex < historyStack.length - 1) {
      historyIndex++;
      restoreHistoryState();
    }
  }

  function restoreHistoryState() {
    if (!currentDoc) return;
    const html = historyStack[historyIndex];
    currentDoc.documentElement.innerHTML = html;
    injectEditorStyles(currentDoc);
    attachFrameEvents(currentDoc);
    deselectElement();
    renderSectionsList();
    updateHistoryButtons();
    triggerAutoSave();
    showToast('Undo/Redo state restored');
  }

  function updateHistoryButtons() {
    els.btnUndo.disabled = historyIndex <= 0;
    els.btnRedo.disabled = historyIndex >= historyStack.length - 1;
  }

  /** Load Selected Page in iframe */
  function loadPage(pageUrl) {
    deselectElement();
    historyStack = [];
    historyIndex = -1;
    updateHistoryButtons();

    if (els.btnLiveView) {
      els.btnLiveView.href = pageUrl;
    }

    currentDoc = null;
    els.panelContent.innerHTML = '<div style="padding: 28px 16px; text-align: center; color: var(--studio-text-muted);"><span class="material-symbols-outlined" style="font-size: 28px; animation: spin 1s linear infinite; color: var(--studio-accent-teal);">progress_activity</span><p style="font-size: 0.8rem; margin-top: 10px; font-weight: 600;">Loading sections & content...</p></div>';

    if (els.previewFrame) {
      els.previewFrame.classList.add('loading');
    }

    // Remove any stale srcdoc
    els.previewFrame.removeAttribute('srcdoc');

    // Always append cache-busting timestamp so the browser triggers a fresh navigation and fires 'load'
    const sep = pageUrl.includes('?') ? '&' : '?';
    els.previewFrame.src = pageUrl + sep + '_v=' + Date.now();

    // Check frame ready actively in case load completed synchronously or was cached
    let attempts = 0;
    const pollInterval = setInterval(() => {
      attempts++;
      if (currentDoc || attempts > 40) {
        clearInterval(pollInterval);
        return;
      }
      try {
        const doc = els.previewFrame.contentDocument || els.previewFrame.contentWindow.document;
        if (doc && doc.body && doc.body.children.length > 0 && doc.location && !doc.location.href.includes('about:blank')) {
          onFrameLoaded();
          clearInterval(pollInterval);
        }
      } catch (e) {}
    }, 60);
  }

  let autoSaveTimer = null;
  function triggerAutoSave() {
    setSaveBadge('saving');
    clearTimeout(autoSaveTimer);
    autoSaveTimer = setTimeout(() => {
      saveToStorage(true);
    }, 300);
  }

  let isServerOnline = false;
  let serverCheckTimer = null;

  function setSaveBadge(status, customMsg) {
    const badge = document.getElementById('studioSaveStatus');
    if (!badge) return;
    if (status === 'saving') {
      badge.innerHTML = `<span class="material-symbols-outlined" style="font-size: 14px; animation: spin 1s linear infinite; color: var(--studio-accent-teal);">sync</span><span>Saving to disk...</span>`;
      badge.className = 'studio-save-badge saving';
      badge.title = 'Writing changes to disk file...';
    } else if (status === 'saved') {
      badge.innerHTML = `<span class="material-symbols-outlined" style="font-size: 14px; color: #10b981;">check_circle</span><span>${customMsg || 'Saved to Website & Disk'}</span>`;
      badge.className = 'studio-save-badge online';
      badge.title = 'All edits are permanently written to website files on disk.';
    } else if (status === 'offline' || status === 'error') {
      badge.innerHTML = `<span class="material-symbols-outlined" style="font-size: 14px; color: #ef4444;">error</span><span>Server Offline (Not Saving)</span>`;
      badge.className = 'studio-save-badge offline';
      badge.title = 'Local server is off. Edits are in temporary memory. Click to see how to start server.';
    }
  }

  function showServerModal() {
    const modal = document.getElementById('serverModalBackdrop');
    if (modal) modal.classList.add('open');
  }

  function hideServerModal() {
    const modal = document.getElementById('serverModalBackdrop');
    if (modal) modal.classList.remove('open');
  }

  /** Check if python server.py is running on port 8000 */
  async function checkServerStatus(interactive = false) {
    const origins = [];
    if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
      origins.push(window.location.origin);
    }
    origins.push('http://localhost:8000', 'http://127.0.0.1:8000');

    let foundOnline = false;
    for (const orig of origins) {
      try {
        const res = await fetch(orig + '/api/status', {
          method: 'GET',
          cache: 'no-store',
          headers: { 'Cache-Control': 'no-cache' }
        });
        if (res.ok) {
          const data = await res.json();
          if (data && data.status === 'online') {
            foundOnline = true;
            break;
          }
        }
      } catch (e) {}
    }

    isServerOnline = foundOnline;
    if (foundOnline) {
      setSaveBadge('saved', 'Disk Save Active (Port 8000)');
      if (interactive) {
        hideServerModal();
        showToast('Server connected! Saving latest changes to disk...', 'check_circle');
        saveToStorage(false);
      }
    } else {
      setSaveBadge('offline');
      if (interactive) {
        showToast('Server not found! Please make sure START_STUDIO_SERVER.bat is running.', 'error');
      }
    }
    return foundOnline;
  }

  function startServerPolling() {
    checkServerStatus(false);
    clearInterval(serverCheckTimer);
    serverCheckTimer = setInterval(() => {
      checkServerStatus(false);
    }, 4000);
  }

  /** Robust API caller that tries relative path, localhost:8000, and 127.0.0.1:8000 */
  async function callServerApi(endpoint, bodyData) {
    const urls = [];
    if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
      urls.push(endpoint);
    }
    const origins = ['http://localhost:8000', 'http://127.0.0.1:8000'];
    origins.forEach(orig => {
      const full = orig + endpoint;
      if (!urls.includes(full)) urls.push(full);
    });

    let lastError = null;
    for (const url of urls) {
      try {
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(bodyData)
        });
        if (res.ok) {
          const json = await res.json();
          if (json && json.success) {
            return { ok: true, data: json };
          }
        }
      } catch (err) {
        lastError = err;
      }
    }
    return { ok: false, error: lastError };
  }

  /** Save directly to Disk via Local Server & LocalStorage backup */
  async function saveToStorage(isAuto = false) {
    if (!currentDoc) return false;
    const pageUrl = els.pageSelect ? els.pageSelect.value : 'index.html';
    const cleanHtml = getCleanDocumentHtml();

    // 1. Save to browser LocalStorage as instant local memory backup
    try {
      localStorage.setItem('medzen_editor_' + pageUrl, cleanHtml);
    } catch (e) {
      console.warn('LocalStorage save failed:', e);
    }

    // 2. Direct save to disk file on local server
    try {
      if (!isAuto) showToast('Saving changes directly to website file...', 'hourglass_top');
      setSaveBadge('saving');

      const result = await callServerApi('/api/save', { page: pageUrl, html: cleanHtml });

      if (result.ok) {
        isServerOnline = true;
        setSaveBadge('saved', 'Saved to website & disk');
        if (!isAuto) showToast(`Saved to disk! Changes are permanent on ${pageUrl}!`, 'check_circle');

        // Broadcast to any open website tab to refresh immediately
        try {
          const bc = new BroadcastChannel('medzen_studio_sync');
          bc.postMessage({ type: 'page_saved', page: pageUrl, timestamp: Date.now() });
          bc.close();
        } catch(e) {}
        return true;
      } else {
        isServerOnline = false;
        setSaveBadge('offline');
        if (!isAuto) {
          showServerModal();
          showToast('Could not write to disk. Start START_STUDIO_SERVER.bat to save permanently!', 'error');
        }
        return false;
      }
    } catch (err) {
      isServerOnline = false;
      setSaveBadge('offline');
      if (!isAuto) {
        showServerModal();
        showToast('Server offline: Run START_STUDIO_SERVER.bat to save permanently!', 'error');
      }
      return false;
    }
  }

  /** Export Clean Production-Ready HTML */
  function exportCleanHtml() {
    if (!currentDoc) return;
    const cleanHtml = getCleanDocumentHtml();
    const pageName = els.pageSelect.value || 'index.html';

    const blob = new Blob([cleanHtml], { type: 'text/html;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = pageName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast(`Downloaded clean ${pageName}!`, 'download');
  }

  /** Get Clean HTML without studio artifacts */
  function getCleanDocumentHtml() {
    const clone = currentDoc.documentElement.cloneNode(true);

    // Remove injected studio styles
    const studioStyle = clone.querySelector('#studio-injected-styles');
    if (studioStyle) studioStyle.remove();

    // Remove selection classes and data tags
    clone.querySelectorAll('.studio-selected').forEach(el => {
      el.classList.remove('studio-selected');
      el.removeAttribute('data-studio-tag');
    });

    clone.querySelectorAll('[contenteditable]').forEach(el => {
      el.removeAttribute('contenteditable');
    });

    if (clone.querySelector('body')) {
      clone.querySelector('body').classList.remove('in-editor-frame');
      clone.querySelector('body').classList.remove('studio-preview-mode');
    }

    clone.classList.remove('studio-preview-mode');

    return '<!DOCTYPE html>\n' + clone.outerHTML;
  }

  // Run init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
