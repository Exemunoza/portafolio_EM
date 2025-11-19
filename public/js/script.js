document.addEventListener("DOMContentLoaded", () => {
  console.log("Portafolio cargado correctamente 🚀");

  // Scroll suave con ES6
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });
});
