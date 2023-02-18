// Navigation on mobile

let hamburger = document.querySelector("#hamburger");
let mobileMenu = document.querySelector("#menu-mobile");
let links = document.getElementsByClassName("link");

// Toggle menu
hamburger.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
  hamburger.setAttribute('aria-expanded', 'true');
});

for (var j = 0; j < links.length; j++) {
  links[j].addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
};

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

//Responsive javascript
var x = window.matchMedia("(min-width: 1024px)");

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
