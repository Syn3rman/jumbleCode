  const express = require('express');
  const router = express.Router();
  const dbs = require('./dbconnection');

function isLoggedIn(req, res, next){
  console.log(req.session, req.session.user)
  if(req.session.user){
    next();
  }
  else{
    res.json({
      msg: 'User not logged in',
      success: false,
    });
  }
}

router.post('/', isLoggedIn, (req, res)=>{
  
});

module.exports = router;