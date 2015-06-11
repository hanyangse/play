window.onload = function (){
	var Btn_signup = document.getElementById("to_signup");
	Btn_signup.onclick = openSignUp; 
		
	var Btn_signup = document.getElementById("to_signin");
	Btn_signup.onclick = openSignIn; 
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