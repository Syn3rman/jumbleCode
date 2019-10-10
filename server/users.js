const express = require('express');
const router = express.Router();
const dbs = require('./dbconnection');

router.post('/newUser', async (req, res)=>{
	const db = await dbs.get();
	const jumbleCode = await db.db('jumbleCode');
	const user = jumbleCode.collection('user');
  const username = req.body.username || "CodeCell";
  user
  .findOne({username})
	.then((result, err)=>{
    console.log("Result:", result);
		if(err){
      console.log(err);
      // res.sendStatus(500);
    }
		if(result){
			console.log(result);
			res.json({
				msg: 'User already exists',
				success: false,
			});
		}
		else{
			user.insertOne({username})
			.then((result, err)=>{
				if(err){
					console.log(err);
					res.json({
            msg: 'Unable to create user',
          });
				}
				if(result){
          req.session.user = username;
					res.json({
						msg: 'Successfully created user',
						success: true,
					});
				}
      })
      .catch(er=>console.log(er));
		}
	})
	.catch(e=>console.log(e));
});

router.post('/login', (req, res)=>{
  const username = req.body.username;
  if(username){
    if(req.body.password === "Crackathon2k19"){
      req.session.user = username;
      res.json({
        msg: 'Login successful',
      });  
    }    
    else{
      res.json({
        msg: 'Login failed',
      });
    }
  }
  else{
    res.json({
      msg: 'Username missing',
    });
  }
});

router.get('/logout', (req, res)=>{
  req.session.destroy((err)=>{
    if(!err){
      console.log("user logged out.");
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

router.post('/allobjs', async function(req, res) {
  const db = await dbs.get();
  const jumbleCode = await db.db('jumbleCode');
  const user = jumbleCode.collection('user');
  user.find({})
    .toArray((err,result)=>{
      if(err){
        console.log(err);
      }
      else{
        res.json(result);
      }
    });
});

module.exports = router;
