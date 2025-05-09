// Placeholder for TaayiKaiRuchi interactivity
// Add navigation or form handling scripts here

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for contacting TaayiKaiRuchi!');
      form.reset();
    });
  }

  // Flowing carousel slider (no arrows, only auto-slide)
  const wraps = document.querySelectorAll('.slider-img-wrap');
  let current = 0;
  function updateFlow() {
    wraps.forEach((wrap, i) => {
      wrap.classList.remove('center', 'left', 'right');
      if (i === current) {
        wrap.classList.add('center');
      } else if (i === (current - 1 + wraps.length) % wraps.length) {
        wrap.classList.add('left');
      } else if (i === (current + 1) % wraps.length) {
        wrap.classList.add('right');
      }
    });
  }
  function next() {
    current = (current + 1) % wraps.length;
    updateFlow();
  }
  updateFlow();
  setInterval(next, 3000);

  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.getElementById('nav-list');
  if (menuToggle && navList) {
    menuToggle.addEventListener('click', function() {
      const isOpen = navList.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      menuToggle.classList.toggle('active', isOpen);
    });
    // Optional: close menu when a link is clicked (for better UX)
    navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', false);
        menuToggle.classList.remove('active');
      });
    });
  }
}); 