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

router.post('/', async (req, res)=>{
  const db = await dbs.get();
  const crackathon = await db.db('crackathon');
  const round1 = crackathon.collection('round1');
  const team = req.body.team;
  const score = req.body.score;
  round1
  .insertOne({
    team,
    score
  })
  .then((result, err)=>{
    if(err){
      console.log(err);
      res.sendStatus(500);
    }
    else{
      res.json({
        msg: 'Done with the test, please leave',
        success: true,
      })
    }
  })
  .catch(e=>console.log(e));
});

module.exports = router;