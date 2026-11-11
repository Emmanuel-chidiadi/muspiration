/* MUSPIRATION official website: small, dependency-free JavaScript */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 1. Footer year: always shows the current year */
  var year = document.getElementById('year');
  if (year) { year.textContent = new Date().getFullYear(); }

  /* 2. Mobile menu */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  var desktopQuery = window.matchMedia('(min-width: 900px)');

  function setMenu(open) {
    if (!toggle || !nav) { return; }
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) { setMenu(false); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        toggle.focus();
      }
    });
    document.addEventListener('click', function (e) {
      if (toggle.getAttribute('aria-expanded') === 'true' && !e.target.closest('.site-header')) { setMenu(false); }
    });
    var onResize = function (q) { if (q.matches) { setMenu(false); } };
    if (desktopQuery.addEventListener) { desktopQuery.addEventListener('change', onResize); }
  }

  /* 3. After an in-page link is used, move keyboard focus to that section */
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href^="#"]');
    if (!link) { return; }
    var id = link.getAttribute('href').slice(1);
    var target = id ? document.getElementById(id) : null;
    if (target && target.tagName === 'SECTION') {
      window.setTimeout(function () { target.focus({ preventScroll: true }); }, reduceMotion ? 0 : 600);
    }
  });

  /* 4. Highlight the nav link of the section currently on screen */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.site-nav a'));
  var sections = navLinks
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    var activeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { return; }
        navLinks.forEach(function (a) {
          var on = a.getAttribute('href') === '#' + entry.target.id;
          a.classList.toggle('is-active', on);
          if (on) { a.setAttribute('aria-current', 'true'); } else { a.removeAttribute('aria-current'); }
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach(function (s) { activeObserver.observe(s); });
  }

  /* 5. Gentle reveal as sections scroll into view */
  var revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealItems.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealItems.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* 6. Decorative sound-wave bars in the hero */
  document.querySelectorAll('.wave').forEach(function (wave) {
    var count = parseInt(wave.getAttribute('data-bars'), 10) || 30;
    for (var i = 0; i < count; i++) {
      var envelope = Math.pow(Math.sin(Math.PI * (i + 0.5) / count), 0.8);
      var variation = Math.abs(Math.sin(i * 0.75) * 0.6 + Math.sin(i * 1.9 + 1) * 0.4);
      var bar = document.createElement('i');
      bar.style.height = Math.round(14 + 86 * envelope * (0.3 + 0.7 * variation)) + '%';
      wave.appendChild(bar);
    }
  });
})();
