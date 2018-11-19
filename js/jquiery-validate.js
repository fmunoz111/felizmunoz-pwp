$(document).ready(function(){
	$("form").validate({
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

		submitHandler: function(form) {
			$($form).ajaxSubmit({
				type: "POST",
				url: $("#my-contact-form").attr("action"),

				succes: function(ajaxOutput) {
					$("#output-area").css("display", "clear");

					// write the server's reply to the output area
					$("#output-area").html(ajaxOutput);

					// reset the form if it was successful
					if($(".alert-success").length >= 1) {
						$("#my-contact-form")[0].reset();
				}

			})

		}

	})

}