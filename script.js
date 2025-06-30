// Dark mode toggle
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});

// Smooth scroll
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop - 60,
      behavior: 'smooth'
    });
  });
});

// Animate sections on scroll
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Highlight nav
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 70;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('nav ul li a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('active');
    }
  });
});
