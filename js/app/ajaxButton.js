/**
 * New node file
 */

// Start the main app logic.
define (['jquery.min'], function () {
	
	var buttonAction = function() {
		$.ajax({
				url: "http://echo.jsontest.com/key1/value1/key2/value2/key3/value3/key4/value4"
			}).done(function(data) {
				$.each(data, function(prop, value) {
					$('#ajax_data tr:last')
					    .after('<tr>' + 
					    		   '<td>' + prop  + '</td>' + 
					    	       '<td>' + value + '</td>' + 
					    	   '</tr>');
				});
			});		
		};
		
	var clearAction = function() {
		$('#ajax_data > tbody').html('');
		$('#ajax_data > tbody').html('<tr><th>Key</th><th>Value</th></tr>');
	};
		
	var wire = function() {
	    $("#ajax_btn").click(buttonAction);
	    $("#clear_btn").click(clearAction);
	};
	
	wire();
	
});
