let searchform = document.querySelector('.search-form');
  document.querySelector('#search-btn').onclick = () =>
  {
    searchform.classList.toggle('active');
    loginForm.classList.toggle('active');
    shoppingbox.classList.remove('active');
    navbar.classList.remove('active');
  }

  let shoppingbox = document.querySelector('.shopping-box');
  document.querySelector('#cart-btn').onclick = () =>
  {
    shoppingbox.classList.toggle('active');
    loginForm.classList.toggle('active');
    searchform.classList.remove('active');
    navbar.classList.remove('active');
  }

  let loginForm = document.querySelector('.login-btn');
  document.querySelector('#login-btn').onclick = () =>
  {
    loginForm.classList.toggle('active');
    shoppingbox.classList.remove('active');
    searchform.classList.remove('active');
    navbar.classList.remove('active');
  }
  let navbar = document.querySelector('.loginform');
  document.querySelector('#menu-btn').onclick = () =>
  {
    navbar.classList.remove('active');
    loginForm.classList.toggle('active');
    shoppingbox.classList.remove('active');
    searchform.classList.remove('active');
    
  }
  window.onscroll = () =>
  {
    loginForm.classList.toggle('active');
    shoppingbox.classList.remove('active');
    searchform.classList.remove('active');
    navbar.classList.remove('active');
  }

  let slideIndex = 1;
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
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}