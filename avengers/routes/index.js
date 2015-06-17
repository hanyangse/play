
/*
 * GET home page.
 */

exports.index = function(req, res){
	if(req.session.studentid){
		res.render('main.ejs',{email:req.session.email});
		console.log("메인으로");
	}else{
		console.log("로그인하러");
		res.render('signin.ejs');
	}
	
};