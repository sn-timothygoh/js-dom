// Page loader
const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const links = document.querySelectorAll('.nav-links li')

const sections = document.querySelectorAll('section')
// const pages = document.querySelectorAll('section')

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

let activePage = 0
let canScroll = true

const git = document.getElementById('git')
const fbHover = document.querySelector('.fb')
const igHover = document.querySelector('.ig')
const twHover = document.querySelector('.tw')

window.addEventListener('load', function() {
  const loader = document.querySelector('.loader')
  loader.className += ' hidden'
})

window.addEventListener('scroll', function() {
  const text = document.querySelector('.page2')
  const textPos = text.getBoundingClientRect().top
  const winPos = window.innerHeight
  textPos < winPos ? text.classList.add('appear') : text.classList.remove('appear')
  this.scrollY > this.innerHeight ? document.body.classList.add('bg-active') : document.body.classList.remove('bg-active')
})

sections.forEach(section => {
  observer.observe(section)
})
hamburger.addEventListener('click', toggleNav)

//close nav
links.forEach(link => {
  link.addEventListener('click', toggleNav)
})

// window.addEventListener('wheel', function(e) {
//   const { deltaY } = e
//   canScroll ? [deltaY < 0 ? slideBack() : slideNext()] : null
// })

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

git.addEventListener('mouseover', function(event) {
  event.target.className += ' git-hover'
  git.style.opacity = '1'
})

git.addEventListener('mouseout', function(event) {
  event.target.className -= ' git-hover'
  git.style.opacity = '0.4'
  git.style.zIndex = '-1'
})

function toggleNav() {
  navLinks.classList.toggle('open')
  links.forEach(item => {
    item.classList.toggle('fade')
  })
}

function navCheck(entries) {
  entries.forEach(entry => {
    const className = entry.target.className
    console.log(className)
    const myClass = className.split(' ')
    console.log(myClass)
    const activeAnchor = document.querySelector(`[data-page=${myClass[0]}]`)
    console.log(activeAnchor)
    const gradientIndex = entry.target.getAttribute('data-index')
    const coords = activeAnchor.getBoundingClientRect()
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

// function slideNext() {
//   if (activePage >= pages.length - 1) {
//     return
//   }
//   canScroll = false
//   setTimeout(() => (canScroll = true), 1000)
//   pages[activePage].classList.remove('slide_active')
//   pages[activePage].classList.add('slide_watched')
//   activePage += 1
//   pages[activePage].classList.add('slide_active')
//   pages[activePage].classList.remove('slide_watched')
// }

// function slideBack() {
//   if (activePage <= 0) {
//     return
//   }
//   canScroll = false
//   setTimeout(() => (canScroll = true), 1000)
//   pages[activePage].classList.remove('slide_active')
//   activePage -= 1
//   pages[activePage].classList.add('slide_active')
//   pages[activePage].classList.remove('slide_watched')
// }
