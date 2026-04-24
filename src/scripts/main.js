/* =========================================================
   Gabriel Gadelha — Landing Page Casamentos
   Interações e animações
   ========================================================= */

(() => {
  'use strict';

  document.documentElement.classList.add('js-ready');

  const injectYoutubeGalleryStyles = () => {
    if (document.querySelector('link[data-youtube-gallery-style="true"]')) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './src/styles/youtube-inline-gallery.css';
    link.dataset.youtubeGalleryStyle = 'true';
    document.head.appendChild(link);
  };

  const renderViewsHighlight = () => {
    const heroText = document.querySelector('.hero-text');
    const heroNote = heroText?.querySelector('.hero-note');
    if (!heroText || !heroNote || heroText.querySelector('.views-highlight')) return;

    const stats = document.createElement('div');
    stats.className = 'views-highlight reveal is-visible';
    stats.innerHTML = `
      <span class="views-highlight__eyebrow">Canal oficial no YouTube</span>
      <strong class="views-highlight__number">+20.684.081 visualizações</strong>
      <p class="views-highlight__text"><strong>Mais prova social, mais autoridade e mais confiança</strong> para quem está decidindo o show do casamento. O cliente sente que está falando com um artista já validado pelo público.</p>
    `;

    heroNote.insertAdjacentElement('afterend', stats);
  };

  const renderYoutubeShowcase = () => {
    const experienceSection = document.getElementById('experiencia');
    const grid = experienceSection?.querySelector('.shorts-grid');
    const lead = experienceSection?.querySelector('.section-lede');
    const note = experienceSection?.querySelector('.video-note');

    if (!experienceSection || !grid) return;

    injectYoutubeGalleryStyles();

    const videos = [
      { id: 'b0_z5yUthmI', title: 'Clipe oficial no canal', text: 'Clique para assistir aqui no site e seguir para o orçamento quando fizer sentido.' },
      { id: 'b_WnRmVPS00', title: 'Gabriel Gadelha ao vivo', text: 'Mais um registro para mostrar presença de palco sem tirar o visitante da página.' },
      { id: 'p3lRNXTmpew', title: 'Show com energia de pista', text: 'Conteúdo pensado para reforçar autoridade, emoção e experiência ao vivo.' },
      { id: 'nskW2NeJgp0', title: 'Performance para aquecer o lead', text: 'Assista no próprio site e avance para o WhatsApp quando quiser pedir proposta.' },
      { id: 'koCvq_mlAoo', title: 'Mais prova visual do repertório', text: 'Mais prova visual para o cliente entender a entrega sem sair da landing page.' },
      { id: 'ohLu_Dm8k5A', title: 'Canal oficial do Gabriel', text: 'Seleção do canal oficial para manter o visitante aquecido antes do clique final.' }
    ];

    grid.classList.add('yt-showcase-grid');
    grid.innerHTML = videos.map((video, index) => `
      <article class="short-card yt-showcase-card ${index === 0 ? 'yt-showcase-card--featured' : ''} reveal is-visible">
        <button
          class="yt-showcase-trigger"
          type="button"
          data-youtube-id="${video.id}"
          data-video-title="${video.title}"
          data-cta="youtube_inline_play"
          data-section="experiencia"
          aria-label="Assistir ${video.title} sem sair do site"
        >
          <img
            class="yt-showcase-thumb"
            src="https://i.ytimg.com/vi/${video.id}/hqdefault.jpg"
            alt="Capa do ${video.title} de Gabriel Gadelha"
            loading="lazy"
          />
          <span class="yt-showcase-overlay"></span>
          <span class="yt-showcase-play" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
          </span>
          <span class="yt-showcase-chip">Assistir no site</span>
        </button>
        <div class="short-meta yt-showcase-meta">
          <h3>${video.title}</h3>
          <p>${video.text}</p>
        </div>
      </article>
    `).join('');

    if (lead) {
      lead.textContent = 'Clique em qualquer capa para assistir no próprio site. A ideia é manter o visitante aquecido, vendo provas reais de palco, até o momento de pedir orçamento no WhatsApp.';
    }

    if (note) {
      note.innerHTML = 'Os vídeos abaixo foram puxados do canal oficial do Gabriel Gadelha. Assim o cliente assiste tudo aqui na landing page, sem abrir modal e sem sair do site antes de avançar para o <a href="https://wa.me/5519993941536?text=Ol%C3%A1%2C%20gostaria%20de%20pedir%20or%C3%A7amento%20para%20show%20de%20casamento%20com%20Gabriel%20Gadelha.%20Data%20do%20evento%3A%20___%20%2F%20Cidade%3A%20___%20%2F%20Local%3A%20___%20%2F%20Convidados%3A%20___" target="_blank" rel="noopener">WhatsApp de orçamento</a>.';
    }
  };

  const renderAuthorityMosaic = () => {
    const authoritySection = document.querySelector('.autoridade');
    const grid = authoritySection?.querySelector('.autoridade-mosaic');
    const lead = authoritySection?.querySelector('.section-lede');
    if (!authoritySection || !grid) return;

    injectYoutubeGalleryStyles();

    const artists = [
      {
        cls: 'authority-plus-card authority-plus-card--hero reveal is-visible',
        image: './assets/images/autoridade-marilia-mendonca.jpeg',
        kicker: 'Com',
        name: 'Marília Mendonça',
        text: 'Imagem forte de bastidor e proximidade com uma das vozes mais marcantes do sertanejo.'
      },
      {
        cls: 'authority-plus-card authority-plus-card--wide reveal is-visible',
        image: './assets/images/autoridade-wesley-safadao.jpeg',
        kicker: 'Com',
        name: 'Wesley Safadão',
        text: 'Prova de trânsito em grandes palcos e conexão com nomes de massa do mercado nacional.'
      },
      {
        cls: 'authority-plus-card authority-plus-card--standard reveal is-visible',
        image: './assets/images/autoridade-henrique-juliano.jpeg',
        kicker: 'Com',
        name: 'Henrique & Juliano',
        text: 'Mais um registro que reforça bagagem real, presença de cena e autoridade artística.'
      },
      {
        cls: 'authority-plus-card authority-plus-card--standard reveal is-visible',
        image: './assets/images/autoridade-guilherme-benuto.jpeg',
        kicker: 'Com',
        name: 'Guilherme & Benuto',
        text: 'Material de bastidor que aproxima o visitante da vivência profissional do Gabriel.'
      },
      {
        cls: 'authority-plus-card authority-plus-card--wide reveal is-visible',
        image: './assets/images/autoridade-cleyton-romario.jpeg',
        kicker: 'Com',
        name: 'Cleyton & Romário',
        text: 'Mosaico atualizado para mostrar rede, palco e convivência com artistas reconhecidos.'
      }
    ];

    grid.classList.add('authority-plus-grid');
    grid.innerHTML = artists.map((artist) => `
      <figure class="${artist.cls}">
        <div class="authority-plus-media">
          <img src="${artist.image}" alt="Gabriel Gadelha com ${artist.name}" loading="lazy" />
          <span class="authority-plus-overlay"></span>
          <figcaption class="authority-plus-caption">
            <span class="authority-plus-kicker">${artist.kicker}</span>
            <span class="authority-plus-name">${artist.name}</span>
          </figcaption>
        </div>
        <div class="authority-plus-body">
          <p>${artist.text}</p>
        </div>
      </figure>
    `).join('');

    if (lead) {
      lead.textContent = 'Fotos reais com artistas conhecidos reforçam autoridade, mostram estrada de palco e ajudam o cliente a sentir mais segurança na hora de contratar um show premium para casamento.';
    }
  };

  renderViewsHighlight();
  renderYoutubeShowcase();
  renderAuthorityMosaic();

  const yearEl = document.getElementById('yearNow');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const header = document.getElementById('siteHeader');
  const onScroll = () => {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

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
      const top =
        target.getBoundingClientRect().top +
        window.scrollY -
        (window.innerWidth > 1024 ? 80 : 70);
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

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

    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: 'youtube_inline_play',
        video_id: videoId,
        video_title: videoTitle,
        section: 'experiencia'
      });
    }
  });

  document.addEventListener('click', (event) => {
    const cta = event.target.closest('[data-cta]');
    if (!cta || !Array.isArray(window.dataLayer)) return;
    window.dataLayer.push({
      event: 'cta_click',
      cta_name: cta.dataset.cta || 'unknown',
      section: cta.dataset.section || 'unknown',
      href: cta.getAttribute('href') || ''
    });
  });

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
