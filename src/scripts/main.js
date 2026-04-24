/* =========================================================
   Gabriel Gadelha — Landing Page Casamentos
   Interações e ajustes finais
   ========================================================= */

(() => {
  'use strict';

  document.documentElement.classList.add('js-ready');

  const injectYoutubeGalleryStyles = () => {
    if (document.querySelector('link[data-youtube-gallery-style="true"]')) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './src/styles/youtube-inline-gallery.css?v=20260424-5';
    link.dataset.youtubeGalleryStyle = 'true';
    document.head.appendChild(link);
  };

  const updateViewsHighlight = () => {
    const heroText = document.querySelector('.hero-text');
    if (!heroText) return;

    let stats = heroText.querySelector('.views-highlight');
    if (!stats) {
      stats = document.createElement('div');
      stats.className = 'views-highlight reveal is-visible';
      const anchor = heroText.querySelector('.hero-note') || heroText.querySelector('.hero-ctas');
      anchor?.insertAdjacentElement('afterend', stats);
    }

    stats.innerHTML = `
      <span class="views-highlight__eyebrow">Canal oficial no YouTube</span>
      <strong class="views-highlight__number">+20.684.081</strong>
      <span class="views-highlight__label">visualizações no canal oficial</span>
    `;
  };

  const renderYoutubeShowcase = () => {
    const experienceSection = document.getElementById('experiencia');
    const grid = experienceSection?.querySelector('.shorts-grid');
    const head = experienceSection?.querySelector('.section-head');
    const note = experienceSection?.querySelector('.video-note');

    if (!experienceSection || !grid) return;

    injectYoutubeGalleryStyles();

    if (head) head.style.display = 'none';
    if (note) note.style.display = 'none';

    const videos = [
      { id: 'b0_z5yUthmI', title: 'Vídeo 01' },
      { id: 'b_WnRmVPS00', title: 'Vídeo 02' },
      { id: 'p3lRNXTmpew', title: 'Vídeo 03' },
      { id: 'nskW2NeJgp0', title: 'Vídeo 04' },
      { id: 'koCvq_mlAoo', title: 'Vídeo 05' },
      { id: 'ohLu_Dm8k5A', title: 'Vídeo 06' }
    ];

    grid.classList.add('yt-showcase-grid');
    grid.innerHTML = videos.map((video) => `
      <article class="short-card yt-showcase-card reveal is-visible">
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
            alt="Capa do vídeo ${video.title} de Gabriel Gadelha"
            loading="lazy"
          />
          <span class="yt-showcase-play" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
          </span>
        </button>
      </article>
    `).join('');
  };

  const renderAuthorityMosaic = () => {
    const authoritySection = document.querySelector('.autoridade');
    const grid = authoritySection?.querySelector('.autoridade-mosaic');
    if (!authoritySection || !grid) return;

    injectYoutubeGalleryStyles();

    const artists = [
      { image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBCQkJDAsMGA0NGDAhHCEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMf/AABEIAM0BaAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBAwQCB//EAD8QAAEDAgQEBAQDBQkAAAAAAAEAAgMEEQUSITFBBhMiUWFxkRRCgZEUQlKxwfAjM2JygqKy0eEkQ1Njc8L/xAAbAQEAAwEBAQEAAAAAAAAAAAAAAQIDBAUGB//EADIRAAICAQIDBQYEBwAAAAAAAAABAgMRBBIhMUFRBRMiYXGBkQYUMqGxwfAjQlLh8RT/2gAMAwEAAhEDEQA/APcHoooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigArF8J+L7L4h6be6rYJ5N6gB0lL5xyCA4I9R3GfU5zWlXxX4n8Q6j4i1+9uNQvGkQ7o1jdQwGQQDggjoaQe9M0lQ1KjG8i0+QeJfEeoeH7jULzULq4tJb1NsjxwP0B6H1J4zxU+t+JfD3h+5sNW1Gx1C5jUyfaLQ8YGCSMZB7nI5x29alFfI/wAQdY1rw14n8Q6nqs0sH2a5n/AGS2U7m4J7n5QeR1zjvQ5wTnPmnClSg2+R6BRRRWJYUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVwnxK8beGfCeq6db+I7m8s7m6jMck0S7iRgjB3AE9uPp0r0aivlP4peNfCfhjXdU8W6jY2m2uZ7W5SR4h8zM4JwDggEDr1q8oJcZ3Rz4dRjL4n1w7TRRRX2h4wUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVyHxP8UaT4U8N2mq3sSzzXGwWsrbTIEOeSB2PI9K9Boor5H+KXjXwn4Y13VPFuo2NptqW7S2uUkJ4j8zM4JwDggEDr1r0MNSlK1OZs8Woooo+oCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr5f8TfE3hvwtrVzrMkgju7a3ikmxyI7bWwQe4bJ9SfrXqVFFb4f2lOS1R5+X5n4j0D4n+JvDPhbU7nV5JBHd21vFJNjkR22tgA9w2T6k/Wt7w54r0j4g6RZ6/aqJYLm3jEcj7lOWlQeD3Hce3WtGivns+o1Jq8j0sN7j4j0D4n+JvDPhbU7nV5JBHd21vFJNjkR22tgA9w2T6k/WuT+JXjjw14P0nVNQ1xHubWaNVaMO0jM2GBOB6g9T0r1OiivmMfVqUo6s9enUoyjyzbCiiivqjzAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK+X/i74k8N+FtVudXkkElnbW8Uk2ORHba2AO4bJ9SfrXqVFFb4f2lOS1R5+X5n4j0D4n+JvDPhbU7nV5JBHd21vFJNjkR22tgA9w2T6k/WuU+InjXw14W1W51eSQSWdtbxSTY5EdtrYA7hsn1J+ter0UV8xjqVSk1eR6+G9x8R6B8T/E3hnwtqdTq8kks7a3ikmxyI7bWwB3DZPqT9a4P4leOPDXg/SdU1DXEe5tZo1Vow7SMzYYE4HqD1PSvTqKK+Yx9WpSjqz16dSjKPLNsKKKK+qPMD//Z", name: 'Marília Mendonça' },
      { image: "data:image/jpeg;base64,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", name: 'Wesley Safadão' },
      { image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBCQkJDAsMGA0NGDAhHCEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMf/AABEIARsBaAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAQIDBQYHB//EAEYQAAIBAwIDBAYGBQMDBQAAAAECAwAEEQUSITFBBhMiUWFxgZEUQrHB0fAUIzNSYoKSsdLh8RYkQ3PCFhckQ1RzorL/xAAaAQACAwEBAAAAAAAAAAAAAAADBAECBQEG/8QALBEAAgIBAwIEBQQDAAAAAAAAAAECEQMEEiExQSJREzJhcYGR8BQigbHB0f/aAAwDAQACEQMRAD8A+g6KKKACiiigAooooAKKKKACiiigAooooAKKKKAPnn4leM/DPg/TdU1DXEe5tZo1Vow7SMzYYE4HqD1PSvVK+T/iV448N+D9J1TUNcR7m1mjVWjDtIzNhgTgeoPU9K9Uor58fUqUo6s9enUoyjyzbCiiivqjzAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr4w+J3jXwn4Y13VPFuo2Nptu7S2uUkJ4j8zM4JwDggEDr1r1OivmMfVqUo6s9enUoyjyzbCiiivqjzAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr4w+J3jXwn4Y13VPFuo2Nptu7S2uUkJ4j8zM4JwDggEDr1r1OivmMfVqUo6s9enUoyjyzbCiiivqjzAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr4w+J3jXwn4Y13VPFuo2Nptu7S2uUkJ4j8zM4JwDggEDr1r1OivmMfVqUo6s9enUoyjyzbCiiivqjzAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr4w+J3jXwn4Y13VPFuo2Nptu7S2uUkJ4j8zM4JwDggEDr1r1OivmMfVqUo6s9enUoyjyzbCiiivqjzAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr4w+J3jXwn4Y13VPFuo2Nptu7S2uUkJ4j8zM4JwDggEDr1r1OivmMfVqUo6s9enUoyjyzbCiiivqjzAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//Z", name: 'Henrique & Juliano' },
      { image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBCQkJDAsMGA0NGDAhHCEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMf/AABEIAM0BaAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAQIDBQYHB//EAD8QAAIBAwIEBAQEBQQDAAAAAAECAwAEEQUSITEGEyJBUWFxgZGx8BRCoSMyQmJy0QdSc5LwJENTY7L/xAAaAQACAwEBAAAAAAAAAAAAAAADBAECBQEG/8QALBEAAgIBAwMDAwUAAAAAAAAAAAECEQMEEiExQVEiMmFxgZGx8AQiobH/2gAMAwEAAhEDEQA/AN7ooorhMgooooAKKKKACiiigAooooAKKKKACiiigAooooA8efE7xP4b8La1c6zJII7u2t4pJscmO21sAHuGyfUn616nXxX4n8R6h4fuNQvNQurq0lvU2yPHQ/0HofUnjPFc1H2sI5o9GKKK+dPqAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK+M/iV448N+D9J1TUNcR7m1mjVWjDtIzNhgTgeoPU9K9Uor5jH1alKOrPXp1KMp8s2wooor6o8wKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr4j+J3jXwn4Y13VPFuo2NptvW7S2uUkJ4j8zM4JwDggEDr1r1eivmMfVqUo6s9enUoyjyzbCiiivqjzAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr4j+J3jXwn4Y13VPFuo2NptvW7S2uUkJ4j8zM4JwDggEDr1r1eivmMfVqUo6s9enUoyjyzbCiiivqjzAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr4j+J3jXwn4Y13VPFuo2NptvW7S2uUkJ4j8zM4JwDggEDr1r1eivmMfVqUo6s9enUoyjyzbCiiivqjzAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr4j+J3jXwn4Y13VPFuo2NptvW7S2uUkJ4j8zM4JwDggEDr1r1eivmMfVqUo6s9enUoyjyzbCiiivqjzAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//2Q==", name: 'Guilherme & Benuto' },
      { image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBCQkJDAsMGA0NGDAhHCEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMf/AABEIAPABaAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBAwQCB//EAD8QAAEDAgQEBAQDBQkAAAAAAAEAAgMEEQUSITFBBhMiUWFxkRRCgZEUQlKxwfAjM2JygqKy0eEkQ1Njc8L/xAAbAQEAAwEBAQEAAAAAAAAAAAAAAQIDBAUGB//EADIRAAICAQIDBQYEBwAAAAAAAAABAgMRBBIhMUFRBRMiYXGBkQYUMqGxwfAjQlLh8RT/2gAMAwEAAhEDEQA/APfXoooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigArF8J+L7L4h6be6rYJ5N6gB0lL5xyCA4I9R3GfU5zWlXxX4n8Q6j4i1+9uNQvGkQ7o1jdQwGQQDggjoaQe9M0lQ1KjG8i0+QeJfEeoeH7jULzULq4tJb1NsjxwP0B6H1J4zxU+t+JfD3h+5sNW1Gx1C5jUyfaLQ8YGCSMZB7nI5x29alFfI/wAQdY1rw14n8Q6nqs0sH2a5n/AGS2U7m4J7n5QeR1zjvQ5wTnPmnClSg2+R6BRRRWJYUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVwnxK8beGfCeq6db+I7m8s7m6jMck0S7iRgjB3AE9uPp0r0aivlP4peNfCfhjXdU8W6jY2m2uZ7W5SR4h8zM4JwDggEDr1q8oJcZ3Rz4dRjL4n1w7TRRRX2h4wUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVyHxP8UaT4U8N2mq3sSzzXGwWsrbTIEOeSB2PI9K9Boor5H+KXjXwn4Y13VPFuo2NptqW7S2uUkJ4j8zM4JwDggEDr1r0MNSlK1OZs8Woooo+oCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr5f8TfE3hvwtrVzrMkgju7a3ikmxyI7bWwQe4bJ9SfrXqVFFb4f2lOS1R5+X5n4j0D4n+JvDPhbU7nV5JBHd21vFJNjkR22tgA9w2T6k/Wt7w54r0j4g6RZ6/aqJYLm3jEcj7lOWlQeD3Hce3WtGivns+o1Jq8j0sN7j4j0D4n+JvDPhbU7nV5JBHd21vFJNjkR22tgA9w2T6k/WuT+JXjjw14P0nVNQ1xHubWaNVaMO0jM2GBOB6g9T0r1OiivmMfVqUo6s9enUoyjyzbCiiivqjzAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK+X/i74k8N+FtVudXkkElnbW8Uk2ORHba2AO4bJ9SfrXqVFFb4f2lOS1R5+X5n4j0D4n+JvDPhbU7nV5JBHd21vFJNjkR22tgA9w2T6k/WuU+InjXw14W1W51eSQSWdtbxSTY5EdtrYA7hsn1J+ter0UV8xjqVSk1eR6+G9x8R6B8T/E3hnwtqdTq8kks7a3ikmxyI7bWwB3DZPqT9a4P4leOPDXg/SdU1DXEe5tZo1Vow7SMzYYE4HqD1PSvTqKK+Yx9WpSjqz16dSjKPLNsKKKK+qPMD//Z", name: 'Cleyton & Romário' }
    ];

    grid.classList.add('authority-plus-grid');
    grid.innerHTML = artists.map((artist) => `
      <figure class="authority-plus-card authority-plus-card--standard reveal is-visible">
        <div class="authority-plus-media">
          <img src="${artist.image}" alt="Gabriel Gadelha com ${artist.name}" loading="lazy" />
          <span class="authority-plus-overlay"></span>
          <figcaption class="authority-plus-caption">
            <span class="authority-plus-kicker">Com</span>
            <span class="authority-plus-name">${artist.name}</span>
          </figcaption>
        </div>
      </figure>
    `).join('');
  };

  const hideRemovedSection = () => {
    const gallery = document.querySelector('.galeria');
    if (gallery) gallery.style.display = 'none';
  };

  updateViewsHighlight();
  renderYoutubeShowcase();
  renderAuthorityMosaic();
  hideRemovedSection();

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
