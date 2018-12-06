$(document).ready(function(){
	$("#contact-me").validate({
		// setup handling of form errors
		debug: true,
		errorClass: "alert alert-danger",
		errorLabelContainer: "#output-area",
		errorElement: "div",

		rules: {
			name: {
				required: true
			},

			email: {
				email: true,
				required: true
			},

			message: {
				maxlength: 2000,
				required: true
			}
		},

		messages: {
			name: {
				required: "Please add a name"
			},

			email: {
				email: "please add a valid email",
				required: "Please add a valid email"
			},

			message: {
				maxlength: "200 charcters max.",
				required: "Please enter a message"
			}
		},

		// AJAX submit the form data to back end if rules pass
		submitHandler: function(form) {
			$("#contact-me").ajaxSubmit({
				type: "POST",
				url: $("#contact-me").attr("action"),

				success: function(ajaxOutput) {
					$("#output-area").css("display", "");

					// write the server's reply to the output area
					$("#output-area").html(ajaxOutput);

					// reset the form if it was successful
					if($(".alert-success").length >= 1) {
						$("#contact-me")[0].reset();
					}
				}
			})
		}

});
});