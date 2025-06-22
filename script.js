
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
  const fromTop = window.scrollY + 90;
  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);
    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
