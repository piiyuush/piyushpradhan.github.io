// Fade-in + slide-up on scroll (staggered)
const io = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

document.querySelectorAll(".section, .strip").forEach((el) => io.observe(el));

// Stagger child animations inside skill-grid / cert-grid / dmt-tools / eng-list
const childIO = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const kids = entry.target.querySelectorAll(
          ".skill-card, .cert, .dmt-expand, .eng-card, .award, .card, .edu-mini, .strip-item"
        );
        kids.forEach((kid, i) => {
          kid.style.setProperty("--d", `${i * 60}ms`);
          kid.classList.add("stagger-in");
        });
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 }
);

document
  .querySelectorAll(".skill-grid, .cert-grid, .dmt-tools, .eng-list, .strip-inner, .contact-cards")
  .forEach((el) => childIO.observe(el));

// Subtle nav shadow when scrolled past hero
const nav = document.querySelector(".nav");
window.addEventListener(
  "scroll",
  () => {
    if (window.scrollY > 20) nav?.classList.add("scrolled");
    else nav?.classList.remove("scrolled");
  },
  { passive: true }
);
