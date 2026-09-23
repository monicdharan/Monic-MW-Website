/**
 * MedZen Writes — Main Interactive Logic
 * Handles navigation, interactive accordions, lead generation modals, portfolio filters, back-to-top, and forms.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navbar
  const navbar = document.querySelector('.site-navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // 2. Mobile Menu Toggle & Drawer
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  const mobileClose = document.querySelector('.mobile-drawer-close');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    if (mobileClose) {
      mobileClose.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        document.body.style.overflow = '';
      });
    }

    // Close on link click
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // 3. Back to top button
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 4. FAQ Accordion Toggle
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');

    if (trigger && content) {
      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');

        // Close other FAQs
        faqItems.forEach(other => {
          if (other !== item) {
            other.classList.remove('active');
            const otherContent = other.querySelector('.faq-content');
            if (otherContent) otherContent.style.maxHeight = null;
          }
        });

        // Toggle current
        if (isOpen) {
          item.classList.remove('active');
          content.style.maxHeight = null;
        } else {
          item.classList.add('active');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    }
  });

  // 5. Modal Handlers (Disable if embedded in Studio/Editor iframe)
  const isInsideEditor = window.self !== window.top;
  const modalTriggers = document.querySelectorAll('[data-modal-target]');
  const modalCloses = document.querySelectorAll('[data-modal-close]');

  if (!isInsideEditor) {
    modalTriggers.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = btn.getAttribute('data-modal-target');
        const targetModal = document.getElementById(targetId);
        if (targetModal) {
          targetModal.classList.add('open');
          document.body.style.overflow = 'hidden';
        }
      });
    });
  }

  modalCloses.forEach(btn => {
    btn.addEventListener('click', () => {
      const parentModal = btn.closest('.modal-backdrop');
      if (parentModal) {
        parentModal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

  // Close modal when clicking backdrop
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

  // 6. Portfolio Category Filtering (for publications page)
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-card-item');

  if (filterBtns.length > 0 && portfolioItems.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filterValue = btn.getAttribute('data-filter');

        portfolioItems.forEach(card => {
          if (filterValue === 'all' || card.getAttribute('data-category') === filterValue || card.classList.contains('publication-upload-slot')) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 6B. Publication Document & WhatsApp Screenshot Lightbox Viewer
  const docCards = document.querySelectorAll('.publication-doc-card, .whatsapp-testimonial-card');
  let lightbox = document.getElementById('pubLightboxModal');

  if (!lightbox && docCards.length > 0) {
    lightbox = document.createElement('div');
    lightbox.id = 'pubLightboxModal';
    lightbox.className = 'pub-lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Publication Document Full View');
    lightbox.innerHTML = `
      <div class="pub-lightbox-dialog">
        <div class="pub-lightbox-header">
          <a id="pubLightboxArticleBtn" href="#" target="_blank" rel="noopener noreferrer" class="pub-lightbox-article-link" style="display: none;">
            <span class="material-symbols-outlined" style="font-size: 16px;">open_in_new</span>
            <span>View Original Article</span>
          </a>
          <button type="button" class="pub-lightbox-close" aria-label="Close Preview" title="Close (Esc)">
            <span class="material-symbols-outlined" style="font-size: 26px;">close</span>
          </button>
        </div>
        <div class="pub-lightbox-body">
          <img class="pub-lightbox-content" id="pubLightboxImg" src="" alt="Publication Full View">
        </div>
        <div class="pub-lightbox-footer">
          <p id="pubLightboxCaption" class="pub-lightbox-caption"></p>
        </div>
      </div>
    `;
    document.body.appendChild(lightbox);
  }

  if (lightbox) {
    const lightboxImg = lightbox.querySelector('.pub-lightbox-content') || lightbox.querySelector('#pubLightboxImg');
    const lightboxCaption = lightbox.querySelector('#pubLightboxCaption') || lightbox.querySelector('.pub-lightbox-caption');
    const lightboxArticleBtn = lightbox.querySelector('#pubLightboxArticleBtn') || lightbox.querySelector('.pub-lightbox-article-link');
    const closeBtn = lightbox.querySelector('.pub-lightbox-close');

    const closeLightbox = (popHistory = true) => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
      if (popHistory && window.history.state && window.history.state.pubLightboxOpen) {
        window.history.back();
      }
    };

    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeLightbox(true);
      });
    }

    // Close when tapping backdrop or non-interactive areas
    lightbox.addEventListener('click', (e) => {
      if (
        e.target === lightbox ||
        e.target.classList.contains('pub-lightbox-dialog') ||
        e.target.classList.contains('pub-lightbox-body') ||
        e.target.classList.contains('pub-lightbox-header') ||
        e.target.classList.contains('pub-lightbox-footer')
      ) {
        closeLightbox(true);
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox(true);
      }
    });

    // Mobile gesture / hardware back button support:
    // Close the lightbox modal smoothly and stay on publications.html
    window.addEventListener('popstate', () => {
      if (lightbox.classList.contains('active')) {
        closeLightbox(false);
      }
    });

    const openLightbox = (imgSrc, imgAlt, articleLink) => {
      if (lightboxImg && imgSrc) {
        lightboxImg.src = imgSrc;
        lightboxImg.alt = imgAlt || 'Publication Document';
        if (lightboxCaption) {
          lightboxCaption.textContent = imgAlt || '';
        }
        if (lightboxArticleBtn) {
          if (articleLink && articleLink !== '#' && articleLink.trim() !== '') {
            lightboxArticleBtn.href = articleLink;
            lightboxArticleBtn.style.display = 'inline-flex';
          } else {
            lightboxArticleBtn.style.display = 'none';
          }
        }
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Push state so back gesture on mobile closes modal instead of navigating away
        try {
          window.history.pushState({ pubLightboxOpen: true }, '');
        } catch (err) {}
      }
    };

    docCards.forEach(card => {
      card.addEventListener('click', (e) => {
        // If clicking directly on the "View Article" badge link, let it open normally in a new tab
        if (e.target.closest('.card-link-badge')) {
          e.stopPropagation();
          return;
        }

        // Touching the image or card body opens the lightbox view smoothly on the current page
        e.preventDefault();
        e.stopPropagation();

        const img = card.querySelector('img.publication-doc-img, img');
        const link = card.getAttribute('data-card-link') || card.getAttribute('href') || '';
        if (img) {
          openLightbox(img.src, img.alt, link);
        }
      });
    });
  }

  // 7. Interactive Toast Notification Utility
  window.showToast = function(message, icon = 'check_circle') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span class="material-symbols-outlined">${icon}</span><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  };

  // 8. Contact & Consultation Form Handling
  const contactForms = document.querySelectorAll('.contact-form-handler');
  contactForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Send';
      
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span class="material-symbols-outlined" style="animation: spin 1s infinite linear;">progress_activity</span> Submitting...`;
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
        form.reset();
        
        // Close modal if in modal
        const parentModal = form.closest('.modal-backdrop');
        if (parentModal) {
          parentModal.classList.remove('open');
          document.body.style.overflow = '';
        }

        showToast('Thank you! Your request has been received. Our medical academic team will contact you shortly.', 'task_alt');
      }, 1000);
    });
  });

  // 9. Lead Magnet Checklist Download Handler
  const checklistForm = document.getElementById('checklist-form');
  if (checklistForm) {
    checklistForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = checklistForm.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        showToast(`Checklist sent to ${emailInput.value}! Downloading your PG Thesis Checklist PDF...`, 'download_done');
        checklistForm.reset();
        const modal = document.getElementById('checklistModal');
        if (modal) {
          modal.classList.remove('open');
          document.body.style.overflow = '';
        }
      }
    });
  }

  // 10. Live Sync: Automatically refresh open website tab when changes are saved in Studio
  if (!isInsideEditor && 'BroadcastChannel' in window) {
    try {
      const studioSync = new BroadcastChannel('medzen_studio_sync');
      studioSync.onmessage = (e) => {
        if (e.data && e.data.type === 'page_saved') {
          const cleanPath = window.location.pathname.replace(/^\/+/, '') || 'index.html';
          if (cleanPath === e.data.page || cleanPath.endsWith(e.data.page)) {
            console.log('[MedZen Studio Sync] Fresh changes detected, auto-refreshing...');
            window.location.reload();
          }
        }
      };
    } catch(err) {}
  }

  // 11. Google Reviews Lightbox Handler
  window.openReviewLightbox = function(src, caption) {
    const modal = document.getElementById('reviewLightboxModal');
    const img = document.getElementById('reviewLightboxImg');
    const cap = document.getElementById('reviewLightboxCaption');
    if (modal && img) {
      img.src = src;
      if (cap) cap.textContent = caption || 'Google Verified Review';
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeReviewLightbox = function() {
    const modal = document.getElementById('reviewLightboxModal');
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  // 12. Seamless Page Navigation Transitions (Glitch-Free & Clean)
  if (!isInsideEditor) {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href) return;

      // Ignore anchor jumps on same page, javascript, mailto, tel, target _blank, downloads, modal openers
      if (
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('javascript:') ||
        link.target === '_blank' ||
        link.hasAttribute('download') ||
        link.hasAttribute('data-modal-target') ||
        e.ctrlKey || e.metaKey || e.shiftKey || e.altKey
      ) {
        return;
      }

      let targetUrl;
      try {
        targetUrl = new URL(link.href, window.location.href);
      } catch (err) {
        return;
      }

      if (targetUrl.origin !== window.location.origin) return;

      // If it's just an anchor on the same page
      if (targetUrl.pathname === window.location.pathname && targetUrl.search === window.location.search) {
        return;
      }

      // If browser supports CSS cross-document view transitions natively, let it handle smoothly
      const supportsViewTransitions = ('startViewTransition' in document) && (window.CSS && CSS.supports && CSS.supports('view-transition-name', 'none'));
      if (supportsViewTransitions) {
        return;
      }

      // Fallback for browsers without native view transitions:
      // Perform an ultra-clean, fast 140ms fade so the screen never glitches or flashes white
      e.preventDefault();
      const mainEl = document.querySelector('main') || document.body;
      mainEl.style.transition = 'opacity 0.14s cubic-bezier(0.4, 0, 0.2, 1)';
      mainEl.style.opacity = '0.2';
      setTimeout(() => {
        window.location.href = link.href;
      }, 120);
    });

    // Handle browser Back/Forward (bfcache) navigation cleanly
    window.addEventListener('pageshow', () => {
      const mainEl = document.querySelector('main') || document.body;
      if (mainEl) {
        mainEl.style.opacity = '1';
      }
    });
  }

  // 13. Latest Articles Filter Handler (Category & Topic Dropdowns)
  const categorySelect = document.getElementById('articleCategorySelect');
  const topicSelect = document.getElementById('articleTopicSelect');
  const articleCards = document.querySelectorAll('.article-card-v2');
  const emptyState = document.getElementById('articlesEmptyState');

  function filterArticles() {
    if (!categorySelect || !topicSelect || articleCards.length === 0) return;
    const selectedCat = categorySelect.value.toLowerCase();
    const selectedTop = topicSelect.value.toLowerCase();
    let visibleCount = 0;

    articleCards.forEach(card => {
      const cardCat = (card.getAttribute('data-category') || '').toLowerCase();
      const cardTop = (card.getAttribute('data-topic') || '').toLowerCase();

      const catMatch = selectedCat === 'all' || cardCat === selectedCat;
      const topMatch = selectedTop === 'all' || cardTop === selectedTop;

      if (catMatch && topMatch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (emptyState) {
      emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  if (categorySelect && topicSelect) {
    categorySelect.addEventListener('change', filterArticles);
    topicSelect.addEventListener('change', filterArticles);
  }
});



