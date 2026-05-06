// Smooth navbar background on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 40) {
    navbar.style.background = 'rgba(10, 22, 40, 0.98)';
  } else {
    navbar.style.background = 'rgba(10, 22, 40, 0.92)';
  }
});

// Form submission
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const msg = document.getElementById('successMsg');
  btn.textContent = 'Đang gửi...';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Đã gửi!';
    msg.style.display = 'block';
    e.target.reset();
    setTimeout(() => {
      btn.textContent = 'Gửi đăng ký tư vấn';
      btn.disabled = false;
      msg.style.display = 'none';
    }, 5000);
  }, 1000);
}

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.info-card, .career-card, .why-card, .timeline-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
  observer.observe(el);
});