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
  setToMaxHeight();
});

document.getElementById("next").addEventListener("click", next);
document.getElementById("prev").addEventListener("click", prev);
var curSlide = 0;
var slides = $('.project-slider .card:not(.slick-cloned)');

$('.project-slider').on('init', function(event, slick){
    slides[0].style.opacity = 1;
});

//onchange
$('.project-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    slides[currentSlide].style.opacity = 0.5;
    slides[nextSlide].style.opacity = 1;
});

function next() {
    $('.project-slider').slick('slickNext');
    curSlide = $('.project-slider').slick('slickCurrentSlide');
}

function prev() {
    $('.project-slider').slick('slickPrev');
    curSlide = $('.project-slider').slick('slickCurrentSlide');
}

function setToMaxHeight() {
    var highestBox = 0;
       slides.each(function(){
           if($(this).height() > highestBox){
           highestBox = $(this).height();
       }
   });
   slides.css('min-height', highestBox);
}
