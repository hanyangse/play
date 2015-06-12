var express = require('express');
var router = express.Router();

/* GET  page. */
router.get('/', function(req, res, next) {
	res.render('search', 
		{
			title: 'HECE 검색결과',
			cards: [
				{courseName: '가로 시작하는 단어', profName:'홍길동', photo: '/images/man.png'},
				{courseName: '나로 시작하는 단어', profName:'길동이', photo: '/images/man.png'},
				{courseName: '다로 시작하는 단어', profName:'동동동이', photo: '/images/man.png'},
				{courseName: '라로 시작하는 단어', profName:'홍수빈', photo: '/images/man.png'},
			]
		});
	//res.render('index', { title: 'Express' });
});

module.exports = router;
