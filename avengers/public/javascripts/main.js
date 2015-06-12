$(function(){
	$('#prof').on('click', function(event) {
		$('.searchButton').css({display: 'none'});
		$('.searchBox').css({display: 'none'});
		$('#profForm').css({display: 'block'});
	});

	$('#course').on('click', function(event) {
		$('.searchButton').css({display: 'none'});
		$('.searchBox').css({display: 'none'});
		$('#courseForm').css({display: 'block'});
	});

	$('.searchCancel').on('click', function(event) {
		$('.searchBox').css({display: 'none'});
		$('.searchButton').css({display: 'block'});
	});

	$('.tabs').tabslet({
		animation: true
	});

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