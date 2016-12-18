$(document).ready(function() {
	$('section.button-readmore').data("expanded", false);
	$("section.button-readmore").click(function() {
		var val = $(this).data('expanded');
		$(this).data('expanded', !val);
		$(this).html(val ? "Tampilkan" : "Tutup");
		$("section.principals-welcome-dialog", $(this).closest('section.principals-welcome')).animate({
			height: val ? '110' : "640"
		});
	});
});