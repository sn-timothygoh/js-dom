// Page loader
window.addEventListener('load', function() {
  const loader = document.querySelector('.loader')
  loader.className += ' hidden'
})

bgChanger = () => {
  //   console.log(this.scrollY);
  if (this.scrollY > this.innerHeight) {
    document.body.classList.add('bg-active')
  } else {
    document.body.classList.remove('bg-active')
  }
}

window.addEventListener('scroll', bgChanger)

const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const links = document.querySelectorAll('.nav-links li')

// toggle menu burger
// open nav
hamburger.addEventListener('click', toggleNav)

//close nav
links.forEach(link => {
  link.addEventListener('click', toggleNav)
})

function toggleNav() {
  navLinks.classList.toggle('open')
  links.forEach(item => {
    item.classList.toggle('fade')
  })
}

const sections = document.querySelectorAll('section')
const bubble = document.querySelector('.bubble')
const gradient = [
  'linear-gradient(to right top, #f46b45 ,#eea849)',
  'linear-gradient(to right top, #5c258d, #363795)',
  'linear-gradient(to right top, #e539e5 ,#e35b5e)',
  'linear-gradient(to right top, #43cea2, #185a9d)',
]

const options = {
  threshold: 0.8,
}

let observer = new IntersectionObserver(navCheck, options)

function navCheck(entries) {
  entries.forEach(entry => {
    const className = entry.target.className;
    console.log(className);
    const myClass = className.split(' ');
    console.log(myClass);
    const activeAnchor = document.querySelector(`[data-page=${myClass[0]}]`);
    console.log(activeAnchor);
    const gradientIndex = entry.target.getAttribute('data-index');
    const coords = activeAnchor.getBoundingClientRect();
    // console.log(coords);
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left,
    }

    // if (entry.isIntersecting) {
      bubble.style.setProperty('left', `${directions.left}px`)
      bubble.style.setProperty('top', `${directions.top}px`)
      bubble.style.setProperty('width', `${directions.width}px`)
      bubble.style.setProperty('height', `${directions.height}px`)

      bubble.style.background = gradient[gradientIndex]
    // }
  })
}

sections.forEach(section => {
  observer.observe(section)
})

window.addEventListener('wheel', scrollPage)

let activePage = 0
const pages = document.querySelectorAll('section')
let canScroll = true

function scrollPage(e) {
  const { deltaY } = e
  if (canScroll) {
    deltaY > 0 ? slideNext() : slideBack()
  }
}

function slideNext() {
  if (activePage >= pages.length - 1) {
    return
  }
  canScroll = false
  setTimeout(() => (canScroll = true), 1000)
  pages[activePage].classList.remove('slide_active')
  pages[activePage].classList.add('slide_watched')
  activePage += 1
  pages[activePage].classList.add('slide_active')
  pages[activePage].classList.remove('slide_watched')
}

function slideBack() {
  if (activePage <= 0) {
    return
  }
  canScroll = false
  setTimeout(() => (canScroll = true), 1000)
  pages[activePage].classList.remove('slide_active')
  activePage -= 1
  pages[activePage].classList.add('slide_active')
  pages[activePage].classList.remove('slide_watched')
}

// Contact or social hover effect
const fbHover = document.querySelector('.fb')
const igHover = document.querySelector('.ig')
const twHover = document.querySelector('.tw')

fbHover.addEventListener('mouseover', function() {
  igHover.style.opacity = '.4'
  twHover.style.opacity = '.4'
})

igHover.addEventListener('mouseover', function() {
  fbHover.style.opacity = '.4'
  twHover.style.opacity = '.4'
})

twHover.addEventListener('mouseover', function() {
  fbHover.style.opacity = '.4'
  igHover.style.opacity = '.4'
})

fbHover.addEventListener('mouseout', function() {
  igHover.style.opacity = '1'
  twHover.style.opacity = '1'
})

igHover.addEventListener('mouseout', function() {
  fbHover.style.opacity = '1'
  twHover.style.opacity = '1'
})

twHover.addEventListener('mouseout', function() {
  fbHover.style.opacity = '1'
  igHover.style.opacity = '1'
})

window.addEventListener('scroll', scrollAppear)

function scrollAppear() {
  const text = document.querySelector('.page2')
  const textPos = text.getBoundingClientRect().left
  const winPos = window.innerHeight
  if (textPos < winPos) text.classList.add('appear')
  else text.classList.remove('appear')
}

const git = document.getElementById('git')
git.addEventListener('mouseover', function(event) {
  event.target.className += ' git-hover'
  git.style.opacity = '1'
})

git.addEventListener('mouseout', function(event) {
  // event.target.classList.remove("git-hover");
  event.target.className -= ' git-hover'
  git.style.opacity = '0.4'
  git.style.zIndex = '-1'
})
