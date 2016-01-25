var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Page= require('../models/page.js');
var adminUser= require('../models/admin-users.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Api interface');
});

router.get('/pages', function(req,res){

	return Page.find(function(err, pages){
	if(!err){
		return res.send(pages);
	} else{
		return res.send(500, err);

	}

});


});

module.exports = router;
