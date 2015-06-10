
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.signin = function(req, res){
	if(req.session.studentid){
		console.log("로그인 되어있음");
	}else{
		console.log("signin 으로 진입	");
		res.render('signin.ejs');	
	}
	
}

exports.signup = function(req, res){
	if(req.session.studentid){
		console.log("로그인 되어있음");
	}else{
		res.render('signup');
	}
	
}