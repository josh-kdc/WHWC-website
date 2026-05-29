// ============================================
// WALKING HOME WELLNESS COACHING
// Main JavaScript
// ============================================

// ---- NAV SCROLL EFFECT ----
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ---- MOBILE NAV TOGGLE ----
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Close mobile nav when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ---- SCROLL ANIMATIONS ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

// Observe fade-up elements
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Observe process steps with stagger
document.querySelectorAll('.process-step').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.1}s`;
  observer.observe(el);
});

// Observe pillars
document.querySelectorAll('.pillar').forEach((el, i) => {
  el.classList.add('fade-up');
  el.style.transitionDelay = `${i * 0.1}s`;
  observer.observe(el);
});

// Observe credentials
document.querySelectorAll('.credential-item').forEach((el, i) => {
  el.classList.add('fade-up');
  el.style.transitionDelay = `${i * 0.1}s`;
  observer.observe(el);
});

// ---- CONTACT FORM ----
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    // If using Formspree, let the default action handle it
    // This handler adds a success message for AJAX submission
    const action = contactForm.getAttribute('action');
    
    if (action && action !== 'YOUR_FORMSPREE_ENDPOINT') {
      e.preventDefault();
      const formData = new FormData(contactForm);
      
      try {
        const response = await fetch(action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          contactForm.style.display = 'none';
          formSuccess.style.display = 'block';
        } else {
          alert('Something went wrong. Please try again or reach out directly.');
        }
      } catch (err) {
        alert('Something went wrong. Please try again or reach out directly.');
      }
    }
    // If endpoint is still placeholder, let the form submit naturally
    // (will go nowhere but won't break)
  });
}
