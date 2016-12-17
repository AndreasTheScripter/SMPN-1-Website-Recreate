$(document).ready(function(){
	var height = $(window).height();
	$(window).scroll(function(){
		if($(document).scrollTop() > height - 90) {
			$('#navbar').addClass('shrink');
		} else {
			$('#navbar').removeClass('shrink');
		}
	});
});