$(document).ready(function() {

	$(window).on('scroll', function() {
		if ($(window).scrollTop() > 166) {
			$('.fixed-header').show();
		} else {
			$('.fixed-header').hide();
		}
	});

	$('ul.nav a').on('click', function(event) {
		event.preventDefault();
		var targetID = $(this).attr('href');
		var targetST = $(targetID).offset().top - 48;
		$('body, html').animate({
			scrollTop: targetST + 'px'
		}, 300);
	});

	/* Load Wufoo Contact Form HTML : JS and CSS is loaded on index.html */
	$.get( "../mail/wufoo-form.txt", function( data ) {
		$( "#contact-form" ).html( data );
	});

});
