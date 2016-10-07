var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Serviço funfando. agora é parar de preguiça e implementar essa merda');
});

module.exports = router;
