/* ========================================================
   MANUEL BOERO WINES — SCRIPT.JS
   Award-Winning Motion, Photo Curtains, Parallax & Lightbox
   ======================================================== */

function initApp() {
  document.documentElement.classList.add('js-ready');

  // 1. NAV SCROLL STATE
  const nav = document.getElementById('nav');
  const handleNavScroll = () => {
    if (!nav) return;
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // 2. HERO & PHOTO PARALLAX MOTION
  const heroBg = document.getElementById('heroBg');
  const heroScrollCue = document.getElementById('heroScrollCue');
  const parallaxImages = document.querySelectorAll('.parallax-img');

  const handleParallax = () => {
    const scrollY = window.scrollY;
    
    if (heroBg && scrollY < window.innerHeight) {
      heroBg.style.transform = `translateY(${scrollY * 0.35}px)`;
    }
    if (heroScrollCue) {
      heroScrollCue.style.opacity = Math.max(0, 1 - scrollY / 300);
    }

    // Subtle liquid scroll parallax for content photos
    parallaxImages.forEach(img => {
      const parent = img.closest('.reveal-curtain') || img.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const offset = (rect.top - viewportHeight / 2) * 0.08;
        img.style.transform = `translateY(${offset}px) scale(${parent.classList.contains('in-view') ? 1 : 1.2})`;
      }
    });
  };

  window.addEventListener('scroll', handleParallax, { passive: true });

  // 3. SCROLL REVEAL OBSERVER (REVEAL-SCROLL, SCALE & CURTAINS)
  const revealElements = document.querySelectorAll('.reveal-scroll, .reveal-scroll-scale, .reveal-curtain');

  const revealAll = () => {
    revealElements.forEach(el => el.classList.add('in-view'));
  };

  const checkVisibility = () => {
    const triggerBottom = window.innerHeight * 1.12;
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < triggerBottom) {
        el.classList.add('in-view');
      }
    });
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.01,
      rootMargin: '120px 0px 120px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  }

  // Run initial visibility check
  checkVisibility();
  window.addEventListener('scroll', checkVisibility, { passive: true });

  // Failsafe: Ensure all photos & reveals are visible after 600ms
  setTimeout(revealAll, 600);

  // 4. GALLERY LIGHTBOX
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  if (lightbox && galleryItems.length > 0) {
    const galleryImages = Array.from(galleryItems).map(item => {
      const img = item.querySelector('img');
      return {
        src: img ? img.getAttribute('src') : '',
        alt: img ? img.getAttribute('alt') : 'Vendemmia 2026'
      };
    });

    let currentIndex = 0;

    const showLightboxImage = (index) => {
      currentIndex = (index + galleryImages.length) % galleryImages.length;
      if (!lightboxImg) return;
      lightboxImg.style.opacity = '0';
      lightboxImg.style.transform = 'scale(0.96)';

      setTimeout(() => {
        lightboxImg.src = galleryImages[currentIndex].src;
        lightboxImg.alt = galleryImages[currentIndex].alt;
        lightboxImg.style.opacity = '1';
        lightboxImg.style.transform = 'scale(1)';
      }, 150);
    };

    const openLightbox = (index) => {
      currentIndex = index;
      if (lightboxImg) {
        lightboxImg.src = galleryImages[currentIndex].src;
        lightboxImg.alt = galleryImages[currentIndex].alt;
      }
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    };

    galleryItems.forEach((item, index) => {
      item.style.cursor = 'pointer';
      item.addEventListener('click', () => openLightbox(index));
    });

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxPrev) lightboxPrev.addEventListener('click', () => showLightboxImage(currentIndex - 1));
    if (lightboxNext) lightboxNext.addEventListener('click', () => showLightboxImage(currentIndex + 1));

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showLightboxImage(currentIndex - 1);
      if (e.key === 'ArrowRight') showLightboxImage(currentIndex + 1);
    });
  }

  // 5. MOBILE NAV BURGER TOGGLE
  const burger = document.getElementById('navBurger');
  const navLinks = document.getElementById('navLinks');

  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // 6. CONTACT FORM SUBMIT
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (!submitBtn) return;
      const origText = submitBtn.textContent;
      submitBtn.textContent = 'Messaggio Inviato ✓';
      submitBtn.style.background = '#2E6F40';
      submitBtn.style.borderColor = '#2E6F40';
      contactForm.reset();
      setTimeout(() => {
        submitBtn.textContent = origText;
        submitBtn.style.background = '';
        submitBtn.style.borderColor = '';
      }, 4000);
    });
  }
}

// RUN IMMEDIATELY IF DOM READY, ELSE ON LOAD
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  initApp();
} else {
  document.addEventListener('DOMContentLoaded', initApp);
  window.addEventListener('load', initApp);
}
