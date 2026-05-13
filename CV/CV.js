/* ═══════════════════════════════════════════
   CV.js — Interactividad y animaciones
   ═══════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {
  /* ── 1. Entrada escalonada de los entries ── */
  const entries = document.querySelectorAll(".entry");
  entries.forEach((entry, i) => {
    entry.style.opacity = "0";
    entry.style.transform = "translateX(20px)";
    entry.style.transition = `opacity 0.5s ease ${0.1 + i * 0.08}s, transform 0.5s ease ${0.1 + i * 0.08}s`;
  });

  const observer = new IntersectionObserver(
    (records) => {
      records.forEach((rec) => {
        if (rec.isIntersecting) {
          rec.target.style.opacity = "1";
          rec.target.style.transform = "translateX(0)";
          observer.unobserve(rec.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  entries.forEach((entry) => observer.observe(entry));

  /* ── 2. Glitch sutil en el nombre ── */
  const name = document.querySelector(".name");
  if (name) {
    const originalText = name.textContent;

    const glitchChars = "!<>-_\\/[]{}—=+*^?#@$%&";
    const glitchChance = 0.15; // 15% chance cada ciclo

    function randomGlitch() {
      if (Math.random() > glitchChance) {
        setTimeout(randomGlitch, 2000 + Math.random() * 3000);
        return;
      }

      let iterations = 0;
      const maxIter = 8;
      const interval = setInterval(() => {
        name.textContent = originalText
          .split("")
          .map((char, idx) => {
            if (char === " ") return " ";
            if (Math.random() > 0.7) {
              return glitchChars[
                Math.floor(Math.random() * glitchChars.length)
              ];
            }
            return char;
          })
          .join("");

        if (++iterations >= maxIter) {
          clearInterval(interval);
          name.textContent = originalText;
          setTimeout(randomGlitch, 3000 + Math.random() * 4000);
        }
      }, 60);
    }

    setTimeout(randomGlitch, 2500);
  }

  /* ── 4. Highlight de sección al pasar el mouse ── */
  const sectionTitles = document.querySelectorAll(".section-title");
  sectionTitles.forEach((title) => {
    title.addEventListener("mouseenter", () => {
      title.style.letterSpacing = "0.18em";
      title.style.transition = "letter-spacing 0.3s ease";
    });
    title.addEventListener("mouseleave", () => {
      title.style.letterSpacing = "0.12em";
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "p" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      window.print();
    }
  });
});
