//const MongoClient = require('mongodb').MongoClient;
// this code is identical to the one up above
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoAPP', (err,db) => {
  if (err){
    return console.log('Unable to connect to mongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos'. err);
  // })

  db.collection('Users').find({name: 'Rodrigo'}).toArray().then((name) => {
    console.log('Todos');
    console.log(JSON.stringify(name, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch Users', err);
  })

  //db.close();
});
