// Perth EMDR Therapy — Main JS

document.addEventListener('DOMContentLoaded', () => {

  // ─── Hamburger Menu ─────────────────────────────
  const hamburger = document.querySelector('.hamburger');
  const navOverlay = document.querySelector('.nav-overlay');
  const navClose = document.querySelector('.nav-close');

  if (hamburger && navOverlay) {
    hamburger.addEventListener('click', () => {
      navOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  if (navClose && navOverlay) {
    navClose.addEventListener('click', () => {
      navOverlay.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  // Close overlay on nav link click
  document.querySelectorAll('.nav-overlay a').forEach(link => {
    link.addEventListener('click', () => {
      if (navOverlay) {
        navOverlay.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

  // ─── Contact Form ────────────────────────────────
  const form = document.querySelector('.contact-form');
  const successMsg = document.querySelector('.form-success');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.style.display = 'none';
      if (successMsg) {
        successMsg.style.display = 'block';
      }
    });
  }

  // ─── Scroll Reveal ───────────────────────────────
  const reveals = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(el => observer.observe(el));
  } else {
    // Fallback: show all
    reveals.forEach(el => el.classList.add('visible'));
  }

});
