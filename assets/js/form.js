(function($) {
	
	function chargeOrderForm() {

		$form = $('#order-form');
		$modal = $('.md-modal');

		function closeOrderForm() {
			$modal.removeClass('md-show' );
		}

		function showOrderForm() {
			$form.addClass("md-show");
		};

		$('.order-online').click(function() {
			showOrderForm();
		});

		function showAskForm() {

		};

		$('.md-close').click(function() {
			closeOrderForm();
		});

		$('.md-overlay').click(function() {
			closeOrderForm();
		});

		$("#submit-button").click(function() {

		    $.ajax({
		           type: "POST",
		           url: "send.php",
		           data: $form.find('form').serialize(), // serializes the form's elements.
		           success: function(data) {
		               alert(data); // show response from the php script.
		           }
		         });
		    closeOrderForm();
		    return false; // avoid to execute the actual submit of the form.
		});

	}
	
	$(document).ready(function() {
		chargeOrderForm();
	});
})(jQuery);

