const express = require('express');
const router = express.Router();

// function isLoggedIn(req, res, next){
//   console.log(req.session, req.session.user)
//   if(req.session.user){
//     next();
//   }
//   else{
//     res.json({
//       msg: 'User not logged in',
//       success: false,
//     });
//   }
// }

router.post('/', (req, res)=>{
  const language = req.body.language;
  // change number between sessions/phases
  let number = 2;
  filePath = `${__dirname}/../questions/phase${number}/${language}.json`;
  res.json(require(`../questions/phase${number}/${language}.json`));  
});

module.exports = router;