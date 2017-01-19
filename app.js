var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
// configure app

app.set('view engine','ejs')
app.set('views',path.join(__dirname, 'views'));
// use middleware

app.use(bodyParser());
// define routes


var todoItems =[{
	id : 1 ,desc: 'sunil'},
	{id: 2 ,desc: 'Akansha'}
	] ;


	app.get('/',function(req,res){

		res.render('index',{
			items : todoItems
		});
	});



	app.post('/add',function(req,res){
		
		var newItem = req.body.newItem;

		todoItems.push({
			id : todoItems.length + 1,
			desc : newItem
		});
		res.redirect('/');

	});


	app.listen(3000,function(){
		console.log("server listening at 3000");
	})