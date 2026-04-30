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

  const viewsNumber = document.querySelector('.views-highlight__number');
  const viewsLabel = document.querySelector('.views-highlight__label');
  if (viewsNumber) viewsNumber.textContent = '+ de 20 milhões';
  if (viewsLabel) viewsLabel.textContent = 'de visualizações no YouTube';

  const heroWrap = document.querySelector('.hero-photo-wrap');
  const heroVideo = document.querySelector('.hero-video');
  const heroVideoId = '3U183bGOk74';
  let heroSoundOn = false;

  const buildHeroSrc = (soundOn) => {
    const mute = soundOn ? 0 : 1;
    const controls = soundOn ? 1 : 0;
    return `https://www.youtube-nocookie.com/embed/${heroVideoId}?autoplay=1&mute=${mute}&loop=1&playlist=${heroVideoId}&controls=${controls}&modestbranding=1&playsinline=1&rel=0`;
  };

  const createHeroPlayer = (soundOn) => {
    if (!heroVideo) return;
    heroVideo.innerHTML = `
      <iframe
        id="heroShortFrame"
        src="${buildHeroSrc(soundOn)}"
        title="Gabriel Gadelha short"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    `;
    heroVideo.dataset.started = '1';
    heroVideo.dataset.sound = soundOn ? 'on' : 'off';
  };

  const createHeroPoster = () => {
    if (!heroVideo) return;
    heroVideo.innerHTML = `
      <button class="hero-poster-launch" type="button" aria-label="Assistir vídeo com áudio">
        <img class="hero-poster-image" src="https://i.ytimg.com/vi/${heroVideoId}/maxresdefault.jpg" alt="Gabriel Gadelha em show ao vivo" loading="eager" />
        <span class="hero-poster-shade"></span>
        <span class="hero-poster-play" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
        </span>
        <span class="hero-poster-cta">Ouvir com áudio</span>
      </button>
    `;

    const img = heroVideo.querySelector('.hero-poster-image');
    if (img) {
      img.addEventListener('error', () => {
        if (img.src.includes('maxresdefault')) {
          img.src = `https://i.ytimg.com/vi/${heroVideoId}/sddefault.jpg`;
        } else if (img.src.includes('sddefault')) {
          img.src = `https://i.ytimg.com/vi/${heroVideoId}/hqdefault.jpg`;
        }
      });
    }

    const launchBtn = heroVideo.querySelector('.hero-poster-launch');
    launchBtn?.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      heroSoundOn = true;
      createHeroPlayer(true);
      const heroSoundBtn = document.getElementById('heroSoundBtn');
      if (heroSoundBtn) {
        heroSoundBtn.classList.add('is-active');
        heroSoundBtn.textContent = 'Desativar áudio';
      }
    });
  };

  if (heroWrap && heroVideo) {
    createHeroPoster();

    let heroSoundBtn = document.getElementById('heroSoundBtn');
    if (!heroSoundBtn) {
      heroSoundBtn = document.createElement('button');
      heroSoundBtn.type = 'button';
      heroSoundBtn.id = 'heroSoundBtn';
      heroSoundBtn.className = 'hero-sound-btn';
      heroSoundBtn.textContent = 'Ouvir com áudio';
      heroWrap.appendChild(heroSoundBtn);
    }

    heroSoundBtn.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      heroSoundOn = !heroSoundOn;
      createHeroPlayer(heroSoundOn);
      heroSoundBtn.classList.toggle('is-active', heroSoundOn);
      heroSoundBtn.textContent = heroSoundOn ? 'Desativar áudio' : 'Ouvir com áudio';
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
})();
