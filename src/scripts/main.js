/* =========================================================
   Gabriel Gadelha — Landing Page Casamentos
   Interações e animações
   ========================================================= */

(() => {
  'use strict';

  /* Marca que o JS carregou (usado pelo fallback CSS) */
  document.documentElement.classList.add('js-ready');

  /* ---------- Ano no footer ---------- */
  const yearEl = document.getElementById('yearNow');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Header ao rolar ---------- */
  const header = document.getElementById('siteHeader');
  const onScroll = () => {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Menu mobile ---------- */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  const closeMobile = () => {
    hamburger.classList.remove('is-open');
    mobileMenu.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
  };
  const toggleMobile = () => {
    const isOpen = hamburger.classList.toggle('is-open');
    mobileMenu.classList.toggle('is-open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    mobileMenu.setAttribute('aria-hidden', String(!isOpen));
  };

  hamburger?.addEventListener('click', toggleMobile);
  mobileMenu?.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', closeMobile);
  });

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- Vídeos (placeholder → embed) ----------
     Quando tiver os links do YouTube, configure aqui:
     A estrutura vai trocar o placeholder por um iframe do YouTube
     assim que o usuário clicar.
  -------------------------------------------------- */
  const VIDEOS = {
    // Exemplo quando tiver o link:
    // 'wedding-1': 'https://www.youtube.com/embed/XXXXXXXXXXX?autoplay=1',
    // 'wedding-2': 'https://www.youtube.com/embed/XXXXXXXXXXX?autoplay=1',
  };

  document.querySelectorAll('.video-thumb').forEach((thumb) => {
    thumb.addEventListener('click', () => {
      const key = thumb.dataset.video;
      const url = VIDEOS[key];

      if (!url) {
        // Fallback enquanto os vídeos não estão publicados no YouTube
        window.open(
          'https://www.instagram.com/gabrielgadelhacantor',
          '_blank',
          'noopener'
        );
        return;
      }

      const iframe = document.createElement('iframe');
      iframe.src = url;
      iframe.title = 'Casamento com Gabriel Gadelha';
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute(
        'allow',
        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      );
      iframe.setAttribute('allowfullscreen', '');
      iframe.style.cssText =
        'width:100%;height:100%;border:0;position:absolute;inset:0;';

      thumb.innerHTML = '';
      thumb.style.cursor = 'default';
      thumb.appendChild(iframe);
    });
  });

  /* ---------- Smooth scroll para links internos ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top =
        target.getBoundingClientRect().top +
        window.scrollY -
        (window.innerWidth > 1024 ? 80 : 70);
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ---------- Parallax leve no hero (desktop) ---------- */
  const hero = document.querySelector('.hero');
  const heroPhoto = document.querySelector('.hero-photo-wrap');
  if (hero && heroPhoto && window.innerWidth > 1024) {
    window.addEventListener(
      'scroll',
      () => {
        const rect = hero.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;
        const offset = window.scrollY * 0.08;
        heroPhoto.style.transform = `translateY(${offset}px)`;
      },
      { passive: true }
    );
  }
})();
