$(function(){

	$('.card').on('click', function(event) {
		$.ajax({
			url: '/view',
			type: 'post',
			dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
			data: { code: $(this).children('input').val()},
		})
		.done(function() {
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
	});
});