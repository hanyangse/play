
/*
 * GET home page.
 */

exports.index = function(req, res){
	if(req.session.studentid){
		res.render('index.ejs',{studentid:req.session.studentid});
		console.log("메인으로");
	}else{
		console.log("로그인하러");
		res.render('signin.ejs');
	}
	
};