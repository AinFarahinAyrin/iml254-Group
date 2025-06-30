// script.js
window.addEventListener('DOMContentLoaded', function () {
  const loadingScreen = document.getElementById('loading-screen');
  setTimeout(() => {
    loadingScreen.style.display = 'none';
  }, 5000);

  // Smooth scroll for nav links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
if (href.startsWith('#')) {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    window.scrollTo({
      top: target.offsetTop - 10,
      behavior: 'smooth'
    });
  }
}
    });
}); 

  // Canvas Background (Simple animated dots)
  const canvas = document.getElementById('background-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const dots = Array.from({ length: 60 }).map(() => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dx: Math.random() - 0.5,
    dy: Math.random() - 0.5
  }));

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dots.forEach(dot => {
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 188, 212, 0.7)';
      ctx.fill();

      dot.x += dot.dx;
      dot.y += dot.dy;

      if (dot.x < 0 || dot.x > canvas.width) dot.dx *= -1;
      if (dot.y < 0 || dot.y > canvas.height) dot.dy *= -1;
    });
    requestAnimationFrame(animate);
  }
  animate();

  // Sidebar toggle
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');

  menuToggle.addEventListener('click', function () {
    sidebar.classList.toggle('show');
  });

  document.addEventListener('click', function (e) {
    const isClickInside = sidebar.contains(e.target) || menuToggle.contains(e.target);
    if (!isClickInside && sidebar.classList.contains('show')) {
      sidebar.classList.remove('show');
    }
  });
});