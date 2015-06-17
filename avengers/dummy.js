
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
		

		/*res.render('view.ejs',{
			
			img: "/images/man.png",
			professor: "Scott Uk-jin Lee",
			course: "Software Engineering",
			values: [65,59,27,19,96,90],
			comments: [
				{userId:"a",comment:"!"},
				{userId:"b",comment:"@"},
				{userId:"c",comment:"#"},
				{userId:"d",comment:"$"},
				{userId:"e",comment:"%"}
			]
		});	*/
	});
	console.log(query);
	
});
app.post('/test',function(req,res){
	console.log("test start");
	console.log(req.body);
});
// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


app.get('/', function(req, res, next){
	res.render('index.ejs',{studentid:req.session.st});
});
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
			cards[i] = {courseName : result[i].title,
						profName : result[i].professor,
						code : result[i].code,
						credit : result[i].credits,
						department : result[i].department,
						photo: '/images/man.png'};
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

app.post('/logout',function(req,res){
	req.session.studentid=undefined;
	req.session.email = undefined;
	res.render('signin.ejs');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
