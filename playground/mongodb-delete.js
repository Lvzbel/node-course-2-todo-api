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

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) =>{
  //   console.log(result);
  // });
  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // })
  // db.collection('Users').deleteMany({name: 'Rodrigo'}).then((result) => {
  //   console.log(result);
  // })
  db.collection('Users').findOneAndDelete({_id: new ObjectID("59cec02f68e44c20ed31d4a1")}).then((result) => {
    console.log(result);
  })
  //db.close();
});
