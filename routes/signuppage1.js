var express = require('express');
let mongoClient=require('mongodb').MongoClient;
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('new1');
});
router.post('/', function(req,res)
{
  let myName1=req.body.firstname;
  let  myName2=req.body.lastname;
  let username=req.body.username;
  let email=req.body.emailid;
  let password=req.body.password;
  console.log(myName1)
  let url='mongodb://localhost:27017';
  mongoClient.connect(url, function (err,client) {
    if(err) {
      console.log('databace error:' + err);
    }
    else
    {
      let myDB=client.db('mysample');
      if(myDB)
      {
        console.log('connected')
        myDB.collection('person').insertOne({name1:myName1,name2:myName2,username:username,email:email,password:password},function (err, result)
        {
          if(err) {
            console.log('error' + err)
          }
          else{
            console.log('successfully inserted:'+result)





          }
        })
      }
    }

  })
})
module.exports = router;

