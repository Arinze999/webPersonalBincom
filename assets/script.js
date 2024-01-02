const navToggle = document.querySelector(".nav-toggle");
const navBar = document.querySelector(".nav-bar").querySelector("#nav-list");


// toggle responsive navbar
navToggle.addEventListener("click", () => {
  navBar.classList.toggle("show-nav");
  console.log(navBar);
});

const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  });
});