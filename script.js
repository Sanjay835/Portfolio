// Animate skill bars on scroll
window.addEventListener('scroll', () => {
  const skillsSection = document.querySelector('.skills-container');
  if (!skillsSection) return; // Skip if section not found

  const sectionTop = skillsSection.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight * 0.8; // Start animation when section is near viewport

  if (sectionTop < triggerPoint) {
    document.querySelectorAll('.progress').forEach(bar => {
      const targetWidth = bar.getAttribute('data-width');
      if (!bar.style.width || bar.style.width === "0px") {
        bar.style.width = targetWidth;
        bar.style.opacity = 1;
        bar.style.transition = 'width 1.5s ease-out, opacity 0.8s ease';
      }
    });
  }
});

// Smooth scrolling for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Moving subtitle text (continuous marquee)
const movingText = document.querySelector('.moving-text span');
if (movingText) {
  // Duplicate text for seamless loop
  const clone = movingText.cloneNode(true);
  movingText.parentElement.appendChild(clone);
}
