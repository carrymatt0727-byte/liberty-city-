// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(10,10,10,0.98)';
  } else {
    navbar.style.background = 'rgba(10,10,10,0.92)';
  }
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Scroll animations
const animEls = document.querySelectorAll('.feature-card, .content-block, .city-card, .rule-category, .law-chapter');
animEls.forEach(el => el.classList.add('animate-in'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => entry.target.classList.add('visible'), parseInt(delay));
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-in').forEach(el => observer.observe(el));

// Chapter toggles (law code page)
document.querySelectorAll('.chapter-header').forEach(header => {
  header.addEventListener('click', () => {
    const body = header.nextElementSibling;
    const toggle = header.querySelector('.chapter-toggle');
    const isOpen = body.classList.contains('open');
    // Close all
    document.querySelectorAll('.chapter-body').forEach(b => b.classList.remove('open'));
    document.querySelectorAll('.chapter-toggle').forEach(t => t.classList.remove('open'));
    // Open clicked
    if (!isOpen) {
      body.classList.add('open');
      toggle.classList.add('open');
    }
  });
});

// Set active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  link.classList.remove('active');
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});
