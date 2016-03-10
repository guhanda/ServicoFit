var express = require('express');
var connection  = require('express-myconnection');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/loginPage/:u', function(req, res, next) {

var p2 = req.params.u;

  //res.render('index', { title: p2 });

  if(req.params.u || req.params.u > 0)
  {
 	 res.send(true);
  }
  
});

router.post('/loginPage', function(req, res, next) {
	var request = req.body;
	
	if (req.body.usuario == 'admin' && req.body.password == 'admin'){
 	 	res.send(true);
	}
 	else {
 		res.send(false);	
 	}
  
});

/* GET home page. */


module.exports = router;
