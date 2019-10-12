const express = require('express');
const router = express.Router();
const dbs = require('./dbconnection');

// router.post('/newround1', async (req, res)=>{
//   const db = await dbs.get();
//   const crackathon = await db.db('crackathon');
//   const round1 = crackathon.collection('round1');
//   const round1name = req.body.round1name || "CodeCell";
//   round1
//   .findOne({round1name})
//   .then((result, err)=>{
//     console.log("Result:", result);
//     if(err){
//       console.log(err);
//     // res.sendStatus(500);
//     }
//     if(result){
//       console.log(result);
//       res.json({
//         msg: 'round1 already exists',
//         success: false,
//       });
//     }
//     else{
//       round1.insertOne({round1name})
//       .then((result, err)=>{
//         if(err){
//           console.log(err);
//           res.json({
//             msg: 'Unable to create round1',
//           });
//         }
//         if(result){
//           req.session.round1 = round1name;
//           res.json({
//             msg: 'Successfully created round1',
//             success: true,
//           });
//         }
//       })
//       .catch(er=>console.log(er));
//     }
//   })
//   .catch(e=>console.log(e));
// });

router.post('/login', async (req, res)=>{
  console.log("Hello");
  const db = await dbs.get();
  const crackathon = await db.db('crackathon');
  const round1 = crackathon.collection('round1');
  const participants = crackathon.collection('participants');
  const teamId = req.body.teamId;
  const password = req.body.password;
  const email = req.body.email;
  const phone = req.body.phone;
  console.log(teamId);
  console.log("Hii");
  if(teamId){
    participants
    .findOne({'username':teamId})
    .then((result, err)=>{
      console.log(result);
      if(err){
        console.log(err);
        res.sendStatus(500);
      }
      if(result){
        console.log(result);
        console.log("team id matches", result);
        console.log(password, result.password, password===result.password);
        if(password === result.password){
          console.log("password matches");
          round1
          .insertOne({
            teamId,
            password,
            email,
            phone
          })
          .then((result, err)=>{
            if(err){
              console.log(err);
              res.sendStatus(500);
            }
            else{
              req.session.user=email;
              res.json({
                msg: "Logged in successfully",
                success: true,
              })
            }
          })
          .catch(e=>console.log(e));
        }
        else{
          console.log("password does not match");
          res.json({
            msg: 'Team id or password wrong',
            success: false,
          });
        }
      }
      else{
        res.json({
          msg: 'Wrong team id, contact codecell guyz',
          success: false,
        });
      }
    })
    .catch(e=>console.log(e));
  }
  else{
    res.json({
      msg: 'Team id or password wrong',
      success: false,
    });
  }
});

router.get('/logout', (req, res)=>{
  req.session.destroy((err)=>{
    if(!err){
      console.log("round1 logged out.");
      res.json({
       msg: 'Log out successful',
       success: true,
      });
    }
    else{
      res.json({
        msg: 'Unable to logout',
        success: false,
      });
    }
  });
});

// router.post('/allobjs', async function(req, res) {
//   const db = await dbs.get();
//   const crackathon = await db.db('crackathon');
//   const round1 = crackathon.collection('round1');
//   round1.find({})
//     .toArray((err,result)=>{
//       if(err){
//         console.log(err);
//       }
//       else{
//         res.json(result);
//       }
//     });
// });

module.exports = router;