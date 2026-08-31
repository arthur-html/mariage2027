// Animation fade-in au scroll
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  elements.forEach((el) => {
    el.style.animationPlayState = "paused";
    observer.observe(el);
  });
});

// Scroll doux pour les liens internes (si un jour tu en ajoutes)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});
