
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , mysql = require('mysql');

var app = express();
var connection = mysql.createConnection({
	host : 'localhost',
	port : 3306,
	user : 'softcone',
	password : 'softcone1',
	database : 'sese'
});

connection.connect(function(err){
	if(err){
		console.error('mysql connection error');
		console.error(err);
		throw err;
	}
});
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
	console.log()
  	res.sendfile('public/view.html');
});

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
/*
app.get('/', routes.index);
//app.get('/users', user.list);

app.post('/signup', user.signup);

app.post('/signup_submit',function(req,res){
	var user = {'studentid':req.body.studentid,'password':req.body.password};
	var query = connection.query('insert into user set ?', user,function(err,result){
		if(err){
			console.error(err);
			throw err;
		}
		console.log(query);
		//res.send(200, 'success');
		res.render('signin.ejs');
		//user.signin;
		console.log("signup_submit 끝");
	})
});

app.post('/signin_submit',function(req,res){ 
	var user = {'studentid':req.body.studentid, 'password':req.body.password};
	var query = connection.query("select password from user where studentid='"+user.studentid+"'",function(err,rows){
		//console.log(rows);
		//console.log("user.password"+user.password);
		//console.log("rows.password"+rows[0].password);
		if(rows.length != 0){
			if(user.password==rows[0].password){
				req.session.studentid = user.studentid;
				res.render('index.ejs',{studentid:user.studentid});		
				
				console.log("routes.index");
			}else{
				//user.signin;
				console.log("user.signin");
				res.render('signin.ejs');
			}
		}else{
			//user.signin;
			console.log("user.signin");
			res.render('signin.ejs');		
		}
		
		//res.json(rows);
	});
	//console.log(query);
	console.log("signin_submit 끝");
});
app.post('/idcheck_ajax',function(req,res){
	var studentid = req.body.studentid;
	var query = connection.query("select studentid from user where studentid='"+studentid+"'",function(err,rows){
		if(rows.length != 0){
			console.log("이미 등록된 학번");
			res.send("이미 등록된 학번입니다");
		}else{
			console.log("사용 가능한 학번");
			res.send("사용 가능 학번입니다");
		}
	});
});

app.post('/logout',function(req,res){
	req.session.studentid=undefined;
	res.render('signin.ejs');
});
*/
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
