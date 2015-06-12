/*
window.onload = function (){
	var Btn_signup = document.getElementById("to_signup");
	Btn_signup.onclick = openSignUp; 
		
	var Btn_signup = document.getElementById("to_signin");
	Btn_signup.onclick = openSignIn; 

	var Div_fb = document.getElementById("div_fb");
	Div_fb.onclick = authFb;

	var Inp_id = document.getElementById("studentid");
	Inp_id.onclick = deleteValue;
	var Inp_passwd = document.getElementById("password");
	Inp_passwd.onclick = deleteValue;
}

function openSignUp(){
	var articleSignUp = document.getElementById("sign_up");
	var articleSignIn = document.getElementById('sign_in');

	articleSignUp.style.display = "block";
	articleSignIn.style.display = "none";	
}

function openSignIn(){
	var articleSignUp = document.getElementById("sign_up");
	var articleSignIn = document.getElementById('sign_in');

	articleSignUp.style.display = "none";
	articleSignIn.style.display = "block";	
}
function deleteValue(){
	this.value = "";
}
function authFb(){
	alert("이거 할까요?");
}
*/
$(function(){
	$("#to_signup").click(function(){
		$("#sign_up").show();
		$("#sign_in").hide();
	});
	$("#to_signin").click(function(){
		$("#sign_in").show();
		$("#sign_up").hide();
	});
	/*$("#logo").click(function(){
		var temp_form = $("form");
		temp_form.attr("action","/");
		temp_form.attr("method","post");
		temp_form.submit();
		
	});*/
})