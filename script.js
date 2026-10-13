/* ========================================================
   MANUEL BOERO WINES — SCRIPT.JS
   Award-Winning Motion, Photo Curtains, Parallax & Lightbox
   ======================================================== */

let currentSiteLanguage = 'it';

const siteTranslations = {
  it: {
    text: {
      '.nav-links a': ['siamo noi', 'I Vini', 'Selezione', "Vendemmia '26", 'Dove trovarci', 'Contatto'],
      '.hero-content > .btn-primary': 'Scopri i vini',
      '.statement-group span': ['I\'M NOT SWEET', 'I\'M NOT A LADY', 'I\'M NOT A BABY', 'MANUEL BOERO', "MONFORTE D'ALBA"],
      '.intro-text .section-label': 'Il produttore',
      '.intro-headline': 'Ventisette anni<br/>Tre vitigni<br/><em>Testa bocia.</em>',
      '.intro-body': "Manuel Boero nasce nel 1999 tra le colline del Piemonte. A un'età in cui altri cercano ancora la propria strada, lui ha già fatto la sua scelta: la vigna. Da zero, senza eredità da cantina, ha piantato la sua idea di vino nel cuore delle Langhe. Il primo fu il Dolcetto — \"I'm Not Sweet\" — per dire subito chi era. Poi la Barbera — \"I'm Not a Lady\" — carica, seria, senza eleganza da salotto. E infine il Nebbiolo — \"I'm Not a Baby\" — perché l'uva dei re non si piega a nessuno.",
      '.intro-image img': 'Manuel al lavoro in vigna',
      '.wines-header .section-label': 'La linea',
      '[data-wine="01"] .wine-desc': 'Frutto denso, acidità tagliente. Un Dolcetto che non ti accarezza — ti sfida. Vinificazione in acciaio, nessuna concessione al facile.',
      '[data-wine="02"] .wine-desc': 'Nessuna grazia costruita. La Barbera di Manuel è potenza e acidità viva — un vino che non chiede il permesso. Breve passaggio in legno grande, niente di più.',
      '[data-wine="03"] .wine-desc': 'Il re delle uve piemontesi, affrontato senza reverenza. Tannini austeri, lunga persistenza, un vino che esige tempo. Fatto per durare, non per piacere subito.',
      '.wine-contact-cta': 'Richiedi disponibilità',
      '.wine-details span': [
        'Uvaggio: Dolcetto 100%', "Zona: Monforte d'Alba, Langhe", 'Annata: 2024',
        'Uvaggio: Barbera 100%', "Zona: Monforte d'Alba, Langhe", 'Annata: 2023',
        'Uvaggio: Nebbiolo 100%', "Zona: Monforte d'Alba, Langhe", 'Annata: 2022'
      ],
      '.vendemmia-intro .section-label': 'Settembre 2026',
      '.vendemmia-headline': 'La Vendemmia<br/><em>di Manuel.</em>',
      '.vslide__caption h3': ['Settembre, ore 6:30.', 'Mani che scelgono.', "Colore d'annata.", 'Fisicità del lavoro.'],
      '.vslide__caption p': [
        "La nebbia sale ancora dalle valli quando Manuel è già tra i filari. Il 2026 è stata un'annata difficile — primavera piovosa, estate secca e calda. Ma i grappoli che pendono ora sono concentrati, intensi. La vite ha sofferto, e chi soffre dà tutto quello che ha.",
        'Ogni grappolo viene valutato uno per uno. Niente vendemmia meccanica. Niente fretta. Manuel seleziona solo ciò che è pronto, lasciando il resto a maturare ancora. Questo è il lusso vero — il tempo dedicato.',
        'Il Dolcetto 2026 è quasi blu — un colore che non si fabbrica. I grappoli pesano poco, ma quello che portano dentro è potente. Un\'estrazione lunga darà struttura senza sovraccaricare il frutto.',
        "Non c'è romanticismo nel sollevare decine di cassette su una collina piemontese a 30 gradi. C'è solo lavoro. Ed è esattamente questo che finisce nella bottiglia — il sudore di chi ha scelto una vita scomoda perché era quella giusta."
      ],
      '.v-close-text': '"Il 2026 sarà ricordato come l\'annata in cui ho smesso di inseguire la perfezione e ho imparato ad ascoltare la vigna."',
      '.where-to-find__heading .section-label': 'Ristoranti e locali speciali',
      '.where-to-find__title': 'Dove<br/><em>trovarci.</em>',
      '.where-to-find__content p': 'Per sapere in quali ristoranti trovare i vini di Manuel Boero, contattaci direttamente. La disponibilità e la selezione possono variare.',
      '.where-to-find__content .btn-outline': 'Richiedi i locali',
      '.bottles-cta__content .section-label': 'Le bottiglie',
      '.bottles-headline': 'Tre caratteri.<br/>Una sola firma.',
      '.bottles-sub': 'I vini di Manuel Boero sono disponibili in selezione limitata. Ogni annata è numerata e tracciata dal vigneto alla bottiglia.',
      '#contactBottlesBtn': 'Esplora la boutique',
      '.contact-text .section-label': 'Contatto diretto',
      '.contact-headline': 'Parliamo<br/>di vino.',
      '.contact-body': 'Non abbiamo un e-commerce. I vini di Manuel si trovano parlando con lui direttamente — per acquisto, per ristorazione o semplicemente per saperne di più.',
      '.form-group label': ['Nome', 'Email', 'Messaggio'],
      '#submitContactBtn': 'Invia',
      '.footer-copy': '© 2026 Manuel Boero. Bevete responsabilmente. Vietato ai minori di 18 anni.',
      '.footer-craft': 'Un progetto realizzato con le mie mani.'
    },
    attributes: {
      '#navBurger': ['aria-label', 'Menu'],
      '.language-switch': ['aria-label', 'Lingua del sito'],
      '.hero-bg img': ['alt', 'Vigneti Piemontesi'],
      '.animated-logo-svg': ['aria-label', "Manuel Boero Monforte d'Alba"],
      '[data-wine="01"] .wine-card__image img': ['alt', "I'm Not Sweet — Dolcetto"],
      '[data-wine="02"] .wine-card__image img': ['alt', "I'm Not a Lady — Barbera"],
      '[data-wine="03"] .wine-card__image img': ['alt', "I'm Not a Baby — Nebbiolo"],
      '#vs1 .vslide__img img': ['alt', 'Vista panoramica vigneto Piemonte'],
      '#vs2 .vslide__img img': ['alt', 'Manuel raccoglie le uve'],
      '#vs3 .vslide__img img': ['alt', 'Cassette di uva nera raccolta'],
      '#vs4 .vslide__img img': ['alt', 'Trasporto cassette nel vigneto'],
      '.gallery-item img': ['alt', [
        'Vendemmia 2026 - Dettaglio grappolo', 'Vendemmia 2026 - Cassette', 'Vendemmia 2026 - Cantina',
        'Vendemmia 2026 - Paesaggio', 'Vendemmia 2026 - Filari', 'Vendemmia 2026 - Ritratto'
      ]],
      '.bottles-cta__bg img': ['alt', 'Bottiglie Manuel Boero'],
      '#fname': ['placeholder', 'Il tuo nome'],
      '#femail': ['placeholder', 'La tua email'],
      '#fmsg': ['placeholder', 'Di cosa hai bisogno?'],
      '.lightbox-close': ['aria-label', 'Chiudi'],
      '.lightbox-prev': ['aria-label', 'Precedente'],
      '.lightbox-next': ['aria-label', 'Successivo'],
      '#lightboxImg': ['alt', 'Galleria foto']
    },
    title: "Manuel Boero Wines — Monforte d'Alba, Piemonte",
    description: "Manuel Boero, giovane produttore a Monforte d'Alba. Dolcetto, Barbera, Nebbiolo: tre vini, tre caratteri, una sola voce."
  },
  en: {
    text: {
      '.nav-links a': ['Our story', 'The wines', 'Boutique', '2026 Harvest', 'Where to find us', 'Contact'],
      '.hero-content > .btn-primary': 'Discover the wines',
      '.statement-group span': ["I'M NOT SWEET", "I'M NOT A LADY", "I'M NOT A BABY", 'MANUEL BOERO', "MONFORTE D'ALBA"],
      '.intro-text .section-label': 'The grower',
      '.intro-headline': 'Twenty-five years.<br/>Three grapes.<br/><em>No compromises.</em>',
      '.intro-body': 'Manuel Boero was born in 1999 among the hills of Piedmont. At an age when others are still finding their way, he has already made his choice: the vineyard. Starting from scratch, with no family winery to inherit, he planted his idea of wine in the heart of the Langhe. First came Dolcetto — “I\'m Not Sweet” — to make his position clear. Then Barbera — “I\'m Not a Lady” — bold and serious, with no drawing-room refinement. Finally Nebbiolo — “I\'m Not a Baby” — because the king of grapes bows to no one.',
      '.intro-image img': 'Manuel at work in the vineyard',
      '.wines-header .section-label': 'The range',
      '[data-wine="01"] .wine-desc': 'Dense fruit, sharp acidity. A Dolcetto that does not coddle you — it challenges you. Steel-fermented, with no easy concessions.',
      '[data-wine="02"] .wine-desc': 'No contrived grace. Manuel’s Barbera is power and lively acidity — a wine that asks permission from no one. A brief passage in large casks, nothing more.',
      '[data-wine="03"] .wine-desc': 'The king of Piedmont’s grapes, approached without reverence. Austere tannins, a long finish, a wine that demands time. Made to last, not to please at first sip.',
      '.wine-contact-cta': 'Request availability',
      '.wine-details span': [
        'Grape: 100% Dolcetto', "Origin: Monforte d'Alba, Langhe", 'Vintage: 2024',
        'Grape: 100% Barbera', "Origin: Monforte d'Alba, Langhe", 'Vintage: 2023',
        'Grape: 100% Nebbiolo', "Origin: Monforte d'Alba, Langhe", 'Vintage: 2022'
      ],
      '.vendemmia-intro .section-label': 'September 2026',
      '.vendemmia-headline': 'The Harvest<br/><em>with Manuel.</em>',
      '.vslide__caption h3': ['September, 6:30 a.m.', 'Hands that choose.', 'A vintage in colour.', 'The work, unvarnished.'],
      '.vslide__caption p': [
        'The mist is still rising from the valleys when Manuel is already among the rows. 2026 has been a difficult vintage — a rainy spring, followed by a hot, dry summer. Yet the grapes hanging now are concentrated and intense. The vines have suffered, and those who suffer give everything they have.',
        'Every bunch is assessed one by one. No mechanical harvesting. No rushing. Manuel picks only what is ready, leaving the rest to ripen. This is the real luxury: time and attention.',
        'The 2026 Dolcetto is almost blue — a colour that cannot be manufactured. The bunches are light, but what they hold is powerful. A long extraction will bring structure without overwhelming the fruit.',
        'There is no romance in lifting dozens of crates up a Piedmont hillside in 30-degree heat. There is only work. And that is exactly what ends up in the bottle — the sweat of someone who chose an uncomfortable life because it was the right one.'
      ],
      '.v-close-text': '“2026 will be remembered as the vintage when I stopped chasing perfection and learned to listen to the vineyard.”',
      '.where-to-find__heading .section-label': 'Restaurants & special venues',
      '.where-to-find__title': 'Where<br/><em>to find us.</em>',
      '.where-to-find__content p': 'To find out which restaurants serve Manuel Boero wines, get in touch with us directly. Availability and selection may vary.',
      '.where-to-find__content .btn-outline': 'Ask for locations',
      '.bottles-cta__content .section-label': 'The bottles',
      '.bottles-headline': 'Three characters.<br/>One signature.',
      '.bottles-sub': 'Manuel Boero wines are available in limited quantities. Each vintage is numbered and traced from vineyard to bottle.',
      '#contactBottlesBtn': 'Explore the boutique',
      '.contact-text .section-label': 'Get in touch',
      '.contact-headline': 'Let’s talk<br/>wine.',
      '.contact-body': 'We do not have an online shop. Manuel’s wines are available by speaking with him directly — whether you are looking to buy, serve them at your restaurant, or simply find out more.',
      '.form-group label': ['Name', 'Email', 'Message'],
      '#submitContactBtn': 'Send',
      '.footer-copy': '© 2026 Manuel Boero. Please drink responsibly. Not for sale to anyone under 18.',
      '.footer-craft': 'Made by hand, with care.'
    },
    attributes: {
      '#navBurger': ['aria-label', 'Menu'],
      '.language-switch': ['aria-label', 'Website language'],
      '.hero-bg img': ['alt', 'Vineyards in Piedmont'],
      '.animated-logo-svg': ['aria-label', "Manuel Boero, Monforte d'Alba"],
      '[data-wine="01"] .wine-card__image img': ['alt', "I'm Not Sweet — Dolcetto"],
      '[data-wine="02"] .wine-card__image img': ['alt', "I'm Not a Lady — Barbera"],
      '[data-wine="03"] .wine-card__image img': ['alt', "I'm Not a Baby — Nebbiolo"],
      '#vs1 .vslide__img img': ['alt', 'Panoramic view of a vineyard in Piedmont'],
      '#vs2 .vslide__img img': ['alt', 'Manuel picking grapes'],
      '#vs3 .vslide__img img': ['alt', 'Crates of freshly picked dark grapes'],
      '#vs4 .vslide__img img': ['alt', 'Moving crates through the vineyard'],
      '.gallery-item img': ['alt', [
        '2026 harvest - Grape detail', '2026 harvest - Crates', '2026 harvest - Winery',
        '2026 harvest - Landscape', '2026 harvest - Vineyard rows', '2026 harvest - Portrait'
      ]],
      '.bottles-cta__bg img': ['alt', 'Manuel Boero wine bottles'],
      '#fname': ['placeholder', 'Your name'],
      '#femail': ['placeholder', 'Your email'],
      '#fmsg': ['placeholder', 'How can we help?'],
      '.lightbox-close': ['aria-label', 'Close'],
      '.lightbox-prev': ['aria-label', 'Previous'],
      '.lightbox-next': ['aria-label', 'Next'],
      '#lightboxImg': ['alt', 'Gallery photo']
    },
    title: "Manuel Boero Wines — Monforte d'Alba, Piedmont",
    description: 'Manuel Boero, a young winemaker in Monforte d’Alba. Dolcetto, Barbera, Nebbiolo: three wines, three characters, one voice.'
  }
};

function setSiteLanguage(language) {
  const copy = siteTranslations[language];
  if (!copy) return;

  currentSiteLanguage = language;
  document.documentElement.lang = language;
  document.title = copy.title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', copy.description);

  Object.entries(copy.text).forEach(([selector, values]) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      const value = Array.isArray(values) ? values[index % values.length] : values;
      element.innerHTML = value;
    });
  });

  Object.entries(copy.attributes).forEach(([selector, [attribute, values]]) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      const value = Array.isArray(values) ? values[index % values.length] : values;
      element.setAttribute(attribute, value);
    });
  });

  document.querySelectorAll('[data-site-language]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.siteLanguage === language));
  });

  try {
    localStorage.setItem('manuel-boero-language', language);
  } catch (error) {
    // Language switching still works when browser storage is unavailable.
  }
}

function initSiteLanguage() {
  const buttons = document.querySelectorAll('[data-site-language]');
  if (!buttons.length || buttons[0].dataset.ready === 'true') return;

  buttons.forEach((button) => {
    button.dataset.ready = 'true';
    button.addEventListener('click', () => setSiteLanguage(button.dataset.siteLanguage));
  });

  let savedLanguage = 'it';
  try {
    savedLanguage = localStorage.getItem('manuel-boero-language') || 'it';
  } catch (error) {
    savedLanguage = 'it';
  }
  setSiteLanguage(savedLanguage);
}

function initHomeLanguageVisibility() {
  const hero = document.getElementById('hero');
  if (!hero) return;

  const updateVisibility = () => {
    const isHome = hero.getBoundingClientRect().bottom > window.innerHeight * 0.5;
    document.body.classList.toggle('is-home', isHome);
    document.body.classList.add('home-language-ready');
  };

  updateVisibility();
  window.addEventListener('scroll', updateVisibility, { passive: true });
  window.addEventListener('resize', updateVisibility);
}

function initApp() {
  document.documentElement.classList.add('js-ready');
  initSiteLanguage();
  initHomeLanguageVisibility();

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

  // Scroll-scrubbed bottle pass across the first wine card.
  const bottleFlight = document.getElementById('wineBottleFlight');
  const winesHeadline = document.querySelector('.wines-headline');
  const dolcettoCard = document.querySelector('.wine-card[data-wine="01"]');
  const dolcettoImage = dolcettoCard?.querySelector('.wine-card__image');

  if (bottleFlight && winesHeadline && dolcettoCard && dolcettoImage) {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let bottleFrame = 0;

    const easeSmooth = (progress) => {
      const bounded = Math.max(0, Math.min(1, progress));
      return bounded * bounded * (3 - 2 * bounded);
    };

    const updateBottleFlight = () => {
      bottleFrame = 0;
      if (reduceMotion.matches) {
        bottleFlight.style.opacity = '0';
        return;
      }

      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const headlineRect = winesHeadline.getBoundingClientRect();
      const headlineBottom = headlineRect.bottom + scrollY;
      const enterStart = headlineBottom + 24;
      const cardBottom = dolcettoCard.getBoundingClientRect().bottom + scrollY;
      const exitEnd = cardBottom + viewportHeight * 0.2;
      const bottleWidth = bottleFlight.getBoundingClientRect().width;
      const enterX = -bottleWidth - 32;
      const exitX = window.innerWidth + bottleWidth + 32;

      if (scrollY < enterStart || scrollY > exitEnd) {
        bottleFlight.style.opacity = '0';
        return;
      }

      const progress = (scrollY - enterStart) / (exitEnd - enterStart);
      const x = enterX + (exitX - enterX) * easeSmooth(progress);

      bottleFlight.style.opacity = '1';
      bottleFlight.style.transform = `translate3d(${x}px, -50%, 0)`;
    };

    const scheduleBottleFlight = () => {
      if (!bottleFrame) bottleFrame = window.requestAnimationFrame(updateBottleFlight);
    };

    window.addEventListener('scroll', scheduleBottleFlight, { passive: true });
    window.addEventListener('resize', scheduleBottleFlight);
    reduceMotion.addEventListener('change', scheduleBottleFlight);
    scheduleBottleFlight();
  }

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
      submitBtn.textContent = currentSiteLanguage === 'en' ? 'Message sent ✓' : 'Messaggio Inviato ✓';
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
