/* 
	그래프 :
		www.chartjs.org 
*/
window.onload = init;

function init(){
	getGragh();

	$(".evalButton").click(function(){
		$("#eval").css({
			display: 'block'
		});
	});
}

// 그래프 값 가져오기
function getGragh(){

	var positive = [$('.graph input[name="fun"]').val()*1,$('.graph input[name="benefit"]').val()*1,0,0,0,$('.graph input[name="grade"]').val()*1];
	var negative = [0,0,$('.graph input[name="homework"]').val()*1,$('.graph input[name="teamplay"]').val()*1,$('.graph input[name="difficulty"]').val()*1,0];
	console.log("po"+positive);
	console.log("ne"+negative);
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

	//var ctx = $("#hexagon").getContext("2d");	/* 안됨 */
	var ctx = document.getElementById("hexagon").getContext("2d");
	var newChart = new Chart(ctx).Radar(radarChartData, {
			responsive: true
		});
}