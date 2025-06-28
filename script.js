// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Rotating roles with fade animation
const highlight = document.querySelector('.highlight');
const roles = ['Full Stack Developer', 'MERN Developer', 'Frontend Enthusiast', 'Backend Engineer'];
let i = 0;

setInterval(() => {
  if (highlight) {
    highlight.classList.remove('fade-out');
    void highlight.offsetWidth; // force reflow to restart animation
    highlight.textContent = roles[i];
    highlight.classList.add('fade-out');
    i = (i + 1) % roles.length;
  }
},3000); // every 3 seconds

// Optional: Success alert for Formspree submissions
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', function () {
    setTimeout(() => {
      alert('Thanks! Your message has been sent.');
    }, 1000); // shows after form redirects
  });
}
