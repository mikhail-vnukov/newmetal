(function($) {
	$(document).ready(function() {

		$('#feedbacks-roundabout').carouFredSel({
			auto: false,
			prev: '#prev2',
			next: '#next2',
			pagination: '#pager',
			height: 486,
			width: 900,
			items: {
				visible: 3,
			},
			scroll: {
				items: 1,
				fx: "crossfade",
				onBefore: function( data ) {
					setTimeout(function() {
						data.items.visible.eq( 0 ).addClass('small');
						data.items.visible.eq( 1 ).removeClass('small');
						data.items.visible.eq( 2 ).addClass('small');
					}, 0);
				}
			}
		});

		$(".more").click(function() {
			$("#modal-1").toggleClass("md-show");
		});

	});

	$(function(){
		$('#slider').anythingSlider({
			buildStartStop: false,
			autoPlay: true,
			stopAtEnd: false
		});
	});


})(jQuery);


