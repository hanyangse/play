
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


// view.html 확인용 임시
app.post('/view', function(req, res){
	var code = req.body.code;
	console.log(code+": code !!!!");
	var query = connection.query("select * from total where code="+ code,function(err,result){
		if(err){
			console.log(err);
			return err;
		}
		var card = {
			courseName : result[0]['title'],
			profName : result[0]['professor'],
			code : result[0]['code'],
			credit : result[0]['credits'],
			department : result[0]['department'],
			photo: '/images/man.png',
			fun: result[0]['avg(fun)'],
			grade: result[0]['avg(grade)'],
			benefit: result[0]['avg(benefit)'],
			homework: result[0]['avg(homework)'],
			difficulty: result[0]['avg(difficulty)'],
			teamplay: result[0]['avg(teamplay)']
		};
		
		var query = connection.query("select * from evaluation where code="+ code,function(err,result){
			if(err){
				console.log(err);
				return err;
			}
			var comments = [];
			for (var i = 0; i < result.length ; i++) {
				comments[i]={
					userId: result[i].email,
					comment: result[i].comment,
					inputdate: result[i].inputdate
				};

			}
			//res.send(200, 'success');
			res.render('view.ejs', 
			{
				'title': 'HECE 검색결과',
				'email': req.session.email,
				'card': card,
				'comments': comments
			});
		});
		
	});
	console.log(query);
	
});
app.post('/test',function(req,res){
	console.log("test start");
	console.log(req.body);
	var eval = {
		'email':req.session.email, 
		'code':req.body.code,
		'year':req.body.year,
		'semester':req.body.semester,
		'fun':req.body.interesting,
		'grade':req.body.grade,
		'homework':req.body.assignment,
		'difficulty':req.body.difficulty,
		'benefit':req.body.benefit,
		'teamplay':req.body.teamproject,
		'comment':req.body.comment,
	};
	var query = connection.query('insert into evaluation set ?', eval,function(err,result){
		if(err){
			console.error(err);
			throw err;
		}
		console.log(query);
	})	
});
// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


app.get('/', routes.index);
//app.get('/users', user.list);

app.post('/search',function(req, res, next) {

	//var user = {'email': req.session.email};
	var keyword = "'%"+ req.body.keyword+"%'";
	var queryString = 'select * from course where title like ' + keyword +' or professor like '+keyword ;
	console.log(queryString);
	var query = connection.query(queryString,function(err,result){
		if(err){
			console.error(err);
			throw err;
		}
		console.log(query);

		var cards = [];
		for(var i = 0; i< result.length; i++){
			cards[i] = {
							courseName : result[i]['title'],
							profName : result[i]['professor'],
							code : result[i]['code'],
							credit : result[i]['credits'],
							photo: '/images/man.png'
						};
		}
	//console.log(keyword+": keyword");
		res.render('search', 
		{
			'title': 'HECE 검색결과',
			'email': req.session.email,
			'cards': cards
		});
	});

	
	//res.render('index', { title: 'Express' });
	
});
app.post('/signup', user.signup);

app.post('/signup_submit',function(req,res){
	var user = {'email':req.body.email, 'studentid':req.body.studentid,'password':req.body.password};
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

	var user = {
		'email':req.body.email,
	 	'password':req.body.password};
	//console.log(user.email+"1111111111111");
	var query = connection.query("select studentid,password from user where email='"+user.email+"'",function(err,rows){

		//console.log(rows);
		//console.log("user.password"+user.password);
		//console.log("rows.password"+rows[0].password);
		if(rows.length != 0){
			if(user.password==rows[0].password){
				var totCards = [];
				var funCards = [];
				var gradeCards = [];
				var benefitCards = [];
				var query = connection.query("select * , concat(fun+benefit+grade-homework-difficulty-teamplay) sum from totalv order by sum limit 10", function(err,result){
					if(err){
						console.log(err);
						return err;
					}

					for (var i = 0; i < result.length; i++) {
						totCards[i]= {
							courseName : result[i]['title'],
							profName : result[i]['professor'],
							code : result[i]['code'],
							credit : result[i]['credits'],
							photo: '/images/man.png',
							fun: result[i]['fun'],
							grade: result[i]['grade'],
							benefit: result[i]['benefit'],
							homework: result[i]['homework'],
							difficulty: result[i]['difficulty'],
							teamplay: result[i]['teamplay']
						};
					}
					var query = connection.query("select * from totalv order by fun desc limit 10 ",function(err,result){
					if(err){
						console.log(err);
						return err;
					}

					for (var i = 0; i < result.length; i++) {
						funCards[i]= {
							courseName : result[i]['title'],
							profName : result[i]['professor'],
							code : result[i]['code'],
							credit : result[i]['credits'],
							department : result[i]['department'],
							photo: '/images/man.png',
							fun: result[i]['fun'],
							grade: result[i]['grade'],
							benefit: result[i]['benefit'],
							homework: result[i]['homework'],
							difficulty: result[i]['difficulty'],
							teamplay: result[i]['teamplay']
						};
					}
					var query = connection.query("select * from totalv order by grade desc limit 10 ",function(err,result){
					if(err){
						console.log(err);
						return err;
					}

					for (var i = 0; i < result.length; i++) {
						gradeCards[i]= {
							courseName : result[i]['title'],
							profName : result[i]['professor'],
							code : result[i]['code'],
							credit : result[i]['credits'],
							department : result[i]['department'],
							photo: '/images/man.png',
							fun: result[i]['fun'],
							grade: result[i]['grade'],
							benefit: result[i]['benefit'],
							homework: result[i]['homework'],
							difficulty: result[i]['difficulty'],
							teamplay: result[i]['teamplay']
						};
					}
					var query = connection.query("select * from totalv order by benefit desc limit 10 ",function(err,result){
					if(err){
						console.log(err);
						return err;
					}

					for (var i = 0; i < result.length; i++) {
						benefitCards[i]= {
							courseName : result[i]['title'],
							profName : result[i]['professor'],
							code : result[i]['code'],
							credit : result[i]['credits'],
							department : result[i]['department'],
							photo: '/images/man.png',
							fun: result[i]['fun'],
							grade: result[i]['grade'],
							benefit: result[i]['benefit'],
							homework: result[i]['homework'],
							difficulty: result[i]['difficulty'],
							teamplay: result[i]['teamplay']
						};
					}
					req.session.email = user.email;
					res.render('main.ejs',{
						 'email':user.email,
						 'totCards': totCards,
						 'funCards': funCards,
						 'gradeCards': gradeCards,
						 'benefitCards': benefitCards,
						});	
				});
				});
				});
				});
				
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
	req.session.email = undefined;
	res.render('signin.ejs');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
