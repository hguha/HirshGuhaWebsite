$(document).ready(function(){
  $('.project-slider').slick({
        centerMode: true,
        slidesToShow: 1,
        arrows: false,
        dots: true,
        responsive: [
        {
          breakpoint: 900,
          settings: {
            centerMode: false,
          }
        },
        ]
  });

  $('.small-projects').slick({
        centerMode: true,
        slidesToShow: 3,
        arrows: false,
        dots: true,
        responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
          }
        },
        ]
  });

  var smallSlides = $(".small-projects .card:not(.slick-cloned)");

    $('.small-projects').on('mouseover', '.slick-slide', function (e) {
      e.target.style.opacity = 1;
    });

    $('.small-projects').on('mouseleave', '.slick-slide', function (e) {
        if(e.target.classList[0] == "overlay") {
            e.target.style.opacity = 0;
        }
     });

});

var slides = $('.project-slider .card:not(.slick-cloned)');
$('.project-slider').on('init', function(event, slick){
    slides[0].style.opacity = 1;
});

//onchange
$('.project-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    slides[currentSlide].style.opacity = 0.5;
    slides[nextSlide].style.opacity = 1;
});


//overlay stuff


function next(elem) {$(elem).slick('slickNext');}
function prev(elem) {$(elem).slick('slickPrev');}
