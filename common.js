bgChanger = () => {
  //   console.log(this.scrollY);
  if (this.scrollY > this.innerHeight) {
    document.body.classList.add("bg-active");
  } else {
    document.body.classList.remove("bg-active");
  }
};

window.addEventListener("scroll", bgChanger);

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(item => {
    item.classList.toggle("fade");
  })
});