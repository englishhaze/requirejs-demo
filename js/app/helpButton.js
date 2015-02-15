/**
 * New node file
 */

// Start the main app logic.
define (['jquery.min'], function () {

	var clicked = 0;
	
	var buttonAction = function() {
		if (clicked === 0) {
			$("#action_text").text("Button on");
				clicked = 1;
			} else {
				$("#action_text").text("Button off");
				clicked = 0;
			}
		};
		
	var wire = function() {
	    $("#test_btn").click(buttonAction);
	};

	wire();
	
});

