/* Tampa Tire Rescue — interactions
   Vanilla JS + GSAP/ScrollTrigger (loaded via CDN, defer).
   Mobile-first, reduced-motion safe, fallbacks for every animation. */

(() => {
  'use strict';

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  // ----- Year -----
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // ----- Nav scroll state -----
  const nav = $('.nav');
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 24);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ----- Mobile nav drawer -----
  const toggle = $('.nav-toggle');
  const closeNav = () => {
    if (!nav) return;
    nav.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
    if (toggle) toggle.setAttribute('aria-label', 'Open menu');
  };
  const openNav = () => {
    if (!nav) return;
    nav.setAttribute('aria-expanded', 'true');
    document.body.classList.add('no-scroll');
    if (toggle) toggle.setAttribute('aria-label', 'Close menu');
  };
  if (toggle) {
    toggle.addEventListener('click', () => {
      const expanded = nav.getAttribute('aria-expanded') === 'true';
      expanded ? closeNav() : openNav();
    });
  }
  $$('.nav-links a').forEach(a => a.addEventListener('click', closeNav));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeNav(); });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 720) closeNav();
  });

  // ----- Smooth anchor scrolling with offset for sticky nav -----
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (!id || id === '#' || id.length < 2) return;
      const target = document.getElementById(id.slice(1));
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: reduced ? 'auto' : 'smooth' });
    });
  });

  // ----- Reveal observer + 3-layer fallback -----
  const reveals = $$('.reveal');
  const reveal = el => el.classList.add('in');

  if (reduced) {
    reveals.forEach(reveal);
  } else if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          reveal(entry.target);
          io.unobserve(entry.target);
        }
      }
    }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => io.observe(el));

    // 600ms catch-up for anything within 2× viewport
    setTimeout(() => {
      const vh = window.innerHeight * 2;
      reveals.forEach(el => {
        if (!el.classList.contains('in') && el.getBoundingClientRect().top < vh) {
          reveal(el);
        }
      });
    }, 600);

    // 3s final force-reveal
    setTimeout(() => reveals.forEach(reveal), 3000);
  } else {
    reveals.forEach(reveal);
  }

  // ----- Count-up for stat number -----
  const counters = $$('[data-count]');
  const animateCounter = el => {
    if (el.dataset.done === '1') return;
    const target = parseInt(el.dataset.count, 10);
    if (Number.isNaN(target)) return;
    const dur = 1500;
    const start = performance.now();
    const ease = t => 1 - Math.pow(1 - t, 3);
    const step = now => {
      const t = Math.min((now - start) / dur, 1);
      el.textContent = Math.round(target * ease(t)).toString();
      if (t < 1) requestAnimationFrame(step);
      else { el.textContent = String(target); el.dataset.done = '1'; }
    };
    requestAnimationFrame(step);
  };

  if (counters.length) {
    if (reduced || !('IntersectionObserver' in window)) {
      counters.forEach(el => { el.textContent = el.dataset.count; el.dataset.done = '1'; });
    } else {
      const cIo = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            cIo.unobserve(entry.target);
          }
        }
      }, { threshold: 0.5 });
      counters.forEach(el => cIo.observe(el));
      // 2s settle fallback
      setTimeout(() => counters.forEach(el => {
        if (el.dataset.done !== '1') { el.textContent = el.dataset.count; el.dataset.done = '1'; }
      }), 2000);
    }
  }

  // ----- GSAP scroll choreography -----
  const initGsap = () => {
    if (typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined') return;
    if (reduced) return;
    const { gsap, ScrollTrigger } = window;
    gsap.registerPlugin(ScrollTrigger);

    // hero subtle parallax on the background tire image
    const hero = $('.hero');
    if (hero) {
      gsap.to(hero, {
        backgroundPosition: '50% 30%',
        ease: 'none',
        scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true }
      });
    }

    // map pins pop in (these aren't in the CSS .reveal system)
    const pins = $$('.area-pin');
    if (pins.length) {
      gsap.set(pins, { scale: 0, opacity: 0 });
      ScrollTrigger.create({
        trigger: '.area-map',
        start: 'top 80%',
        once: true,
        onEnter: () => gsap.to(pins, {
          scale: 1, opacity: 1, duration: .5, ease: 'back.out(2)', stagger: 0.04
        })
      });
    }

    // final CTA headline scale-in (unique micro-interaction not covered by .reveal)
    const finalH = $('.final-cta h2');
    if (finalH) {
      gsap.set(finalH, { scale: 0.94 });
      ScrollTrigger.create({
        trigger: '.final-cta',
        start: 'top 80%',
        once: true,
        onEnter: () => gsap.to(finalH, { scale: 1, duration: .8, ease: 'power3.out' })
      });
    }
  };

  // Wait for GSAP defer-loaded scripts to be available
  if (document.readyState === 'complete') {
    initGsap();
  } else {
    window.addEventListener('load', initGsap);
  }
})();
