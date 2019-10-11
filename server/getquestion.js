const express = require('express');
const router = express.Router();
const dbs = require('./dbconnection');
const fs = require('fs');
const path = require('path');

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
  const language = req.body.language;
  // change number between sessions/phases
  let number = 1;
  filePath = `${__dirname}/../questions/phase${number}/${language}.json`;
  // let contents = fs.readFileSync(filePath, 'utf8');
  // contents = JSON.parse(JSON.stringify(contents));
  // console.log(contents);
  res.json(require(`../questions/phase1/${language}.json`));  
});

module.exports = router;