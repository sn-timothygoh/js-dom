// Page loader
window.addEventListener("load", function (){
  const loader = document.querySelector('.loader');
  loader.className += " hidden";
});

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

const sections = document.querySelectorAll("section");
const bubble = document.querySelector(".bubble");
const gradient = [
  "linear-gradient(to right top, #f46b45 ,#eea849)",
  "linear-gradient(to right top, #005c97 ,#363795)",
  "linear-gradient(to right top, #e539e5 ,#e35b5e)",
  "linear-gradient(to right top, #43cea2, #185a9d)"
];

const options = {
  threshold: 0.7
}

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
// const navCheck = entries => {
  entries.forEach(entry => {
    // console.log(entry);
    const className = entry.target.className;
    console.log(className);
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    const gradientIndex = entry.target.getAttribute("data-index");
    const coords = activeAnchor.getBoundingClientRect();
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left
    };

    if(entry.isIntersecting) {
      bubble.style.setProperty("left", `${directions.left}px`);
      bubble.style.setProperty("top", `${directions.top}px`);
      bubble.style.setProperty("width", `${directions.width}px`);
      bubble.style.setProperty("height", `${directions.height}px`);

      bubble.style.background = gradient[gradientIndex];
    }
  });
}

sections.forEach(section => {
  observer.observe(section);
});


// Contact or social hover effect
const fbHover = document.querySelector('.fb');
const igHover = document.querySelector('.ig');
const twHover = document.querySelector('.tw');

fbHover.addEventListener("mouseover", function () {
  igHover.style.opacity = ".4";
  twHover.style.opacity = ".4";
});

igHover.addEventListener("mouseover", function () {
  fbHover.style.opacity = ".4";
  twHover.style.opacity = ".4";
});

twHover.addEventListener("mouseover", function() {
  fbHover.style.opacity = ".4";
  igHover.style.opacity = ".4";
});

fbHover.addEventListener("mouseout", function () {
  igHover.style.opacity = "1";
  twHover.style.opacity = "1";
});

igHover.addEventListener("mouseout", function () {
  fbHover.style.opacity = "1";
  twHover.style.opacity = "1";
});

twHover.addEventListener("mouseout", function () {
  fbHover.style.opacity = "1";
  igHover.style.opacity = "1";
});