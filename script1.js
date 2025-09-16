// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.onclick = () => navLinks.classList.toggle('active');

// Simple contact form submit with feedback (no backend)
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('formStatus').textContent =
    'Thank you for reaching out! I will get back to you soon.';
  this.reset();
});
