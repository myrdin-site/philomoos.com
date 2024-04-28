//Responsive javascript
var x = window.matchMedia("(min-width: 1024px)");
const mediaQuery = window.matchMedia("(max-width: 1024px)");

console.log("linked");

// Navigation on mobile

let hamburger = document.querySelector("#hamburger");
let mobileMenu = document.querySelector("#menu-mobile");
let links = document.getElementsByClassName("link");

// Toggle menu
hamburger.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
  hamburger.setAttribute("aria-expanded", "true");
});

if (mediaQuery.matches) {
  for (var j = 0; j < links.length; j++) {
    links[j].addEventListener("click", function () {
      mobileMenu.classList.toggle("active");
    });
  }
}

// Close with escape
document.addEventListener("keydown", function (e) {
  const keyCode = e.keyCode ? e.keyCode : e.which;

  if (keyCode === 27 && mobileMenu.classList.contains("active")) {
    mobileMenu.classList.toggle("active");
    hamburger.focus();
  }
});

//Space for anchor links
function addMargin() {
  window.scrollTo(0, window.pageYOffset - 100);
}

window.addEventListener("hashchange", addMargin);

// Slideshow
var timer = null;
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  clearTimeout(timer);
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  clearTimeout(timer);
  showSlides((slideIndex = n));
}

//Slideshow logic
function showSlides(n) {
  var slides;
  var i;
  var dots;
  var x = window.matchMedia("(min-width: 1024px)");
  if (x.matches) {
    slides = document.getElementsByClassName("my-slides-desktop");
    dots = document.getElementsByClassName("dot-desktop");
  } else {
    slides = document.getElementsByClassName("my-slides");
    dots = document.getElementsByClassName("dot");
  }
  if (n == undefined) {
    n = ++slideIndex;
  }
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeSlide", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " activeSlide";
}

// Keyboard Navigation
document.addEventListener("keydown", function (e) {
  const keyCode = e.keyCode ? e.keyCode : e.which;

  if (keyCode === 39) {
    plusSlides(1);
  } else if (keyCode === 37) {
    plusSlides(-1);
  }
});

// Play/Pause

var play = document.querySelector(".play");
var pause = document.querySelector(".pause");
var btnplaypause = document.querySelector(".slides-playpause");
var carouselSlides = document.querySelector(".carousel-items");

play.style.display = "block";

btnplaypause.addEventListener("click", function () {
  if (play.style.display === "block") {
    play.style.display = "none";
    pause.style.display = "block";
    timer = setInterval(showSlides, 5000);
  } else {
    pause.style.display = "none";
    play.style.display = "block";
    clearInterval(timer);
  }
});

// Scrolltotop
// scrolltotop.js

// Execute a function when the window is being scrolled
window.onscroll = function () { scrollFunction() };

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunction() {
  // Get the button
    var mybutton = document.getElementById("scrollToTopButton");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.opacity = 1;
        mybutton.style.visibility = "visible";
    } else {
        mybutton.style.opacity = 0;
        mybutton.style.visibility = "hidden";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
