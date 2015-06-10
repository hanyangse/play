window.onload = init;

function init(){
	getImage();
	getInfo();
	getGragh();
	getComments();
	
	$(".evalButton").click(function(){
		var popupOptions = "width=650px,height=570px,location=no,resizable=yes,scrollbars=yes,menubar=no,toolbar=no;";
		window.open("evaluation.html", 'evaluation', popupOptions);
	});
}
// 교강사 이미지 가져오기
function getImage(){
	$(".picture").append("<img src='../images/man.png' />");
}

// 교강사명 및 강의명 가져오기
function getInfo(){
	var prof = "교강사명";
	var course = "강의명";
	$(".info").append("<p class='professor'>"+prof+"</p>");
	$(".info").append("<p class='course'>"+course+"</p>");
}

// 그래프 값 가져오기
function getGragh(){
	/* www.chartjs.org */
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

	//var ctx = $("#hexagon").getContext("2d");	/* 안됨 */
	var ctx = document.getElementById("hexagon").getContext("2d");
	var newChart = new Chart(ctx).Radar(radarChartData, {
			responsive: true
		});
}

function getComments(){
	// 코멘트 개수 가져오기
	var commentsNum = 3;
	for(var i=0; i<commentsNum; i++){
		var div = document.createElement("div");
		div.className = "comment_div";

		var div1 = document.createElement("div");
		div1.className = "comment_id";
		// 사용자 아이디 가져오기
		var userId = "abc";
		div1.innerHTML = userId;
		
		var div2 = document.createElement("div");
		div2.className = "comment";
		// 코멘트 가져오기
		var comment = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum pellentesque odio non interdum. Aenean tristique convallis imperdiet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel odio orci. Vivamus luctus tortor pharetra, eleifend mauris non, auctor metus. Cras a metus egestas, congue justo non, sollicitudin sem. Quisque imperdiet lacus quis porttitor dapibus. Donec purus leo, placerat vel pulvinar a, lobortis ut massa. Sed eu nunc faucibus, vulputate risus vel, finibus orci. Mauris vitae orci a ante vulputate rutrum et et mi. Donec placerat urna eu massa imperdiet, id tempor augue porta. Fusce mattis leo elit, eget eleifend lectus ornare ut. Nam quis gravida orci. Donec dignissim arcu sit amet posuere vehicula. Quisque ultrices porttitor ipsum eu vulputate. Sed mollis semper ipsum, non tincidunt eros fermentum vel.";
		div2.innerHTML = comment;

		div.appendChild(div1);
		div.appendChild(div2);
		$(".comments").append(div);	
	}
}