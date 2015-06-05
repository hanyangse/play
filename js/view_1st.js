window.onload = init;

function init(){
	document.getElementById("evalButton").onclick = evaluation;
	$('#board').html('<object data="./Board/board.html">');
}

function evaluation(){
	var popupOptions = "width=650px,height=500px,location=no,resizable=yes,scrollbars=yes,menubar=no,toolbar=no;";
	window.open("../DaumEditor/daum.html", 'evaluation', popupOptions);
}