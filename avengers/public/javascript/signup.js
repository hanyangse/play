


$(function(){
	$("#studentid").focusout(function(){
		
		$.ajax({
			url:"idcheck_ajax"
			,data: {
				'studentid' : $(this).val()
			}
			,method:"post"
			,error: function(){
				//alert("ajax 실패");
			}
			,success:function(){
				//alert("success");
			}
			
			//,complete: function(){}
		}).done(function(msg){
			alert("done"+msg);
			$("#idcheck_ajax").text(msg);
		});
	});

	$("#password_confirm").focusout(function(){

		if($("#password").val() != $("#password_confirm").val()){
			alert("비밀번호를 확인해 주세요");
		}
	});

})