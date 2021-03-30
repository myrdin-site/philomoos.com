// Navigation on mobile

let hamburger = document.querySelector("#hamburger");
let mobileMenu = document.querySelector("#menu-mobile");

hamburger.addEventListener('click', function(){
    mobileMenu.classList.toggle('active');
    });

// Slideshow

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function hello(){
    console.log("Hello");
};

document.querySelector("#prev").addEventListener('click', plusSlides(1));

var next = document.getElementById("next");
next.addEventListener("click", plusSlides(1));

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("my-slides");
  var dots = document.getElementsByClassName("dot");
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
}


