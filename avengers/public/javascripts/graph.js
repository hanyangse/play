$(function(){

	$('.hexagon').each(function(index, el) {
		console.log("meme");
		console.log(el);
		console.log(index);
		console.log($(this));
		var positive = [$(this).children('input[name="fun"]').val()*1,$(this).children('input[name="benefit"]').val()*1,0,0,0,$(this).children('input[name="grade"]').val()*1];
		var negative = [0,0,$(this).children('input[name="homework"]').val()*1,$(this).children('input[name="teamplay"]').val()*1,$(this).children('input[name="difficulty"]').val()*1,0];
		console.log("merong");
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

		var ctx = el.getContext("2d");	/* 안됨 */
		var newChart = new Chart(ctx).Radar(radarChartData, {
				responsive: true
			});
	});
	console.log("mu?");
});