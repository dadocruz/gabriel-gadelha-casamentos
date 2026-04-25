(() => {
  'use strict';

  document.documentElement.classList.add('js-ready');

  const yearEl = document.getElementById('yearNow');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const header = document.getElementById('siteHeader');
  const onScroll = () => {
    if (!header) return;
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  const closeMobile = () => {
    if (!hamburger || !mobileMenu) return;
    hamburger.classList.remove('is-open');
    mobileMenu.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
  };

  const toggleMobile = () => {
    if (!hamburger || !mobileMenu) return;
    const isOpen = hamburger.classList.toggle('is-open');
    mobileMenu.classList.toggle('is-open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    mobileMenu.setAttribute('aria-hidden', String(!isOpen));
  };

  hamburger?.addEventListener('click', toggleMobile);
  mobileMenu?.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMobile));

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

  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - (window.innerWidth > 1024 ? 80 : 70);
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  const heroWrap = document.querySelector('.hero-photo-wrap');
  const heroFrame = document.querySelector('.hero-video iframe');
  let heroSoundOn = false;
  const heroVideoId = '3U183bGOk74';

  const setHeroVideoSrc = (soundOn) => {
    if (!heroFrame) return;
    const mute = soundOn ? 0 : 1;
    heroFrame.src = `https://www.youtube-nocookie.com/embed/${heroVideoId}?autoplay=1&mute=${mute}&loop=1&playlist=${heroVideoId}&controls=0&modestbranding=1&playsinline=1&rel=0`;
  };

  if (heroWrap && heroFrame) {
    heroFrame.id = 'heroShortFrame';

    let heroSoundBtn = document.getElementById('heroSoundBtn');
    if (!heroSoundBtn) {
      heroSoundBtn = document.createElement('button');
      heroSoundBtn.type = 'button';
      heroSoundBtn.id = 'heroSoundBtn';
      heroSoundBtn.className = 'hero-sound-btn';
      heroSoundBtn.textContent = 'Ativar áudio';
      heroWrap.appendChild(heroSoundBtn);
    }

    heroSoundBtn.addEventListener('click', () => {
      heroSoundOn = !heroSoundOn;
      setHeroVideoSrc(heroSoundOn);
      heroSoundBtn.classList.toggle('is-active', heroSoundOn);
      heroSoundBtn.textContent = heroSoundOn ? 'Desativar áudio' : 'Ativar áudio';
    });
  }

  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('.yt-showcase-trigger');
    if (!trigger) return;

    const videoId = trigger.dataset.youtubeId;
    const videoTitle = trigger.dataset.videoTitle || 'Vídeo do YouTube';
    const player = document.createElement('div');
    player.className = 'yt-showcase-player';
    player.innerHTML = `
      <iframe
        src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1"
        title="${videoTitle}"
        loading="eager"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    `;
    trigger.replaceWith(player);
  });

  const authorityGrid = document.querySelector('.autoridade-mosaic');
  if (authorityGrid && window.innerWidth > 1024) {
    authorityGrid.classList.add('authority-desktop-large');
  }
})();
