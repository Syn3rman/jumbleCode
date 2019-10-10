 
const MongoClient = require('mongodb').MongoClient;

const mongourl='mongodb://localhost:27017/';
console.log(mongourl);

// connecting to db server
async function get(){
  let db = await MongoClient.connect(mongourl, {useNewUrlParser: true, useUnifiedTopology: true});
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
