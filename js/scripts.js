$(document).ready(function() {

  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 80) {
      $('#nav-fixed').addClass('visible');
    } else {
      $('#nav-fixed').removeClass('visible');
    }
  });

  $('a[href^="#"]').on('click', function(event) {
    var target = $(this).attr('href');
    if (target === '#') return;
    event.preventDefault();
    var offset = $(target).offset().top - 60;
    $('html, body').animate({ scrollTop: offset }, 300);
  });

});
