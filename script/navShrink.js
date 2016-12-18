$(document).ready(function() {
	$(window).scroll(function() {
		if($(document).scrollTop() > 1) {
			$('#navbar').addClass('shrink');
		} else {
			$('#navbar').removeClass('shrink');
		}
	});
});