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