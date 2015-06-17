$(function(){
	$("#password_confirm").focusout(function(){

		if($("#password").val() != $("#password_confirm").val()){
			alert("비밀번호를 확인해 주세요");
		}
	});


	$("#logout").click(function(){
		alert("test!!!");
	});
})