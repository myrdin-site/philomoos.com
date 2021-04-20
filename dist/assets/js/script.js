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
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("my-slides");
  var dots = document.getElementsByClassName("dot");
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

