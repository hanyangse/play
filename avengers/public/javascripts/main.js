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
		return false;
	});

	$('.tabs').tabslet({
		animation: true
	});

	$('.card').on('click', function(event) {
		var codeEle = $(this).children('input');
		var temp_form = $("form");
		temp_form.append(codeEle);
		temp_form.attr("action","view");
		temp_form.attr("method","post");
		temp_form.submit();		
	});
});