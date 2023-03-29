var express = require('express');
var router = express.Router();

var ran =Math.random()*100;

var a=0;
var b=0;
var c=0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  a=Math.fround(ran);
  b=Math.random();
  c=Math.round(ran);
  
  res.send(`fround applied to : ${ran} is ${a} <br> random applied to : ${ran} is ${b} <br> round applied to : ${ran} is ${c}`);
 
});

module.exports = router;
