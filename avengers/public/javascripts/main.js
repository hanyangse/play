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
	
});