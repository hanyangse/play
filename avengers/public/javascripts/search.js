$(function(){
//	var values = $(".values").text();
//	var valueArray = values.split(',');
//	var positive = [valueArray[0]*1,valueArray[1]*1,0,0,0,valueArray[5]*1];
//	var negative = [0,0,valueArray[2]*1,valueArray[3]*1,valueArray[4]*1,0]
	$('.hexagon').each(function(index, el) {
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
					data: [65,59,0,0,0,90]
				},
				{
					label: "My Second dataset",
					fillColor: "red",//"rgba(151,187,205,0.2)",
					strokeColor: "red",//"rgba(151,187,205,1)",
					pointColor: "red",//"rgba(151,187,205,1)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "red",//"rgba(151,187,205,1)",
					data: [0,0,27,19,96,0]
				}
			]
		};

		var ctx = el.getContext("2d");	/* 안됨 */
		var newChart = new Chart(ctx).Radar(radarChartData, {
				responsive: true
			});
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