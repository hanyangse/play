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
		var codeEle = $(this).children('input');
		var temp_form = $("form");
		temp_form.append(codeEle);
		temp_form.attr("action","view");
		temp_form.attr("method","post");
		temp_form.submit();		
	});
/*
	$('.hexagon').each(function(index, el) {
		var positive = [el.children('input[name="fun"]').val()*1,el.children('el input[name="benefit"]').val()*1,0,0,0,el.children('input[name="grade"]').val()*1];
		var negative = [0,0,el.children('el input[name="homework"]').val()*1,el.children('el input[name="teamplay"]').val()*1,el.children('input[name="difficulty"]').val()*1,0];

		var radarChartData = {
			labels: ["Interesting", "Benefit", "Assignment", "Team project", "Difficulty", "Grade"],
			datasets: [
				{
					label: "My First dataset",
					fillColor: "blue",//"rgba(220,220,220,0.2)",
					strokeColor: "blue",//"rgba(220,220,220,1)",
					pointColor: "blue",//"rgba(220,220,220,1)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "blue",//"rgba(220,220,220,1)",
					data: positive//[65,59,0,0,0,90]
				},
				{
					label: "My Second dataset",
					fillColor: "red",//"rgba(151,187,205,0.2)",
					strokeColor: "red",//"rgba(151,187,205,1)",
					pointColor: "red",//"rgba(151,187,205,1)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "red",//"rgba(151,187,205,1)",
					data: negative//[0,0,27,19,96,0]
				}
			]
		};

		var ctx = el.getContext("2d");
		var newChart = new Chart(ctx).Radar(radarChartData, {
				responsive: true
			});
	});
	*/
});