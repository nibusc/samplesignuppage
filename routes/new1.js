var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sign In' });
});*/
router.post('/', function(req,res)
{
  let something = req.body.username;
  let something2 = req.body.password;
  res.render('getpost', {title3: something})
})
module.exports = router;
