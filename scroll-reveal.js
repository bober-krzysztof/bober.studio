// Scroll reveal animations using IntersectionObserver
const revealElements = document.querySelectorAll('section, .reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach(el => {
  el.classList.add('reveal-init');
  revealObserver.observe(el);
});
