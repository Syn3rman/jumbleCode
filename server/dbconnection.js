const MongoClient = require('mongodb').MongoClient;
const { password } = require('../secrets.js');


const mongourl=`mongodb://codecell:${password}@ds333768.mlab.com:33768/crackathon`;
console.log(mongourl);

// connecting to db server
async function get(){
  let db = await MongoClient.connect(mongourl, {useNewUrlParser: true, useUnifiedTopology: true}).catch(e=>console.log(e));
  return db;
}

// the client whose connection we want to close
function terminateConnection(db){
  db.close();
}

module.exports = {
  get,
  terminateConnection
};
