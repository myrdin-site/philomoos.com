// Navigation on mobile

let hamburger = document.querySelector("#hamburger");
let mobileMenu = document.querySelector("#menu-mobile");
let links = document.getElementsByClassName("link");

// Toggle menu
hamburger.addEventListener('click', function(){
    mobileMenu.classList.toggle('active');
    });

for (var j = 0; j < links.length; j++) {
links[j].addEventListener('click', function(){
    console.log(links[j]);
    mobileMenu.classList.toggle('active');
    });
};

//Space for anchor links
function addMargin() {
    window.scrollTo(0, window.pageYOffset - 100);
}

window.addEventListener('hashchange', addMargin);

// Slideshow
var timer = null;
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  clearTimeout(timer);
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  clearTimeout(timer);
  showSlides(slideIndex = n);
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
  if (n==undefined) {n = ++slideIndex}
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activeSlide", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " activeSlide";
  
  timer = setTimeout(showSlides, 5000);
}

// Keyboard Navigation
document.addEventListener('keydown', (function(e) {
    const keyCode = e.keyCode ? e.keyCode : e.which
  
    if (keyCode === 39) {
        plusSlides(1)
    } else if (keyCode === 37) {
        plusSlides(-1)
    }
 }))

