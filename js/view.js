window.onload = init;

function init(){
	getImage();
	getInfo();
	getGragh();
	getComments();
	
	$(".evalButton").click(function(){
		var popupOptions = "width=650px,height=500px,location=no,resizable=yes,scrollbars=yes,menubar=no,toolbar=no;";
		window.open("evaluation.html", 'evaluation', popupOptions);
	});
}
// 교강사 이미지 가져오기
function getImage(){
	$(".picture").append("<img src='../images/man.png' />");
}

// 교강사명 및 강의명 가져오기
function getInfo(){
	$(".info").append("<p>교강사명 : </p>");
	$(".info").append("<p>강의명 : </p>");
}

// 그래프 가져오기
function getGragh(){
	$(".graph").append("graph");
}

function getComments(){
	// 코멘트 개수 가져오기
	for(var i=0; i<3; i++){
		var div = document.createElement("div");
		div.className = "comment_div";

		var div1 = document.createElement("div");
		div1.className = "comment_id";
		// 사용자 아이디 가져오기
		div1.innerHTML = "abc";
		
		var div2 = document.createElement("div");
		div2.className = "comment";
		// 코멘트 가져오기
		div2.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum pellentesque odio non interdum. Aenean tristique convallis imperdiet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel odio orci. Vivamus luctus tortor pharetra, eleifend mauris non, auctor metus. Cras a metus egestas, congue justo non, sollicitudin sem. Quisque imperdiet lacus quis porttitor dapibus. Donec purus leo, placerat vel pulvinar a, lobortis ut massa. Sed eu nunc faucibus, vulputate risus vel, finibus orci. Mauris vitae orci a ante vulputate rutrum et et mi. Donec placerat urna eu massa imperdiet, id tempor augue porta. Fusce mattis leo elit, eget eleifend lectus ornare ut. Nam quis gravida orci. Donec dignissim arcu sit amet posuere vehicula. Quisque ultrices porttitor ipsum eu vulputate. Sed mollis semper ipsum, non tincidunt eros fermentum vel.";

		div.appendChild(div1);
		div.appendChild(div2);
		$(".comments").append(div);	
	}
}