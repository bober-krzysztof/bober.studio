// ================================
// Smooth scroll for anchor links
// ================================
const headerOffset = 90;

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;

    e.preventDefault();

    const y = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  });
});

// ================================
// Active navigation on scroll
// ================================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - headerOffset - 20;
    if (window.pageYOffset >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
});

// ================================
// Logo entrance animation
// ================================
window.addEventListener('load', () => {
  const logo = document.querySelector('.logo-img');
  if (!logo) return;

  logo.style.opacity = '0';
  logo.style.transform = 'translateY(-8px)';

  requestAnimationFrame(() => {
    logo.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    logo.style.opacity = '1';
    logo.style.transform = 'translateY(0)';
  });
});
