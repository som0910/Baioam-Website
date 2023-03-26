var lastScrollTop = 0;
navbar = document.getElementById('navbar');
window.addEventListener("scroll", function () {
  var scrollTop = window.pageXOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = '-150px';
  } else {
    navbar.style.top = '0';
  }
  lastScrollTop = scrollTop;
})


$('.carousel').carousel({
  interval: 10000
})