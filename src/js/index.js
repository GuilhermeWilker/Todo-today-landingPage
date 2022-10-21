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

let btn2 = document.querySelectorAll(".btn2");
let btn = document.querySelectorAll(".btn1");

function btnaS() {
  if (btn && btn2) {
    window.location = "https://guilhermewilker.github.io/Todo-Today/";
    target = "_blank";
  }
}

console.log(btnaS);
