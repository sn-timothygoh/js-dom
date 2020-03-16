bgChanger = () => {
  //   console.log(this.scrollY);
  if (this.scrollY > this.innerHeight) {
    document.body.classList.add("bg-active");
  } else {
    document.body.classList.remove("bg-active");
  }
};

window.addEventListener("scroll", bgChanger);

scrollPage = x => {
  var target = document.querySelector(x);
  var targetPosition = target.getBoundingClientRect();
  var startPosition = window.pageYOffset;

  console.log(startPosition);
};
