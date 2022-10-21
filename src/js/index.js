const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// menu responsivo
function menuAbrir() {
  let menuAbrir = document.querySelector("nav ul");

  if (menuAbrir.classList.contains("open")) {
    menuAbrir.classList.remove("open");
  } else {
    menuAbrir.classList.add("open");
  }
}
